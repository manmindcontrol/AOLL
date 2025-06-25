import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SuccessPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-soft overflow-hidden"
        >
          <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <FontAwesomeIcon
                icon="check-circle"
                className="h-8 w-8 text-green-600"
              />
            </div>

            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Thank You for Your Purchase!
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Your order has been successfully processed.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Order Details
              </h2>

              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Product:</span>
                <span className="text-gray-900 font-medium">
                  The Art of Lasting Love (E-Book)
                </span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Order ID:</span>
                <span className="text-gray-900">
                  ORD-{Math.floor(100000 + Math.random() * 900000)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="text-gray-900 font-medium">$19.99</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                We have sent a download link to your email. You can also
                download your e-book directly below:
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors">
                <FontAwesomeIcon icon="download" className="h-5 w-5 mr-2" />
                Download Your E-Book
              </button>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Whats Next?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 border border-gray-200 rounded-md">
                  <FontAwesomeIcon
                    icon="book-open"
                    className="h-6 w-6 text-primary mb-2"
                  />
                  <h4 className="font-medium text-gray-800 mb-1">
                    Start Reading
                  </h4>
                  <p className="text-sm text-gray-600">
                    Open your e-book on any device and begin your journey to a
                    better relationship.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-md">
                  <FontAwesomeIcon
                    icon="check-circle"
                    className="h-6 w-6 text-primary mb-2"
                  />
                  <h4 className="font-medium text-gray-800 mb-1">
                    Complete Exercises
                  </h4>
                  <p className="text-sm text-gray-600">
                    Work through the practical exercises with your partner to
                    see real results.
                  </p>
                </div>
              </div>

              <Link
                to="/"
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
              >
                <FontAwesomeIcon icon="house" className="h-5 w-5 mr-2" />
                Return to Homepage
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessPage;
