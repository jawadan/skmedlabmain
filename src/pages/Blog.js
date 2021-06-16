import React from 'react';

import Header from '../partials/Header';

import Footer from '../partials/Footer';

import Mailer from '../utils/Mailer'

function Blog() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <section className="relative">

          {/* Illustration behind content */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
            <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
                <circle cx="1630" cy="128" r="128" />
                <circle cx="178" cy="481" r="40" />
              </g>
            </svg>
          </div>

          <Mailer />
          

        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Blog;