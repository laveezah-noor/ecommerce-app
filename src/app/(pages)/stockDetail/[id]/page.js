"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { products } from "@/app/data/dummyData";
import Card from "@/app/components/Card/Card";
import {
  RiWhatsappFill,
  RiHeartLine,
  RiHeartFill,
  RiZoomInLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiShoppingCartLine,
} from "react-icons/ri";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaShippingFast,
  FaRegCreditCard,
  FaArrowLeft,
  FaTruckMoving,
} from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AppButton from "@/app/components/AppButton/AppButton";

function StockDetail() {
  const router = useRouter();
  const { id } = useParams();
  const product = products.find((item) => item.id.toString() === id);

  const [mainImage, setMainImage] = useState(product?.image);
  const [count, setCount] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("details");
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (showAddedToCart) {
      const timer = setTimeout(() => setShowAddedToCart(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showAddedToCart]);

  const scrollGallery = (direction) => {
    if (!galleryRef.current) return;

    const scrollAmount = 100;
    if (direction === "left") {
      galleryRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <button
            onClick={() => router.push("/products")}
            className="px-6 py-2 bg-[#007aad] text-white rounded-lg hover:bg-[#00638a] transition-colors inline-flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id.toString() !== id
  );

  const handleAddToCart = () => {
    setShowAddedToCart(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Product Main Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Column - Enhanced Image Gallery */}
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-gray-100">
              {/* Main Image Container with Top Actions */}
              <div className="relative p-6">
                <div
                  className={`relative w-full h-96 mx-auto rounded-xl overflow-hidden shadow-lg
                  ${isZoomed ? "scale-110" : "hover:scale-105"}
                  transition-all duration-500 cursor-pointer bg-white`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                  )}

                  <Image
                    src={mainImage}
                    alt={product.title}
                    fill
                    className="object-contain transition-opacity duration-300"
                    onLoadingComplete={() => setImageLoading(false)}
                    onLoadStart={() => setImageLoading(true)}
                    priority
                  />

                  {/* Decorative elements */}
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                </div>
              </div>

              {/* Thumbnail Gallery with Horizontal Scroll */}
              {product.images && product.images.length > 0 && (
                <div className="relative px-6 pt-2 pb-6 ">
                  {/* Scroll buttons */}
                  {product.images.length > 4 && (
                    <>
                      <button
                        onClick={() => scrollGallery("left")}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md z-10 hover:bg-gray-50"
                      >
                        <RiArrowLeftSLine className="text-gray-600" />
                      </button>
                      <button
                        onClick={() => scrollGallery("right")}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md z-10 hover:bg-gray-50"
                      >
                        <RiArrowRightSLine className="text-gray-600" />
                      </button>
                    </>
                  )}

                  <div
                    ref={galleryRef}
                    className="flex gap-3 overflow-x-auto py-2 px-2 no-scrollbar snap-x"
                  >
                    {product.images.map((imageObj, index) => {
                      const imageSrc = Object.values(imageObj)[0];
                      const isActive = mainImage === imageSrc;

                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setMainImage(imageSrc);
                            setImageLoading(true);
                          }}
                          className={`relative min-w-[60px] w-16 aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300
                            ${
                              isActive
                                ? "ring-2 ring-[#007aad] transform scale-110 shadow-md"
                                : "border border-gray-200 opacity-60 hover:opacity-100 hover:border-[#007aad]"
                            }`}
                        >
                          <Image
                            src={imageSrc}
                            alt={`${product.title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      );
                    })}

                    {/* 360 View Option */}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Product Info */}
            <div className="p-6 md:p-8 flex flex-col">
              <div className="mb-2">
                <span className="px-3 py-1 bg-blue-50 text-[#007aad] rounded-full text-xs font-medium">
                  {product.category}
                </span>
              </div>

              <h2 className="font-bold text-3xl text-gray-800 mb-3">
                {product.title}
              </h2>

              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${
                        star <= 4 ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">(32 reviews)</span>
              </div>

              {/* Tabs */}
              <div className="mb-6">
                <div className="flex border-b border-gray-200">
                  <button
                    className={`pb-2 px-4 -mb-px font-medium text-sm ${
                      activeTab === "details"
                        ? "border-b-2 border-[#007aad] text-[#007aad]"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("details")}
                  >
                    Details
                  </button>
                  <button
                    className={`pb-2 px-4 -mb-px font-medium text-sm ${
                      activeTab === "specifications"
                        ? "border-b-2 border-[#007aad] text-[#007aad]"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("specifications")}
                  >
                    Specifications
                  </button>
                </div>

                <div className="pt-4">
                  {activeTab === "details" && product.details && (
                    <div>
                      <ul className="space-y-2">
                        {product.details.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <IoMdCheckmarkCircleOutline className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "specifications" &&
                    product.description &&
                    Array.isArray(product.description) && (
                      <div className="grid grid-cols-1 gap-y-2 text-sm">
                        {Object.entries(product.description[0]).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="grid grid-cols-2 pb-2 border-b border-gray-100"
                            >
                              <span className="font-medium text-gray-600 capitalize">
                                {key.replace("_", " ")}
                              </span>
                              <span className="text-gray-800">{value}</span>
                            </div>
                          )
                        )}
                      </div>
                    )}
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <p className="font-bold text-3xl text-[#007aad]">
                    Rs. {product.price}
                  </p>

                  {/* Availability Badge */}
                  <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                    In Stock
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setCount(count > 1 ? count - 1 : 1)}
                      className="px-3 py-2 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-base font-medium">
                      {count}
                    </span>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="px-3 py-2 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-full">
                    <AppButton
                      label="Add to Cart"
                      variant="primary"
                      icon={<RiShoppingCartLine size={18} />}
                      size="md"
                      onClick={() => {
                        router.push("/cart");
                      }}
                    />
                  </div>
                </div>

                {/* Perks */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FaTruckMoving className="text-[#007aad] mr-2" />
                    <span className="text-sm">Fast Delivery Available</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaRegCreditCard className="text-[#007aad] mr-2" />
                    <span className="text-sm">Secure Payment</span>
                  </div>
                </div>

                {/* Social Sharing */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">
                    Share this product:
                  </p>
                  <div className="flex gap-3 text-2xl">
                    <FaFacebook className="text-[#007aad] hover:text-blue-600 cursor-pointer transition-colors" />
                    <RiWhatsappFill className="text-[#007aad] hover:text-green-600 cursor-pointer transition-colors" />
                    <FaFacebookMessenger className="text-[#007aad] hover:text-blue-500 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-2 w-8 h-1 bg-[#007aad] inline-block"></span>
            Similar Products
          </h2>

          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.slice(0, 3).map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default StockDetail;

// `
// @layer utilities {
//   .no-scrollbar::-webkit-scrollbar {
//     display: none;
//   }

//   .no-scrollbar {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }
// }
// `;
