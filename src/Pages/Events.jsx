import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import kids from '../assets/kids.jpeg';

// Placeholder images - replace these with your actual image imports
const foodFest = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const musicNight = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const shoppingNight = "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const kidsCarnival =  kids ;
const eventsData = [
  {
    id: 1,
    title: "Food Fiesta Weekend",
    description: "Explore flavors from around the world with over 40 food stalls and live cooking demonstrations.",
    image: foodFest,
    date: "June 22, 2025",
    time: "12 PM - 10 PM",
    location: "Outdoor Arena, Satlini Mall",
  },
  {
    id: 2,
    title: "Live Music Night",
    description: "Enjoy performances by top local bands and indie artists under the stars.",
    image: musicNight,
    date: "June 28, 2025",
    time: "7 PM - 11 PM",
    location: "Central Stage, Satlini Mall",
  },
  {
    id: 3,
    title: "Late Night Shopping",
    description: "Extended hours, flash discounts, and entertainment till midnight!",
    image: shoppingNight,
    date: "July 5, 2025",
    time: "6 PM - 12 AM",
    location: "Entire Mall",
  },
  {
    id: 4,
    title: "Kids Carnival",
    description: "Games, magic shows, and kid-friendly fun for all ages.",
    image: kidsCarnival,
    date: "July 12–14, 2025",
    time: "10 AM - 8 PM",
    location: "Kids Zone, Floor 1",
  },
];

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Upcoming Events
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrate, shop, and experience joy at Satlini Mall's exclusive events!
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{event.title}</h2>
                <p className="text-gray-600">{event.description}</p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start">
                    <CalendarIcon className="w-5 h-5 mt-0.5 mr-3 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{event.date}</span>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="w-5 h-5 mt-0.5 mr-3 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className="w-5 h-5 mt-0.5 mr-3 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => navigate(`/events/${event.id}`)}
                    className="px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all shadow-sm hover:shadow-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
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

export default Events;
