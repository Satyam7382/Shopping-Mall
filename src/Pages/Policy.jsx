import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Policy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-gray-100 py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
         
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy & Terms
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trust is important to us. Here's how we protect your data and our terms of service.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Privacy Policy Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-blue-600 px-6 py-4">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="ml-3 text-xl font-semibold text-white">Privacy Policy</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                At Satlini Mall, your privacy is our priority. We collect minimal data to enhance your experience while ensuring maximum protection.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">Military-grade encryption for all sensitive data</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">Strict no-sharing policy with third parties</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">Transparent cookie usage with opt-out options</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">Easy data access and deletion requests</p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Terms & Conditions Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-gray-900 px-6 py-4">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="ml-3 text-xl font-semibold text-white">Terms & Conditions</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                By accessing Satlini Mall services, you agree to comply with our terms designed to ensure a safe and enjoyable experience for all.
              </p>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-gray-700">
                  <span className="font-medium">Proper Conduct:</span> Respect our facilities and other visitors
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Intellectual Property:</span> All content remains property of Satlini Mall
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Service Changes:</span> We may update offerings to improve your experience
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Accountability:</span> Violations may result in restricted access
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Liability:</span> We're not responsible for lost or stolen personal items
                </li>
              </ol>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is happy to clarify any details about our policies or terms.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Policy;
