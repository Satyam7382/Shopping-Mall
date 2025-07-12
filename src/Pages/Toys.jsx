import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";

import toyImg from "../Assets/Toys/toy1.jpg";
import carImg from "../Assets/Toys/car2.jpg";
import blocksImg from "../Assets/Toys/blocks.webp";
import dollsImg from "../Assets/Toys/doll.jpg";

const toyProducts = [
  {
    id: "toy1",
    name: "Remote Car",
    price: "₹899",
    image: carImg,
  },
  {
    id: "toy2",
    name: "Building Blocks",
    price: "₹499",
    image: blocksImg,
  },
  {
    id: "toy3",
    name: "Teddy Bear",
    price: "₹699",
    image: toyImg,
  },
  {
    id: "toy4",
    name: "Doll Set",
    price: "₹599",
    image: dollsImg,
  },
];

const Toys = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    if (!cart.some((product) => product.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-20 px-4">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-600">🧸 Toys Section</h1>
        <button
          onClick={() => setShowCart(true)}
          className="flex items-center bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-5 py-2 rounded-full shadow hover:shadow-lg transition"
        >
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          View Cart <span className="ml-1">({cart.length})</span>
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {toyProducts.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-yellow-600 font-bold">{item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setShowCart(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-yellow-600">My Cart</h2>
                <button onClick={() => setShowCart(false)}>
                  <XMarkIcon className="w-6 h-6 text-gray-500 hover:text-red-500" />
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">Your cart is currently empty.</p>
              ) : (
                <ul className="flex-1 space-y-4 overflow-y-auto">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-sm hover:underline"
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

export default Toys;
