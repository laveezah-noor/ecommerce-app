import React from "react";

function Billing() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Order Confirmation
              </h1>
              <p className="text-gray-500">Thank you for your purchase</p>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Processing
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Order Number</p>
              <p className="font-medium text-gray-900">#4022</p>
            </div>
            <div>
              <p className="text-gray-500">Date</p>
              <p className="font-medium text-gray-900">April 12, 2025</p>
            </div>
            <div>
              <p className="text-gray-500">Payment Method</p>
              <p className="font-medium text-gray-900">Direct Bank Transfer</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="px-6 py-4 bg-gray-800 text-white">
            <h2 className="text-lg font-medium">Order Summary</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between pb-4 border-b">
                <div className="flex-grow">
                  <h3 className="font-medium text-gray-900">
                    AOC 27G2ZE 27" 240Hz HDR Gaming Monitor
                  </h3>
                  <p className="text-gray-500 text-sm">
                    High-performance gaming monitor
                  </p>
                </div>
                <p className="font-medium text-gray-900">Rs.84,999.00</p>
              </div>

              <div className="flex justify-between pb-4 border-b">
                <div className="flex-grow">
                  <h3 className="font-medium text-gray-900">
                    Ryzen 5 3600, Gigabyte GTX 1660 OC
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Gaming CPU & GPU combo
                  </p>
                </div>
                <p className="font-medium text-gray-900">Rs.74,000.00</p>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <p>Subtotal</p>
                <p>Rs.158,999.00</p>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <p>Shipping</p>
                <p className="text-green-600">Free</p>
              </div>

              <div className="flex justify-between font-bold text-gray-900 pt-4 border-t">
                <p>Total</p>
                <p>Rs.158,999.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Payment Details
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  Please make payment to the account details below. Your order
                  will be processed once payment is confirmed.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Bank Transfer</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-gray-500">Account Holder:</span>{" "}
                  Muhammad Abbas (Asaan AC)
                </p>
                <p>
                  <span className="text-gray-500">Bank:</span> Meezan Bank,
                  Farhan Paradise Block 19 Gulistan-e-Johar
                </p>
                <p>
                  <span className="text-gray-500">Account #:</span>{" "}
                  1020308644079
                </p>
                <p>
                  <span className="text-gray-500">IBAN:</span>{" "}
                  PK92MEZN0102030108644079
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-700 mb-2">Mobile Payment</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-gray-500">JazzCash:</span> 03092828907
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Billing Address
            </h2>
            <address className="not-italic text-gray-600">
              <p className="font-medium text-gray-800">Muhammad Yameen</p>
              <p>abc 2</p>
              <p>Karachi, Sindh, 1234</p>
              <p className="mt-2">
                <span className="text-gray-500">Phone:</span> 123456789
              </p>
              <p>
                <span className="text-gray-500">Email:</span>{" "}
                yameen004@gmail.com
              </p>
            </address>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Shipping Address
            </h2>
            <address className="not-italic text-gray-600">
              <p className="font-medium text-gray-800">Muhammad Yameen</p>
              <p>abc 2</p>
              <p>Karachi, Sindh, 1234</p>
            </address>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            If you have any questions about your order, please contact our
            customer support.
          </p>
          <p className="mt-2">© 2025 Your Store Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Billing;
