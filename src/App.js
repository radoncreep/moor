import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import ContentNav from  './components/Navbar/ContentNav/ContentNav';
import Card from './components/Card/Card';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <ContentNav  />
        
      <Card />
      
      <Reviews />

      <Footer />
    </div>
  );
}

export default App;
