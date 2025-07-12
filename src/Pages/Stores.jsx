import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  StarIcon,
  MapPinIcon,
  LinkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import zaraImg from "../Assets/Zara.webp";
import starbucks from "../Assets/Starbucks.avif";
import HMImg from "../Assets/Stores/H&M.png";
import MCDImg from "../Assets/Stores/MCd.png";
import sony from "../Assets/Stores/sony.jpg";
import Costa from "../Assets/Stores/Costa.png";
import levis from "../Assets/Stores/levis.png";

const fallbackImage = "https://via.placeholder.com/150?text=Store+Image";

const storesData = [
  {
    id: 1,
    name: "Zara",
    description: "Latest fashion apparel and accessories.",
    image: zaraImg,
    rating: 4.5,
    location: "Floor 1, Satlini Mall",
    website: "https://www.zara.com",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Apple",
    description: "Official Apple store for gadgets and accessories.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    rating: 4.7,
    location: "Floor 2, Satlini Mall",
    website: "https://www.apple.com",
    tag: "New",
  },
  {
    id: 3,
    name: "Starbucks",
    description: "Coffee, snacks, and cozy atmosphere.",
    image: starbucks,
    rating: 4.3,
    location: "Ground Floor, Satlini Mall",
    website: "https://www.starbucks.com",
  },
  {
    id: 4,
    name: "Nike",
    description: "Sportswear, shoes, and accessories.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    rating: 4.4,
    location: "Floor 3, Satlini Mall",
    website: "https://www.nike.com",
  },
  {
    id: 5,
    name: "H&M",
    description: "Trendy clothes for all ages.",
    image: HMImg,
    rating: 4.2,
    location: "Floor 1, Satlini Mall",
    website: "https://www.hm.com",
  },
  {
    id: 6,
    name: "Microsoft",
    description: "Software, laptops, and accessories.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    rating: 4.6,
    location: "Floor 2, Satlini Mall",
    website: "https://www.microsoft.com",
  },
  {
    id: 7,
    name: "Adidas",
    description: "Sport shoes and wearables.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    rating: 4.3,
    location: "Floor 3, Satlini Mall",
    website: "https://www.adidas.com",
    tag: "Popular",
  },
  {
    id: 8,
    name: "McDonald's",
    description: "Fast food and beverages.",
    image: MCDImg,
    rating: 4.0,
    location: "Ground Floor, Satlini Mall",
    website: "https://www.mcdonalds.com",
  },
  {
    id: 9,
    name: "Samsung",
    description: "Smartphones, TVs, and home appliances.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    rating: 4.5,
    location: "Floor 2, Satlini Mall",
    website: "https://www.samsung.com",
  },
  {
    id: 10,
    name: "Levi's",
    description: "Jeans and casual wear.",
    image: levis,
    rating: 4.1,
    location: "Floor 1, Satlini Mall",
    website: "https://www.levi.com",
  },
  {
    id: 11,
    name: "Costa Coffee",
    description: "Coffee, sandwiches and more.",
    image: Costa,
    rating: 4.0,
    location: "Ground Floor, Satlini Mall",
    website: "https://www.costa.co.uk",
  },
  {
    id: 12,
    name: "Sony",
    description: "Electronics, cameras and entertainment.",
    image: sony,
    rating: 4.4,
    location: "Floor 2, Satlini Mall",
    website: "https://www.sony.com",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">
        ({rating.toFixed(1)})
      </span>
    </div>
  );
};

const Stores = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const visibleStores = showAll ? storesData : storesData.slice(0, 6);

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-300 to-gray-100 py-20 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Explore Our Stores
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleStores.map((store) => (
          <motion.div
            key={store.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: store.id * 0.04 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow hover:shadow-xl transition-all p-6 flex flex-col"
          >
            <div className="relative">
              <img
                src={store.image}
                alt={store.name}
                className="h-40 w-full object-contain bg-white rounded-lg mb-4"
                onError={(e) => (e.target.src = fallbackImage)}
              />
              {store.tag && (
                <span className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                  {store.tag}
                </span>
              )}
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {store.name}
            </h2>
            <StarRating rating={store.rating} />
            <p className="text-sm text-gray-600 mb-4">{store.description}</p>

            <div className="flex items-center text-sm text-gray-500 mb-4">
              <MapPinIcon className="w-5 h-5 mr-2 text-blue-500" />
              <span>{store.location}</span>
            </div>

            <div className="mt-auto flex justify-between items-center">
              <a
                href={store.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition"
              >
                Visit Website
                <LinkIcon className="w-5 h-5 ml-1" />
              </a>

              <button
                onClick={() => navigate(`/store/${store.id}`)}
                className="flex items-center bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Details
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md transition"
          >
            Show All Stores
          </button>
        </div>
      )}
    </section>
  );
};

export default Stores;
