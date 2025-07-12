import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const electronicsProducts = [
  { id: "e1", name: "iPhone 14 Pro", price: "₹1,29,999", image: "https://source.unsplash.com/300x300/?iphone" },
  { id: "e2", name: "Samsung TV 55\"", price: "₹59,999", image: "https://source.unsplash.com/300x300/?tv" },
  { id: "e3", name: "Sony Headphones", price: "₹7,999", image: "https://source.unsplash.com/300x300/?headphones" },
  { id: "e4", name: "MacBook Air M2", price: "₹1,14,999", image: "https://source.unsplash.com/300x300/?macbook" },
  { id: "e5", name: "iPad Pro 12.9", price: "₹1,09,999", image: "https://source.unsplash.com/300x300/?ipad" },
  { id: "e6", name: "GoPro Hero 11", price: "₹49,999", image: "https://source.unsplash.com/300x300/?gopro" },
  { id: "e7", name: "PS5 Console", price: "₹54,999", image: "https://source.unsplash.com/300x300/?ps5" },
  { id: "e8", name: "DJI Mini 3 Drone", price: "₹87,999", image: "https://source.unsplash.com/300x300/?drone" },
];


const Electronics = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    if (!cart.find((p) => p.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ElectroHub
        </h1>
        <button
          onClick={() => setShowCart(true)}
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all"
        >
          <ShoppingCartIcon className="w-5 h-5 inline mr-1" />
          My Cart ({cart.length})
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {electronicsProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden border border-gray-100 transition-all"
          >
            <div className="relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-800 mb-1">{product.name}</h2>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold mb-3">
                {product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-md transition-all"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {showCart && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setShowCart(false)}
            />

            {/* Cart Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Your Cart
                </h2>
                <button 
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <ul className="space-y-4 max-h-[60vh] overflow-y-auto">
                    {cart.map((item) => (
                      <motion.li 
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="border-b border-gray-100 pb-3"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-gray-800">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.price}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <XMarkIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-md transition-all">
                      Checkout Now
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Electronics;
