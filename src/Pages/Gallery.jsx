import React from "react";
import { motion } from "framer-motion";

// Placeholder images (replace with real ones later)
const galleryImages = [
  "https://source.unsplash.com/400x300/?shopping",
  "https://source.unsplash.com/400x300/?clothes",
  "https://source.unsplash.com/400x300/?mall",
  "https://source.unsplash.com/400x300/?foodcourt",
  "https://source.unsplash.com/400x300/?electronics",
  "https://source.unsplash.com/400x300/?fashion",
  "https://source.unsplash.com/400x300/?cafe",
  "https://source.unsplash.com/400x300/?store",
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">📸 Gallery</h1>
        <p className="text-gray-600 text-lg">
          A glimpse of Satlini Mall’s vibrant spaces and moments!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
          >
            <img
              src={img}
              alt={`gallery-img-${index}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
