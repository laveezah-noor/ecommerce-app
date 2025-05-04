"use client";
import { useState } from "react";
import { products } from "@/app/data/dummyData";
import AppButton from "@/app/components/AppButton/AppButton";
import Image from "next/image";
import {
  FiShoppingBag,
  FiX,
  FiPlus,
  FiMinus,
  FiArrowRight,
  FiCreditCard,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";
import { BsTruck } from "react-icons/bs";
import payment_1 from "../../assets/images/payment_1.png";
import payment_2 from "../../assets/images/payment_2.png";
import payment_3 from "../../assets/images/payment_3.png";
import { useRouter } from "next/navigation";

function Cart() {
  const router = useRouter();
  const [quantities, setQuantities] = useState(
    products.reduce(
      (acc, product) => ({
        ...acc,
        [product.id]: 1,
      }),
      {}
    )
  );

  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const subtotal = products.reduce((sum, product) => {
    return sum + product.price * (quantities[product.id] || 1);
  }, 0);

  const deliveryFee = 499;
  const discount = couponApplied ? 1500 : subtotal > 10000 ? 1000 : 0;
  const tax = (subtotal - discount) * 0.18;
  const total = subtotal - discount + deliveryFee + tax;

  const updateQuantity = (productId, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, newQuantity),
    }));
  };

  const removeItem = (productId) => {
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[productId];
      return newQuantities;
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="bg-white shadow-sm py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-2">
            <FiShoppingBag className="text-gray-800 mr-3" size={28} />
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              Your Shopping Bag
            </h1>
          </div>
          <div className="w-16 h-1 bg-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600 text-center text-lg">
            {products.length} items ready for checkout
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 h-48 md:h-auto relative bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                          {product.title}
                        </h2>
                        <div className="flex space-x-3 text-sm text-gray-500 mb-4">
                          <span>Color: Black</span>
                          <span>Size: Medium</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                          Rs. {product.price.toLocaleString()}
                        </p>
                      </div>

                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                      >
                        <FiX size={20} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-6">
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            updateQuantity(
                              product.id,
                              quantities[product.id] - 1
                            )
                          }
                          className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-l-lg text-gray-600 hover:bg-gray-50"
                        >
                          <FiMinus size={16} />
                        </button>
                        <div className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-200 text-gray-900 font-medium">
                          {quantities[product.id]}
                        </div>
                        <button
                          onClick={() =>
                            updateQuantity(
                              product.id,
                              quantities[product.id] + 1
                            )
                          }
                          className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-r-lg text-gray-600 hover:bg-gray-50"
                        >
                          <FiPlus size={16} />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-gray-500 mb-1">
                          Subtotal
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          Rs.{" "}
                          {(
                            product.price * quantities[product.id]
                          ).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <button className="text-gray-700 font-medium hover:text-gray-900 flex items-center group">
                <span>Continue Shopping</span>
                <FiArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-6">
              {/* Order summary card */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b border-gray-100">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between pb-4 border-b border-gray-100">
                    <span className="text-gray-600 flex items-center">
                      <BsTruck size={16} className="mr-2" />
                      Shipping
                    </span>
                    <span className="font-medium text-gray-900">
                      Rs. {deliveryFee.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between pt-4">
                    <span className="text-xl font-bold text-gray-900">
                      Total
                    </span>
                    <div className="text-right">
                      <span className="text-xl font-bold text-gray-900">
                        Rs.{" "}
                        {total.toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <AppButton
                    label="Proceed to Checkout"
                    onClick={() => {
                      router.push("/checkout");
                    }}
                  />

                  <div className="mt-4 text-sm text-gray-500 flex items-center justify-center">
                    <FiShield size={16} className="mr-2" />
                    <span>Secure checkout</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    We Accept
                  </h3>
                  <FiCreditCard size={20} className="text-gray-400" />
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="h-12 w-20 bg-white rounded-md flex items-center justify-center p-1">
                    <Image
                      src={payment_2}
                      alt="Payment Method 2"
                      width={64}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="h-12 w-20 bg-white rounded-md flex items-center justify-center p-1">
                    <Image
                      src={payment_1}
                      alt="Payment Method 1"
                      width={64}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="h-12 w-20 rounded-md flex items-center justify-center p-1">
                    <Image
                      src={payment_3}
                      alt="Payment Method 3"
                      width={64}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-sm text-gray-500 space-y-2">
                  <div className="flex items-center">
                    <FiCheckCircle size={16} className="mr-2 text-green-500" />
                    <p>Fast & Reliable Delivery</p>
                  </div>
                  <div className="flex items-center">
                    <FiCheckCircle size={16} className="mr-2 text-green-500" />
                    <p>15 days checking warranty</p>
                  </div>
                  <div className="flex items-center">
                    <FiCheckCircle size={16} className="mr-2 text-green-500" />
                    <p>100% secure payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
