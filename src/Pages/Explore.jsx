import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import summerImg from '../assets/summer.avif';
import ElectroniImg from '../assets/Electronic.avif';
import kidsImg from '../assets/kids.jpg';
import foodImg from '../assets/food.jpg';
import fitnessImg from '../assets/fitness.jpg';
import homeImg from '../assets/Home.png';
import luxuryImg from '../assets/luxury.jpg';
import MovieImg from '../assets/Movie.jpg';

const exploreItems = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Up to 50% off on selected fashion brands.",
    image: summerImg,
    color: "from-amber-400 to-amber-500",
  },
  {
    id: 2,
    title: "Electronics Bonanza",
    description: "Exclusive offers on smartphones and gadgets.",
    image: ElectroniImg,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 3,
    title: "Food Fiesta",
    description: "Explore delicious meals & beverages at discounts.",
    image: foodImg,
    color: "from-red-500 to-red-600",
  },
  {
    id: 4,
    title: "Kids Zone",
    description: "Toys, games, and fun for the little ones!",
    image: kidsImg,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 5,
    title: "Home Essentials",
    description: "Everything for your beautiful home under one roof.",
    image: homeImg,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: 6,
    title: "Movie Mania",
    description: "Watch the latest blockbusters in ultra HD cinemas.",
    image: MovieImg,
    color: "from-violet-500 to-violet-600",
  },
  {
    id: 7,
    title: "Fitness & Sports",
    description: "Get active with top fitness gear and sportswear.",
    image: fitnessImg,
    color: "from-green-500 to-green-600",
  },
  {
    id: 8,
    title: "Luxury Lounge",
    description: "Relax and unwind in our premium luxury stores.",
    image: luxuryImg,
    color: "from-rose-500 to-rose-600",
  },
];

const cardVariants = {
  offscreen: { y: 40, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 }
  }
};

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-blue-50 py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Explore <span className="text-blue-600">Satlini Mall</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing experiences, exclusive offers, and premium shopping destinations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {exploreItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl bg-white transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-30 transition-opacity`}></div>
              </div>

              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.description}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(`/explore/${item.id}`)}
                  className={`mt-auto inline-flex items-center text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r ${item.color} text-white hover:opacity-90 transition`}
                >
                  Explore Now <ArrowRightIcon className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full shadow bg-gray-900 text-white hover:bg-gray-800 transition"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Explore;
