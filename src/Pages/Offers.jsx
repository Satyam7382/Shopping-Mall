import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  TagIcon, 
  ShoppingBagIcon, 
  StarIcon, 
  TicketIcon, 
  FireIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

// Placeholder images
const fashionSale = "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const electronicsDeal = "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const foodDiscount = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const beautyOffer = "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const mallInterior = "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80";

const offersData = [
  {
    id: 1,
    title: "Summer Fashion Sale",
    description: "Get up to 50% off on selected summer collections. Limited time only!",
    image: fashionSale,
    category: "Fashion",
    discount: "50% OFF",
    validUntil: "July 31, 2025",
    code: "SUMMER25",
    featured: true,
    terms: ["Valid on selected items", "Cannot be combined with other offers", "Excludes clearance items"]
  },
  {
    id: 2,
    title: "Electronics Weekend",
    description: "Special prices on gadgets, home appliances, and tech accessories.",
    image: electronicsDeal,
    category: "Electronics",
    discount: "30% OFF",
    validUntil: "June 30, 2025",
    code: "TECHWEEK",
    featured: true,
    terms: ["Limited stock available", "Excludes Apple products", "Valid in-store only"]
  },
  {
    id: 3,
    title: "Food Court Specials",
    description: "Buy one get one free on selected meals at participating restaurants.",
    image: foodDiscount,
    category: "Dining",
    discount: "BOGO",
    validUntil: "Ongoing",
    code: "BOGOFOOD",
    terms: ["Participating vendors only", "Dine-in only", "Valid for same item purchase"]
  },
  {
    id: 4,
    title: "Beauty Bonanza",
    description: "Free gift with purchase and additional discounts on premium beauty products.",
    image: beautyOffer,
    category: "Beauty",
    discount: "20% OFF",
    validUntil: "July 15, 2025",
    code: "GLOWUP",
    terms: ["Minimum $50 purchase", "While supplies last", "One gift per customer"]
  },
  {
    id: 5,
    title: "Kids Back-to-School",
    description: "20% off all school supplies and children's clothing.",
    image: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    discount: "20% OFF",
    validUntil: "August 15, 2025",
    code: "SCHOOL25",
    terms: ["Valid on regular priced items", "Excludes uniforms", "Limit 5 items per customer"]
  },
  {
    id: 6,
    title: "Home Essentials",
    description: "Bundle deals on home decor and kitchenware.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    discount: "BUNDLE",
    validUntil: "July 10, 2025",
    code: "HOMEDEAL",
    terms: ["Selected bundles only", "While supplies last", "No returns on bundles"]
  },
  {
    id: 7,
    title: "Sports & Fitness",
    description: "25% off all fitness equipment and activewear.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    discount: "25% OFF",
    validUntil: "July 20, 2025",
    code: "FIT25",
    terms: ["Excludes premium brands", "Valid in-store only", "No price adjustments"]
  },
  {
    id: 8,
    title: "Luxury Watches",
    description: "0% financing available on select luxury timepieces.",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Luxury",
    discount: "0% APR",
    validUntil: "December 31, 2025",
    code: "TIMEPIECE",
    terms: ["With approved credit", "Minimum $1,000 purchase", "24-month term"]
  }
];

const Offers = () => {
  const navigate = useNavigate();
  const [expandedOffer, setExpandedOffer] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(offersData.map(offer => offer.category))];
  const filteredOffers = activeCategory === "All" 
    ? offersData 
    : offersData.filter(offer => offer.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedOffer(expandedOffer === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={mallInterior} 
          alt="Satlini Mall" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Exclusive Mall Offers
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Discover limited-time deals and save big on your favorite brands
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Offers Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6 mb-12 text-white shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <FireIcon className="w-6 h-6" />
                Flash Sale Alert!
              </h2>
              <p className="mt-2">Limited-time offers ending soon - don't miss out!</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <ClockIcon className="w-5 h-5" />
              <span>Ends in 2 days</span>
            </div>
          </div>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border ${
                offer.featured ? "border-2 border-purple-500" : "border-gray-200"
              }`}
            >
              {offer.featured && (
                <div className="bg-purple-500 text-white text-xs font-bold px-3 py-1 absolute top-3 left-3 rounded-full z-10">
                  Featured
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => toggleExpand(offer.id)}>
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-bold text-lg">{offer.title}</div>
                  <div className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mt-2">
                    {offer.discount}
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center mb-2">
                  {offer.category === "Fashion" && <ShoppingBagIcon className="w-5 h-5 mr-2 text-purple-500" />}
                  {offer.category === "Electronics" && <TagIcon className="w-5 h-5 mr-2 text-blue-500" />}
                  {offer.category === "Dining" && <TicketIcon className="w-5 h-5 mr-2 text-red-500" />}
                  {offer.category === "Beauty" && <StarIcon className="w-5 h-5 mr-2 text-pink-500" />}
                  <span className="text-sm font-medium text-gray-500">{offer.category}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{offer.description}</p>
                
                {expandedOffer === offer.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4"
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">Terms & Conditions:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {offer.terms.map((term, i) => (
                        <li key={i} className="flex items-start">
                          <CheckIcon className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <div>
                    <div className="text-xs text-gray-500">Promo Code</div>
                    <div className="font-mono font-bold text-purple-600">{offer.code}</div>
                  </div>
                  <button
                    onClick={() => toggleExpand(offer.id)}
                    className="text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    {expandedOffer === offer.id ? (
                      <ChevronUpIcon className="w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => navigate(`/offers/${offer.id}`)}
                    className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  >
                    Claim Offer <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 bg-gray-900 rounded-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10 text-white">
              <h2 className="text-3xl font-bold mb-4">Become a Mall Member</h2>
              <p className="text-gray-300 mb-6">
                Join our loyalty program to get exclusive access to member-only deals, 
                early sales notifications, and special rewards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Early access to sales</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Double discount days</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Birthday rewards</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition">
                Sign Up Now
              </button>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center p-10">
              <div className="text-center text-white">
                <TicketIcon className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">VIP Member Card</h3>
                <p className="mb-6">Show this at checkout for additional benefits</p>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition font-medium inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Offers;