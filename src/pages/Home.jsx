import React from 'react';
import Menu from '../components/menu/Menu';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import ItemsCard from '../components/itemsCard/ItemsCard';
import About from '../components/about/About';
import Gallery from '../components/gallery/Gallery';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Menu />
      <Header />
      <Hero />
      <ItemsCard />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;