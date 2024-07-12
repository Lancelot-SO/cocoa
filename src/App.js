import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Blog from './pages/Blog';

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />

          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
