import React from "react";

function Checkout() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Billing Details */}
        <div className="lg:col-span-2 bg-white shadow-md rounded-xl p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Checkout</h1>
          <form className="space-y-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Billing Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Last name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Company Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company name (optional)
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Country */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country / Region *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Street Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="House number and street name"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, unit etc. (optional)"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Town / City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Town / City *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* State / County */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State / County *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Postcode / ZIP */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postcode / ZIP *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Email */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Order Notes */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order notes (optional)
                </label>
                <textarea
                  rows="4"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Notes about your order, e.g. special delivery instructions"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:sticky lg:top-10 bg-white shadow-2xl rounded-2xl p-6 h-fit border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            🧾 Your Order
          </h2>

          {/* Product List */}
          <div className="border-b pb-6 mb-6 space-y-4 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">AOC 27G2Z 27” 240Hz</span>
              <span className="font-semibold text-gray-900">Rs84,999.00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Ryzen 5 3600, GTX 1660 OC</span>
              <span className="font-semibold text-gray-900">Rs117,000.00</span>
            </div>

            <hr className="my-4 border-dashed border-gray-300" />

            <div className="flex justify-between font-medium text-gray-800">
              <span>Subtotal</span>
              <span>Rs201,999.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span>Free shipping</span>
            </div>
            <div className="flex justify-between font-bold text-xl text-gray-900 mt-4">
              <span>Total</span>
              <span>Rs201,999.00</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6 space-y-4">
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="mt-1 accent-blue-600"
              />
              <div className="text-sm">
                <p className="font-medium text-gray-900">
                  Direct bank transfer
                </p>
                <p className="bg-gray-50 border border-gray-200 mt-2 p-3 rounded text-xs text-gray-600">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </div>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" className="accent-blue-600" />
              <span className="text-sm font-medium text-gray-900">
                Cash on delivery
              </span>
            </label>
          </div>

          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <span className="text-blue-600 underline cursor-pointer hover:text-blue-800 transition">
              privacy policy
            </span>
            .
          </p>

          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-md hover:scale-105 transition-transform">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
