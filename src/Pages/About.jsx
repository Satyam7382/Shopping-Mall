import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Satlini Mall
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Where shopping meets extraordinary experiences in the heart of the city
        </p>
      </motion.section>

      {/* History */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 border-l-4 border-blue-600 pl-4">
          Our Journey
        </motion.h2>
        <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-lg p-8 md:p-10">
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Satlini Mall opened its doors in 2005 with a vision to redefine the shopping experience. 
            What began as a modest shopping complex has grown into one of the most beloved retail and 
            entertainment hubs in the region.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Milestones</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">2005: Grand opening with 50 stores</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">2012: Major expansion adding food court and cinema</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">2018: Sustainability initiatives launched</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Awards</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Best Shopping Experience 2019</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Green Building Certification 2020</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Customer Choice Award 2021-2023</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Vision and Mission */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 border-l-4 border-blue-600 pl-4">
          Vision & Mission
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeIn} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-700">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the most loved shopping and lifestyle destination by creating unforgettable experiences that enrich lives and build lasting relationships.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 text-white p-3 rounded-lg mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-700">Our Mission</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Deliver unparalleled shopping, dining, and entertainment</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Create engaging events and community programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Maintain sustainability and social responsibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Ensure excellent customer service and convenience</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Store Categories */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 border-l-4 border-blue-600 pl-4">
          Shopping Experience
        </motion.h2>
        
        <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10">
            <p className="text-lg text-gray-800 mb-8">
              Our mall hosts over 200 stores from international giants to boutique shops, spanning multiple categories to satisfy all tastes and preferences:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "👗", name: "Fashion & Apparel", desc: "Trendsetting styles for all ages" },
                { icon: "📱", name: "Electronics", desc: "Latest tech and smart devices" },
                { icon: "🍔", name: "Food & Beverage", desc: "Multi-cuisine dining options" },
                { icon: "🏠", name: "Home Decor", desc: "Elegant and modern designs" },
                { icon: "🏀", name: "Sports & Outdoor", desc: "Gear and activewear" },
                { icon: "🧸", name: "Toys & Games", desc: "Educational and fun options" },
                { icon: "🎨", name: "Arts & Crafts", desc: "Creative supplies" },
                { icon: "💄", name: "Beauty & Wellness", desc: "Spas and premium skincare" },
                { icon: "📚", name: "Books & Stationery", desc: "For readers and professionals" },
              ].map((category, index) => (
                <div key={index} className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Services */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 border-l-4 border-blue-600 pl-4">
          Customer Services
        </motion.h2>
        
        <motion.div variants={fadeIn} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "📶", title: "Free Wi-Fi", desc: "High-speed internet throughout" },
            { icon: "🪑", title: "Lounges", desc: "Comfortable seating areas" },
            { icon: "🛒", title: "Personal Shopping", desc: "Assistance available" },
            { icon: "👶", title: "Family Rooms", desc: "Baby care facilities" },
            { icon: "♿", title: "Accessibility", desc: "Wheelchair friendly" },
            { icon: "🅿️", title: "Ample Parking", desc: "With EV charging" },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Sustainability */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 border-l-4 border-blue-600 pl-4">
          Sustainability
        </motion.h2>
        
        <motion.div variants={fadeIn} className="bg-green-50 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-center mb-6">
              <div className="bg-green-600 text-white p-3 rounded-lg mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-700">Green Initiatives</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-800">Environmental</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Solar panels powering 40% of our energy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Comprehensive waste reduction programs</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-green-800">Community</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Partnerships with local eco-vendors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Education programs on sustainability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;