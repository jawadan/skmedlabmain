import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import MTable from "../utils/MTable"; //tables

function Features() {

  const content = [
    {
      title: "Мыть руки каждые два часа",
      description: "Исследования доказали что обильное мытье рук полезно.",
      button: "Читать подробнее",
      image: "https://images.pexels.com/photos/4308205/pexels-photo-4308205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      // meta={name:"description", content:"asfasfasfasfsafsafa"},
      user: "Думан Артыкбаевич",
      userProfile: "https://i.imgur.com/wtEw8cD.jpg"
    },
    {
      title: "Приемущества работы в локальной лаборатории",
      description: "Доктор Берикбаевна объяснила почему анализы локальных клиник лучше.",
      button: "Узнать больше",
      image: "https://images.pexels.com/photos/4033304/pexels-photo-4033304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      user: "Дана Берикбаевна",
      userProfile: "https://i.imgur.com/wtEw8cD.jpg"
    },
    {
      title: "Прямая осанка при сидячей работе",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://i.imgur.com/DvmN8Hx.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/wtEw8cD.jpg"
    }
  ];

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Все о здоровье</h1>
            <p className="text-xl text-gray-600">Здоровье заключается в освоении бесценных знаний, необходимых для ведения правильного образа жизни.</p>
          </div>

          {/* Slider */}
          <div className="mb-20">
            <Slider className="slider-wrapper" autoplay={5000} touchDisabled>
              {content.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                  style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                  <div className="inner">
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4">{item.title}</h1>
                    <p className="text-xl font-medium mb-4">{item.description}</p>
                    <button className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">{item.button}</button>
                  </div>
                  <section>
                    <img src={item.userProfile} alt={item.user} />
                    <span>
                      Автор статьи <strong>{item.user}</strong>
                    </span>
                  </section>
                </div>
              ))}
            </Slider>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Необходимые действия</h3>
                <p className="text-xl text-gray-600">Перед тем как прийдти на прием, убедитесь во всем что указано ниже.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Перечень проводимых анализов</div>
                    <div className="text-gray-600">Найдите необходимые для вас анализы в поисковике таблицы.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Подготовка к сдаче анализов</div>
                    <div className="text-gray-600">Проследите. что бы все пункты из списка были выполнены.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Найдите наше расположение на карте</div>
                    <div className="text-gray-600">Вы можете воспользоваться любым для вас удобным маршрутизатором.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div style={{ padding: "10px" }}>
                    <MTable />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/features-bg.jpg').default} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-element.png').default} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/features-bg.jpg').default} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-element.png').default} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
