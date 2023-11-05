import React from 'react';
import Hero from './home/Hero';
import Feature from './home/Feature';
import TopBooks from './home/TopBooks';
import Footer from '@/components/Footer';

const MainPage: React.FC = () => {
  return (
    <section>
      <Hero />
      <Feature />
      <TopBooks />
      <Footer />
    </section>
  );
};

export default MainPage;