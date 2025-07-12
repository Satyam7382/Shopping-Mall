import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";

const sportsProducts = [
  {
    id: "sp1",
    name: "Nike Running Shoes",
    price: "₹4,999",
    image: "https://source.unsplash.com/300x300/?running-shoes",
  },
  {
    id: "sp2",
    name: "Adidas Football",
    price: "₹1,299",
    image: "https://source.unsplash.com/300x300/?football",
  },
  {
    id: "sp3",
    name: "Puma Tracksuit",
    price: "₹2,999",
    image: "https://source.unsplash.com/300x300/?tracksuit",
  },
  {
    id: "sp4",
    name: "Yonex Badminton Racket",
    price: "₹3,499",
    image: "https://source.unsplash.com/300x300/?badminton",
  },
];

const Sports = () => {
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
    <div className="min-h-screen bg-blue-50 py-20 px-4 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-700">🏆 Sports & Fitness</h1>
        <button
          onClick={() => setShowCart(true)}
          className="relative bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-4 py-2 rounded-full hover:shadow-lg"
        >
          <ShoppingCartIcon className="w-5 h-5 inline mr-1" />
          My Cart ({cart.length})
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {sportsProducts.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-blue-600 font-bold">{item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
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
            {/* Cart */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-blue-700">🛍 My Cart</h2>
                <button onClick={() => setShowCart(false)}>
                  <XMarkIcon className="w-6 h-6 text-gray-500 hover:text-red-500" />
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <ul className="space-y-3">
                  {cart.map((item) => (
                    <li key={item.id} className="flex justify-between items-start border-b pb-2">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:underline text-sm"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sports;
