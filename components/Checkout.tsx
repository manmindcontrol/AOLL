// Checkout.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCheckCircle,
  faLock,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Checkout: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);
    setErrorMessage(null);

    setTimeout(() => {
      setIsProcessing(false);
      router.push("/success");
    }, 2000);
  };

  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-white hover:text-primary mb-8 transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 mr-2" />
            Back to Home
          </button>

          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gray-200">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-2">
                Complete Your Purchase
              </h1>
              <p className="text-gray-600">
                You are just one step away from accessing The Art of Lasting
                Love
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-8">
              <div className="md:col-span-3 p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Your e-book will be delivered to this email
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Details
                    </label>
                    <div className="p-4 border border-gray-300 rounded-md focus-within:ring-primary focus-within:border-primary">
                      <CardElement
                        options={{
                          style: {
                            base: {
                              fontSize: "16px",
                              color: "#424770",
                              "::placeholder": {
                                color: "#aab7c4",
                              },
                            },
                            invalid: {
                              color: "#9e2146",
                            },
                          },
                        }}
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!stripe || isProcessing}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white font-medium text-lg ${
                      isProcessing || !stripe
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-primary hover:bg-primary-dark"
                    } transition-colors`}
                  >
                    {isProcessing ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faLock}
                          className="h-5 w-5 mr-2"
                        />
                        Pay $19.99
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-sm text-gray-500 flex items-center justify-center">
                    <FontAwesomeIcon icon={faLock} className="h-4 w-4 mr-1" />
                    Secure payment powered by Stripe
                  </p>
                </form>
              </div>

              <div className="md:col-span-2 bg-gray-50 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-200">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="h-8 w-8 text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      The Art of Lasting Love
                    </h3>
                    <p className="text-gray-500">
                      Digital E-Book • Instant Download
                    </p>
                  </div>
                </div>

                <div className="border-t border-b border-gray-200 py-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">$29.99</span>
                  </div>
                  <div className="flex justify-between mb-2 text-green-600">
                    <span>Discount (33%)</span>
                    <span>-$10.00</span>
                  </div>
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>$19.99</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Instant digital delivery",
                    "Lifetime access to updates",
                    "Read on any device",
                    "30-day money-back guarantee",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
