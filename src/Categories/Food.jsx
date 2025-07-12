import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ShoppingCartIcon, StarIcon, HeartIcon } from "@heroicons/react/24/outline";

const foodCategories = {
  burgers: [
    { id: "b1", name: "Classic Cheeseburger", price: "₹199", rating: 4.5, image: "https://source.unsplash.com/random/300x300/?cheeseburger", category: "burgers", isFavorite: false },
    { id: "b2", name: "Bacon Burger", price: "₹249", rating: 4.7, image: "https://source.unsplash.com/random/300x300/?bacon-burger", category: "burgers", isFavorite: false },
    { id: "b3", name: "Veggie Burger", price: "₹179", rating: 4.3, image: "https://source.unsplash.com/random/300x300/?veggie-burger", category: "burgers", isFavorite: false },
    { id: "b4", name: "Double Patty Burger", price: "₹299", rating: 4.8, image: "https://source.unsplash.com/random/300x300/?double-burger", category: "burgers", isFavorite: false },
  ],
  pizzas: [
    { id: "p1", name: "Margherita Pizza", price: "₹299", rating: 4.6, image: "https://source.unsplash.com/random/300x300/?margherita-pizza", category: "pizzas", isFavorite: false },
    { id: "p2", name: "Pepperoni Pizza", price: "₹349", rating: 4.8, image: "https://source.unsplash.com/random/300x300/?pepperoni-pizza", category: "pizzas", isFavorite: false },
    { id: "p3", name: "Veggie Pizza", price: "₹279", rating: 4.4, image: "https://source.unsplash.com/random/300x300/?vegetable-pizza", category: "pizzas", isFavorite: false },
    { id: "p4", name: "BBQ Chicken Pizza", price: "₹379", rating: 4.9, image: "https://source.unsplash.com/random/300x300/?bbq-chicken-pizza", category: "pizzas", isFavorite: false },
  ],
  desserts: [
    { id: "d1", name: "Chocolate Brownie", price: "₹129", rating: 4.7, image: "https://source.unsplash.com/random/300x300/?chocolate-brownie", category: "desserts", isFavorite: false },
    { id: "d2", name: "Ice Cream Sundae", price: "₹149", rating: 4.9, image: "https://source.unsplash.com/random/300x300/?ice-cream-sundae", category: "desserts", isFavorite: false },
    { id: "d3", name: "Cheesecake", price: "₹179", rating: 4.8, image: "https://source.unsplash.com/random/300x300/?cheesecake", category: "desserts", isFavorite: false },
    { id: "d4", name: "Tiramisu", price: "₹199", rating: 4.9, image: "https://source.unsplash.com/random/300x300/?tiramisu", category: "desserts", isFavorite: false },
  ],
  beverages: [
    { id: "dr1", name: "Iced Coffee", price: "₹99", rating: 4.5, image: "https://source.unsplash.com/random/300x300/?iced-coffee", category: "beverages", isFavorite: false },
    { id: "dr2", name: "Fresh Lemonade", price: "₹79", rating: 4.6, image: "https://source.unsplash.com/random/300x300/?lemonade", category: "beverages", isFavorite: false },
    { id: "dr3", name: "Mango Smoothie", price: "₹129", rating: 4.7, image: "https://source.unsplash.com/random/300x300/?mango-smoothie", category: "beverages", isFavorite: false },
    { id: "dr4", name: "Cold Brew", price: "₹119", rating: 4.4, image: "https://source.unsplash.com/random/300x300/?cold-brew", category: "beverages", isFavorite: false },
  ]
};

const Food = () => {
  const [activeCategory, setActiveCategory] = useState("burgers");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [foodItems, setFoodItems] = useState(foodCategories);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(p => p.id === item.id);
      if (existingItem) {
        return prevCart.map(p => 
          p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(p => p.id === id);
      if (existingItem?.quantity > 1) {
        return prevCart.map(p => 
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        );
      }
      return prevCart.filter(item => item.id !== id);
    });
  };

  const toggleFavorite = (category, id) => {
    setFoodItems(prev => ({
      ...prev,
      [category]: prev[category].map(item => 
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    }));
  };

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = cart.reduce((sum, item) => sum + (parseInt(item.price.replace(/[^0-9]/g, '')) * (item.quantity || 1)), 0);

  const filteredItems = Object.entries(foodItems).reduce((acc, [category, items]) => {
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
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Delicious Food Court</h1>
        <p className="text-xl mb-6">Explore mouth-watering dishes from our mall's finest eateries</p>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for food items..."
            className="w-full px-4 py-3 rounded-full text-gray-800 focus:outline-none shadow-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-3 text-gray-500"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {Object.keys(foodItems).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-6 py-2 mx-1 rounded-full font-medium ${
                activeCategory === category
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Food Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(searchQuery ? filteredItems[activeCategory] || [] : foodItems[activeCategory]).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md overflow-hidden relative"
            >
              <button 
                onClick={() => toggleFavorite(activeCategory, item.id)}
                className="absolute top-3 right-3 z-10 p-2 bg-white/80 rounded-full backdrop-blur-sm"
              >
                <HeartIcon 
                  className={`w-5 h-5 ${item.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                />
              </button>
              
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm">{item.rating}</span>
                  </div>
                </div>
                <p className="text-orange-600 font-bold text-lg mb-3">{item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setShowCart(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-xl z-50 flex flex-col"
            >
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold flex items-center">
                    <ShoppingCartIcon className="w-6 h-6 mr-2 text-orange-600" />
                    Your Food Cart
                  </h2>
                  <button onClick={() => setShowCart(false)}>
                    <XMarkIcon className="w-6 h-6 text-gray-500 hover:text-red-500" />
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
                      className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    <ul className="space-y-4">
                      {cart.map((item) => (
                        <motion.li 
                          key={item.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex justify-between items-start border-b pb-4"
                        >
                          <div className="flex gap-4">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-16 h-16 object-cover rounded" 
                            />
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-500">{item.price}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <button 
                                  onClick={() => removeFromCart(item.id)}
                                  className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full"
                                >
                                  -
                                </button>
                                <span className="text-sm">{item.quantity || 1}</span>
                                <button 
                                  onClick={() => addToCart(item)}
                                  className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full"
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
                    
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span className="font-medium">₹{totalPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-6">
                        <span>Total</span>
                        <span className="text-lg font-bold">₹{totalPrice.toLocaleString()}</span>
                      </div>
                      <button className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium">
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Cart Button */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed bottom-6 right-6 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-colors"
      >
        <div className="relative">
          <ShoppingCartIcon className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
      </button>
    </div>
  );
};

export default Food;