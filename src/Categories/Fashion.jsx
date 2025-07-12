import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ShoppingBagIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const products = {
  men: [
    { id: "m1", name: "Premium Formal Shirt", price: "₹1,799", image: "https://source.unsplash.com/random/300x300/?mens-formal-shirt", category: "men" },
    { id: "m2", name: "Slim Fit Jeans", price: "₹2,999", image: "https://source.unsplash.com/random/300x300/?mens-jeans", category: "men" },
    { id: "m3", name: "Casual T-Shirt", price: "₹899", image: "https://source.unsplash.com/random/300x300/?mens-tshirt", category: "men" },
    { id: "m4", name: "Denim Jacket", price: "₹3,499", image: "https://source.unsplash.com/random/300x300/?mens-jacket", category: "men" },
    { id: "m5", name: "Chino Pants", price: "₹1,899", image: "https://source.unsplash.com/random/300x300/?chinos", category: "men" },
    { id: "m6", name: "Winter Coat", price: "₹4,999", image: "https://source.unsplash.com/random/300x300/?winter-coat", category: "men" },
  ],
  women: [
    { id: "w1", name: "Floral Summer Dress", price: "₹2,499", image: "https://source.unsplash.com/random/300x300/?womens-dress", category: "women" },
    { id: "w2", name: "Silk Blouse", price: "₹1,799", image: "https://source.unsplash.com/random/300x300/?blouse", category: "women" },
    { id: "w3", name: "High-Waist Skirt", price: "₹1,599", image: "https://source.unsplash.com/random/300x300/?skirt", category: "women" },
    { id: "w4", name: "Knit Sweater", price: "₹2,299", image: "https://source.unsplash.com/random/300x300/?womens-sweater", category: "women" },
    { id: "w5", name: "Linen Jumpsuit", price: "₹3,199", image: "https://source.unsplash.com/random/300x300/?jumpsuit", category: "women" },
    { id: "w6", name: "Evening Gown", price: "₹5,999", image: "https://source.unsplash.com/random/300x300/?evening-gown", category: "women" },
  ],
  kids: [
    { id: "k1", name: "Cotton T-Shirt Set", price: "₹999", image: "https://source.unsplash.com/random/300x300/?kids-clothing", category: "kids" },
    { id: "k2", name: "Cartoon Hoodie", price: "₹1,299", image: "https://source.unsplash.com/random/300x300/?kids-hoodie", category: "kids" },
    { id: "k3", name: "Denim Overalls", price: "₹1,599", image: "https://source.unsplash.com/random/300x300/?kids-overalls", category: "kids" },
    { id: "k4", name: "Raincoat Set", price: "₹1,899", image: "https://source.unsplash.com/random/300x300/?kids-raincoat", category: "kids" },
    { id: "k5", name: "Party Dress", price: "₹2,199", image: "https://source.unsplash.com/random/300x300/?kids-dress", category: "kids" },
    { id: "k6", name: "Sports Set", price: "₹1,399", image: "https://source.unsplash.com/random/300x300/?kids-sportswear", category: "kids" },
  ],
  shoes: [
    { id: "s1", name: "Running Sneakers", price: "₹4,999", image: "https://source.unsplash.com/random/300x300/?running-shoes", category: "shoes" },
    { id: "s2", name: "Elegant Heels", price: "₹3,199", image: "https://source.unsplash.com/random/300x300/?womens-heels", category: "shoes" },
    { id: "s3", name: "Casual Loafers", price: "₹2,899", image: "https://source.unsplash.com/random/300x300/?loafers", category: "shoes" },
    { id: "s4", name: "Hiking Boots", price: "₹5,499", image: "https://source.unsplash.com/random/300x300/?hiking-boots", category: "shoes" },
    { id: "s5", name: "Slip-on Sandals", price: "₹1,799", image: "https://source.unsplash.com/random/300x300/?sandals", category: "shoes" },
    { id: "s6", name: "Designer Flats", price: "₹2,999", image: "https://source.unsplash.com/random/300x300/?flats", category: "shoes" },
  ],
  accessories: [
    { id: "a1", name: "Leather Belt", price: "₹1,299", image: "https://source.unsplash.com/random/300x300/?belt", category: "accessories" },
    { id: "a2", name: "Silk Scarf", price: "₹899", image: "https://source.unsplash.com/random/300x300/?scarf", category: "accessories" },
    { id: "a3", name: "Designer Handbag", price: "₹6,999", image: "https://source.unsplash.com/random/300x300/?handbag", category: "accessories" },
    { id: "a4", name: "Aviator Sunglasses", price: "₹2,499", image: "https://source.unsplash.com/random/300x300/?sunglasses", category: "accessories" },
    { id: "a5", name: "Woolen Beanie", price: "₹699", image: "https://source.unsplash.com/random/300x300/?beanie", category: "accessories" },
    { id: "a6", name: "Statement Necklace", price: "₹1,599", image: "https://source.unsplash.com/random/300x300/?necklace", category: "accessories" },
  ]
};

const Fashion = () => {
  const [activeTab, setActiveTab] = useState("men");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(p => p.id === item.id);
      if (existingItem) {
        return prevCart.map(p => 
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(p => p.id === id);
      if (existingItem.quantity > 1) {
        return prevCart.map(p => 
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        );
      }
      return prevCart.filter(item => item.id !== id);
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity), 0);

  const filteredProducts = Object.entries(products).reduce((acc, [category, items]) => {
    const filtered = items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  return (
    <div className="relative min-h-screen bg-gray-50 pb-20 m-16 ">
      {/* Sticky Header */}
      <header className="sticky top-0 z-30 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShoppingBagIcon className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-800">Satlini Trends</h1>
            </div>
            
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              )}
            </div>
            
            <button
              onClick={() => setShowCart(true)}
              className="relative flex items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              <ShoppingBagIcon className="w-5 h-5" />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8">
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Shop by Category</h2>
          <div className="flex flex-wrap gap-2">
            {Object.keys(products).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full flex items-center gap-1 transition ${
                  activeTab === tab 
                    ? "bg-indigo-600 text-white" 
                    : "bg-white text-gray-700 border hover:bg-gray-50"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && <ChevronDownIcon className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {searchQuery 
                ? `Search Results for "${searchQuery}"` 
                : activeTab.charAt(0).toUpperCase() + activeTab.slice(1) + " Collection"}
            </h2>
            {!searchQuery && (
              <button className="text-indigo-600 hover:underline">
                View All
              </button>
            )}
          </div>

          {/* Product Grid */}
          {Object.keys(filteredProducts).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {(searchQuery ? filteredProducts[activeTab] || [] : products[activeTab]).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden group transition"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-cover transition duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-indigo-600 font-bold mb-3">{product.price}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your search.</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-4 text-indigo-600 hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Summer Sale!</h3>
              <p className="opacity-90">Get 30% off on all items. Use code: TRENDY30</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-indigo-600 font-medium rounded-full hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
        </motion.div>
      </main>

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
              className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-xl z-50 flex flex-col"
            >
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <ShoppingBagIcon className="w-6 h-6" />
                    Your Shopping Cart
                  </h2>
                  <button 
                    onClick={() => setShowCart(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} in cart
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">Your cart is empty</p>
                    <button
                      onClick={() => setShowCart(false)}
                      className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {cart.map((item) => (
                      <motion.li 
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex justify-between items-start border-b pb-4"
                      >
                        <div className="flex gap-4">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-16 object-cover rounded" 
                          />
                          <div>
                            <p className="font-medium text-gray-800">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.price}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300"
                              >
                                -
                              </button>
                              <span className="text-sm">{item.quantity}</span>
                              <button 
                                onClick={() => addToCart(item)}
                                className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => setCart(cart.filter(i => i.id !== item.id))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <XMarkIcon className="w-5 h-5" />
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">FREE</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold mb-6">
                    <span>Total</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => setShowCart(false)}
                    className="w-full mt-2 py-2 text-indigo-600 hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Fashion;