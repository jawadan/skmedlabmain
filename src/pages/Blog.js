import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

function Blog() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Section header */}
              <div className="text-center pb-12 md:pb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Медицинский центр<br />Лаборатория<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-red-800">SK-MEDLAB</span></h1>
                <h1 className="h2 mb-4">Наши контакты</h1>
                <div className="max-w-3xl mx-auto">
                  <div className="text-gray-600"><a className="text-blue-600 hover:underline" href="https://2gis.kz/almaty/inside/9430047375172881/firm/70000001046536980/76.883741%2C43.221654?m=76.883705%2C43.221604%2F16.97">ул. Жандосова 96 г. Алматы</a><br/>
                    <a className="text-blue-600 hover:underline" href="tel:+7707-824-9504"> +7 (707) 824 9504 </a> <a className="text-blue-600 hover:underline" href="tel:+7727-236-0065">+7 (727) 236 0065</a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Blog;