import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}

        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
        <a target="_blank" rel="nofollow" href="https://ad.admitad.com/g/aswlxsd4mid41777ea806bad6591b4/?i=4&subid=skmedlab"><img width="728" height="90" border="0" src="https://ad.admitad.com/b/aswlxsd4mid41777ea806bad6591b4/" alt="Альфа-Банк (CPS) KZ API" /></a>
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;