import React from 'react';
import Hero from './home/Hero';
import Feature from './home/Feature';
import TopBooks from './home/TopBooks';

const MainPage: React.FC = () => {
  return (
    <section>
      <Hero />
      <Feature />
      <TopBooks />
    </section>
  );
};

export default MainPage;