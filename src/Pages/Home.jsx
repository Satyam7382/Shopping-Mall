// import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MALLSFImg from '../Assets/MALLSF.png';
import zaraImg from "../Assets/Zara.webp";
import AppleImg from "../Assets/Apple.jpg";
import Starbucks from "../Assets/Starbucks.avif";

const Home = () => {
  const stores = [
    {
      name: "Zara",
      description: "Latest fashion trends and exclusive offers.",
      image: zaraImg,
      rating: 4.7,
      category: "Fashion"
    },
    {
      name: "Apple",
      description: "Innovative gadgets and tech accessories.",
      image: AppleImg,
      rating: 4.8,
      category: "Electronics"
    },
    {
      name: "Starbucks",
      description: "Delicious coffee and cozy atmosphere.",
      image: Starbucks,
      rating: 4.5,
      category: "Food & Beverage"
    },
  ];

  const categories = [
    { name: "Fashion", emoji: "👗", color: "from-pink-500 to-pink-600" },
    { name: "Electronics", emoji: "📱", color: "from-blue-500 to-blue-600" },
    { name: "Food", emoji: "🍔", color: "from-orange-500 to-orange-600" },
    { name: "HomeDecor", emoji: "🏠", color: "from-purple-500 to-purple-600" },
    { name: "Sports", emoji: "🏀", color: "from-green-500 to-green-600" },
    { name: "Toys", emoji: "🧸", color: "from-yellow-500 to-yellow-600" },
  ];

  const testimonials = [
    {
      name: "Shalini Singh",
      text: "Satlini Mall is my favorite spot for weekend shopping. Amazing variety and friendly staff!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      role: "Frequent Visitor"
    },
    {
      name: "Shweta Singh",
      text: "The ambience here is fantastic. I always find something special every time I visit.",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      role: "Loyal Customer"
    },
    {
      name: "Sanjana Kumari",
      text: "Love the stores and the food court options. Satlini Mall makes shopping fun!",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      role: "Local Resident"
    },
    {
      name: "Anjali",
      text: "The variety of brands and the customer service is top-notch. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      role: "First-time Visitor"
    },
  ];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <img
          src={MALLSFImg}
          alt="Mall"
          className="w-full h-[700px] object-cover object-center"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-7xl font-bold mb-6 font-serif"
          >
            Discover <span className="text-amber-300">Satlini Mall</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-xl md:text-2xl max-w-3xl mb-8 tracking-wider"
          >
            Where luxury shopping meets extraordinary experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/stores"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Explore Stores
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
              to="/events"
              className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Upcoming Events
            </Link>
          </motion.div>
        </div>
        
        {/* Scrolling indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="animate-bounce flex flex-col items-center">
            <p className="text-white text-sm mb-2">Scroll to explore</p>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Categories */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-gray-900 font-serif"
          >
            Shop by Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Find exactly what you're looking for in our carefully curated categories
          </motion.p>
        </div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <Link 
                to={`/category/${category.name.toLowerCase().replace(' & ', '-')}`}
                className={`flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg transition-all duration-300 group-hover:shadow-xl`}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </div>
                <p className="font-semibold text-lg text-center">
                  {category.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Stores */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-gray-900 font-serif"
            >
              Featured Stores
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Discover our most popular stores loved by visitors
            </motion.p>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {stores.map((store) => (
              <motion.div
                key={store.name}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    {store.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{store.name}</h3>
                    <div className="flex items-center bg-amber-100 px-2 py-1 rounded-full">
                      <span className="text-amber-700 font-semibold text-sm mr-1">⭐ {store.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{store.description}</p>
                  <Link 
                    to={`/store/${store.name.toLowerCase()}`}
                    className="text-amber-600 hover:text-amber-800 font-medium text-sm flex items-center transition-colors group"
                  >
                    Visit store
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link 
              to="/stores"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              View all stores
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

       {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-gray-900 font-serif"
            >
              What People Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Hear from our happy visitors about their experiences
            </motion.p>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUp}
                className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-amber-500 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-amber-500 before:rounded-full">
                  {testimonial.text}
                </p>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


     
      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-gray-900 font-serif"
            >
              Why Choose Satlini Mall
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              We offer an unparalleled shopping experience
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">200+ Stores</h3>
              <p className="text-gray-600">From luxury brands to local favorites, we have something for everyone.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Safe Environment</h3>
              <p className="text-gray-600">24/7 security and strict hygiene protocols for your peace of mind.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Extended Hours</h3>
              <p className="text-gray-600">Open 7 days a week with extended hours to fit your schedule.</p>
            </motion.div>
          </div>
        </div>
      </section>

     
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-gray-900 font-serif"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Find answers to common questions about visiting Satlini Mall
            </motion.p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "What are the mall timings?",
                answer: "The mall is open from 10 AM to 10 PM every day, including weekends and holidays."
              },
              {
                question: "Is parking available?",
                answer: "Yes, we have ample parking space with over 2000 spots. Valet service is available at the main entrance."
              },
              {
                question: "Are pets allowed?",
                answer: "Only service animals are permitted inside the mall premises for the comfort and safety of all visitors."
              },
              {
                question: "Do you have wheelchair access?",
                answer: "Absolutely! Our mall is fully accessible with ramps, elevators, and accessible restrooms throughout."
              }
            ].map((faq, idx) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors"
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors text-lg">
                      {faq.question}
                    </h3>
                    <svg className="h-6 w-6 text-gray-500 group-hover:text-amber-600 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-95"></div>
        
        <img
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1950&q=80"
          alt="Satlini Mall"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            Ready for an unforgettable shopping experience?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto mb-10 drop-shadow-md"
          >
            Visit Satlini Mall today and discover why we're the premier shopping destination in the region.
          </motion.p>
        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
            <Link 
              to="/events"
              className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              View Events
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>


      
      {/* Footer Section */}
     <footer className="bg-gray-900 text-white pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      
      {/* Branding & Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-bold mb-6 text-amber-400 font-serif">Satlini Mall</h3>
        <p className="text-gray-400 mb-4">
          Where shopping meets extraordinary experiences.
        </p>
        <div className="flex space-x-4">
          {/* Email Icon */}
          <a 
            href="mailto:contact@satlinimall.com" 
            className="text-gray-400 hover:text-amber-400 transition-colors w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
            aria-label="email"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          
          {/* Instagram Icon */}
          <a 
            href="https://instagram.com/satlinimall" 
            className="text-gray-400 hover:text-amber-400 transition-colors w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
            aria-label="instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          
          {/* GitHub Icon */}
          <a 
            href="https://github.com/satlinimall" 
            className="text-gray-400 hover:text-amber-400 transition-colors w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
            aria-label="github"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
        </div>
      </motion.div>
         {/* Quick Links */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
  <ul className="space-y-3">
    {['Home', 'Stores', 'Events', 'Offers', 'Gallery'].map((link) => {
      const path = link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`;

      return (
        <li key={link}>
          <Link
            to={path}
            className="text-gray-400 hover:text-amber-400 transition-colors flex items-center"
          >
            <svg className="w-4 h-4 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            {link}
          </Link>
        </li>
      );
    })}
  </ul>
</motion.div>


          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              {[
                { label: 'Contact Us', to: '/contact' },
                { label: 'FAQs', to: '/#faq' },
                { label: 'Feedback', to: '/feedback' },
                { label: 'Privacy Policy', to: '/privacy-policy' },
                { label: 'Terms & Conditions', to: '/terms-conditions' }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.to} 
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <address className="not-italic text-gray-400 space-y-4">
              {/* Address */}
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>123 Mall Road, Downtown City, Country</span>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v1a2 2 0 01-.59 1.41L7.17 9.83a16.018 16.018 0 006.66 6.66l2.42-2.42A2 2 0 0118 13h1a2 2 0 012 2v2a2 2 0 01-2 2c-8.837 0-16-7.163-16-16z" />
                </svg>
                <span>+91 98765 43210</span>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-8-8m8 8l-8 8" />
                </svg>
                <span>support@satlinimall.com</span>
              </div>
            </address>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Satlini Mall. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;