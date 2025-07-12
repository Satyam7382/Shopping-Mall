import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './Components/navbar';
import FAQ from './Components/FAQ';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Stores from './Pages/Stores';
import Explore from './Pages/Explore';
import Events from './Pages/Events';
import Toys from './Pages/Toys';
import Offers from './Pages/Offers';
import Gallery from './Pages/Gallery';
import Feedback from './Pages/Feedback';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';

// Categories
import Fashion from './Categories/Fashion';
import Electronics from './Categories/Electronics';
import HomeDecor from './Categories/HomeDecor';
import Food from './Categories/Food';
import Sports from './Categories/Sports';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public routes only - no login required */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/events" element={<Events />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/toys" element={<Toys />} />

        {/* Category Routes */}
        <Route path="/category/fashion" element={<Fashion />} />
        <Route path="/category/electronics" element={<Electronics />} />
        <Route path="/category/homedecor" element={<HomeDecor />} />
        <Route path="/category/food" element={<Food />} />
        <Route path="/category/sports" element={<Sports />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
