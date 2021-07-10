import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import SimpleMap from '../utils/SimpleMap.js';
import MTable from "../utils/MTable";
import Modal from '../utils/Modal';

function Features() {

  const [womenModalOpen, setWomenModalOpen] = useState(false);
  const [menModalOpen, setMenModalOpen] = useState(false);
  const [heartModalOpen, setHeartModalOpen] = useState(false);
  const [liverModalOpen, setLiverModalOpen] = useState(false);
  const [pregnancyModalOpen, setPregnancyModalOpen] = useState(false);
  const [yearlyModalOpen, setYearlyModalOpen] = useState(false);

  const prices = [
    {
      women: [
        <ul className="text-xl text-gray-600">
          <li>Общий анализ крови</li>
          <li>Скорость оседания эритроцитов (СОЭ)</li>
          <li>Общий анализ мочи</li>
          <li>Глюкоза</li>
          <li>Амилаза общая</li>
          <li>Холестерин общий</li>
          <li>Мочевина</li>
          <li>Мочевая кислота</li>
          <li>Белок общий</li>
          <li>Билирубин общий</li>
          <li>Триглицериды</li>
          <li>Липопротеины высокой плотности (ЛПВП)</li>
          <li>Липопротеины низкой плотности (ЛПНП)</li>
          <li>АЛТ</li>
          <li>Фосфор</li>
          <li>Кальций общий</li>
          <li>Лактатдегидрогеназа (ЛДГ)</li>
          <li>Железо</li>
          <li>Гомоцистеин</li>
          <li>С-реактивный белок</li>
          <li>Ревмо- фактор</li>
          <li>СА-125</li>
          <li>СА 15-3</li>
          <li>СА-19-9</li>
          <li>АЧТВ</li>
          <li>Протромбиновое время</li>
          <li>Протромбиновый индекс</li>
          <li>МНО</li>
          <li>Тромбиновое время</li>
          <li>Фибриноген</li>
          <li>Гепатит С</li>
          <li>Гепатит В (HBsAg)</li>
          <li>ВИЧ</li>
          <li>RW</li>
          <li>Пролактин</li>
          <li>Тиреотропный гормон (ТТГ)</li>
          <li>Тироксин свободный (Т4 свободный)</li>
          <li>Антитела к тиреопероксидазе (анти-ТПО)</li>
        </ul>
      ],
      men: [
        <ul className="text-xl text-gray-600">
          <li>Общий анализ крови</li>
          <li>Скорость оседания эритроцитов (СОЭ)</li>
          <li>Общий анализ мочи</li>
          <li>Глюкоза</li>
          <li>Амилаза общая</li>
          <li>Холестерол общий</li>
          <li>Мочевина</li>
          <li>Мочевая кислота</li>
          <li>Белок общий</li>
          <li>Билирубин общий</li>
          <li>Триглицериды</li>
          <li>Липопротеины высокой плотности (ЛПВП)</li>
          <li>Липопротеины низкой плотности (ЛПНП)</li>
          <li>АЛТ</li>
          <li>АСТ</li>
          <li>Кальций общий</li>
          <li>Лактатдегидрогеназа (ЛДГ)</li>
          <li>Железо</li>
          <li>Гомоцистеин</li>
          <li>С-реактивный белок</li>
          <li>Ревмо- фактор</li>
          <li>АЧТВ</li>
          <li>Протромбиновое  время</li>
          <li>Протромбиновый индекс</li>
          <li>МНО</li>
          <li>Тромбиновое время</li>
          <li>Фибриноген</li>
          <li>Д-димер</li>
          <li>Гепатит С</li>
          <li>Гепатит В (HBsAg)</li>
          <li>ВИЧ</li>
          <li>RW</li>
          <li>Пролактин</li>
          <li>Тиреотропный гормон (ТТГ)</li>
          <li>Тироксин свободный (Т4 свободный)</li>
          <li>Антитела к тиреопероксидазе (анти-ТПО)</li>
          <li>Тестостерон</li>
          <li>Раковый эмбриональный антиген (РЭА)</li>
          <li>СА-19-9</li>
          <li>Простатспецифический антиген общий (ПСА общий)</li>
          <li>Простатспецифический антиген свободный (ПСА свободный)</li>
        </ul>
      ],
      heart: [
        <ul className="text-xl text-gray-600">
          <li>Общий анализ крови</li>
          <li>Скорость оседания эритроцитов (СОЭ)</li>
          <li>АСТ</li>
          <li>АЧТВ</li>
          <li>Протромбиновое  время</li>
          <li>Протромбиновый индекс</li>
          <li>МНО</li>
          <li>Тромбиновое время</li>
          <li>Фибриноген</li>
          <li>Антитромбин III</li>
          <li>Волчаночный антикоагулянт</li>
          <li>Глюкоза</li>
          <li>Гликированный гемоглобин (HbA 1c)</li>
          <li>Железо</li>
          <li>Калий</li>
          <li>натрий</li>
          <li>хлор</li>
          <li>Лактатдегидрогеназа (ЛДГ)</li>
          <li>Мочевая кислота</li>
          <li>С-реактивный белок</li>
          <li>Триглицериды</li>
          <li>Холестерол общий</li>
          <li>Липопротеины высокой плотности (ЛПВП)</li>
          <li>Липопротеины низкой плотности (ЛПНП)</li>
          <li>Коэффициент атерогенности</li>
          <li>Тироксин свободный (Т4 свободный)</li>
          <li>Тиреотропный гормон (ТТГ)</li>
          <li>Антитела к тиреопероксидазе (анти-ТПО)</li>
        </ul>
      ],
      liver: [
        <ul className="text-xl text-gray-600">
          <li>Аланинаминотрансфераза</li>
          <li>Аспартатаминотрансфераза</li>
          <li>Щелочная фосфатаза</li>
          <li>Общий белок</li>
          <li>Билирубин общий</li>
          <li>Билирубин прямой</li>
          <li>Билирубин непрямой</li>
          <li>Гепатит В</li>
          <li>Гепатит С</li>
          <li>Фосфатаза щелочная</li>
          <li>Глюкоза</li>
          <li>Лактатдегидрогеназа (ЛДГ)</li>
          <li>Холестерол общий</li>
          <li>Железо</li>
          <li>АЧТВ</li>
          <li>Протромбиновое  время</li>
          <li>Протромбиновый индекс</li>
          <li>МНО</li>
          <li>Тромбиновое время</li>
          <li>Фибриноген</li>
          <li>Лямблиоз IgA</li>
          <li>Лямблиоз IgG</li>
        </ul>
      ],
      pregnancy: [
        <ul className="text-xl text-gray-600">
          <li>Общий анализ крови</li>
          <li>Скорость оседания эритроцитов (СОЭ)</li>
          <li>Общий анализ мочи </li>
          <li>Глюкоза </li>
          <li>Креатинин </li>
          <li>Мочевина</li>
          <li>Белок общий </li>
          <li>Билирубин общий </li>
          <li>АЛТ </li>
          <li>АСТ </li>
          <li>Железо </li>
          <li>Кальций </li>
          <li>Магний</li>
          <li>Калий </li>
          <li>натрий</li>
          <li>Фосфор</li>
          <li>Волчаночный антикоагулянт</li>
          <li>Гомоцистеин</li>
          <li>Фолликулостимулирующий гормон (ФСГ)</li>
          <li>Лютеинизирующий гормон (ЛГ)</li>
          <li>пролактин</li>
          <li>эстрадиол</li>
          <li>тестостерон</li>
          <li>прогестерон</li>
          <li>Дегидроэпиандростерон-сульфат </li>
          <li>Тиреотропный гормон (ТТГ)</li>
          <li>Тироксин свободный (Т4 свободный)</li>
          <li>Chlamydia trachomatis (Хламидиа трахоматис) IgА</li>
          <li>Chlamydia trachomatis (Хламидиа трахоматис) IgG</li>
          <li>Ureaplasma urealyticum (Уреаплазма уреалитикум) IgM</li>
          <li>Ureaplasma urealyticum (Уреаплазма уреалитикум) IgG</li>
          <li>Mycoplasma hominis (Микоплазма хоминис) IgM</li>
          <li>Mycoplasma hominis (Микоплазма хоминис) IgG</li>
          <li>Trichomonas vaginalis (Трихомонас вагиналис) IgM</li>
          <li>Trichomonas vaginalis (Трихомонас вагиналис) IgG</li>
          <li>Gardnerella vaginalis (Гарднерелла вагиналис) IgM</li>
          <li>Gardnerella vaginalis (Гарднерелла вагиналис) IgG</li>
          <li>ЦМВ (Цитомегаловирус) IgM</li>
          <li>ЦМВ (Цитомегаловирус) IgG</li>
          <li>ВПГ (Вирус простого герпеса) IgM, 1 и 2 типов</li>
          <li>ВПГ (Вирус простого герпеса) IgG, 1 и 2 типов</li>
        </ul>
      ],
      yearly: [
        <ul className="text-xl text-gray-600">
          <li>Кальций общий</li>
          <li>Билирубин общий</li>
          <li>Клинический анализ крови с лейкоцитарной формулой (ОАК)</li>
          <li>СОЭ</li>
          <li>Железо</li>
          <li>Мочевина</li>
          <li>Креатинин</li>
          <li>С-реактивный белок</li>
          <li>Ревмофактор</li>
          <li>Глюкоза</li>
          <li>Гликозилированный гемоглобин</li>
          <li>АСТ</li>
          <li>АЛТ</li>
          <li>Билирубин прямой</li>
          <li>Общий белок</li>
          <li>Холестерин-ЛПВП</li>
          <li>Холестерин общий</li>
          <li>Холестерин-ЛПНП</li>
          <li>Щелочная фосфатаза</li>
          <li>Триглицериды</li>
          <li>ТТГ</li>
        </ul>
      ]
    }
  ];

  const content = [
    {
      title: "Как снизить процент висцерального жира",
      description: "Корифеи контроля калорий Precision Nutrition вновь спешат на помощь – теперь тем, кто страдает от чрезмерной округлости живота. Вот вам руководство по подтягиванию талии.",
      button: "Читать",
      href: "https://zozhnik.ru/kak-snizit-procent-visceralnogo-zhira-nauchno",
      image: "https://i.imgur.com/pCTZAB6.jpg",
      user: "Хэй Тир",
      userProfile: "https://i.imgur.com/yRFHDQF.png"
    },
    {
      title: "Как наладить режим (регулярных) тренировок",
      description: "Очередной текст от проекта NerdFitness о том, как перебороть тренировочное непостоянство. ",
      button: "Читать",
      href: "https://zozhnik.ru/kak-naladit-rezhim-regulyarnyx-trenirovok",
      image: "https://i.imgur.com/Cb4hc0w.jpg",
      user: "Хэй Тир",
      userProfile: "https://i.imgur.com/yRFHDQF.png"
    },
    {
      title: "Как меняется личность с годами",
      description: "Как меняется личность человека по мере старения – отрывок из книги нейробиолога “Счастливое старение”.",
      button: "Читать",
      href: "https://zozhnik.ru/kak_menyaetsya_lichnost_starenie",
      image: "https://i.imgur.com/tAfAwfT.jpg",
      user: "Максим Кудеров",
      userProfile: "https://i.imgur.com/yRFHDQF.png"
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
            <Slider className="slider-wrapper" autoplay={9000} touchDisabled>
              {content.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                  style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                  <div className="inner">
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4">{item.title}</h1>
                    <p className="text-xl font-medium mb-4">{item.description}</p>
                    <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href={item.href}>{item.button}</a>
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

          <div class="mb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h2 mb-4">Комплексные исследования</h1>
              <p className="text-xl text-gray-600">Своевременно проведенный комплекс исследования может предостеречь от нежданного.</p>
            </div>
            <div class="container px-6 mx-auto">
              <div class="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
                <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border border-gray-200 rounded-lg lg:mx-1">
                  <div class="flex-shrink-0">
                    <h2
                      class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-900 rounded-lg"
                    >
                      Ежегодное обследование
                    </h2>
                  </div>
                  <span
                    class="pt-2 text-4xl font-bold text-gray-900 uppercase dark:text-gray-100"
                  >
                    17000₸
                  </span>
                  <span class="text-gray-500 dark:text-gray-400">
                    7% скидка
                  </span>

                  <button
                    className="btn text-white bg-yellow-600 hover:bg-yellow-500 w-full mb-4 sm:w-auto sm:mb-0"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setYearlyModalOpen(true); }} aria-controls="modal"
                  >
                    Детали
                  </button>
                  <div>
                    <Modal id="modal" ariaLabel="modal-headline" show={yearlyModalOpen} handleClose={() => setYearlyModalOpen(false)}>
                      {prices.map((item) => (
                        <div className="relative">
                          <h1 className="h2 mt-4 mt-4">Ежегодное обследование</h1>
                          <p className="text-xl text-gray-900 mb-4">Список анализов которые входят в комплекс.</p>
                          <p className="text-xl font-medium mb-4">{item.yearly}</p>
                        </div>
                      ))}
                    </Modal>
                  </div>
                </div>

                <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border border-gray-200 rounded-lg lg:mx-1">
                  <div class="flex-shrink-0">
                    <h2
                      class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-900 rounded-lg"
                    >
                      Сердце и<br /> сосуды
                    </h2>
                  </div>
                  <span
                    class="pt-2 text-4xl font-bold text-gray-900 uppercase dark:text-gray-100"
                  >
                    24700₸
                  </span>
                  <span class="text-gray-500 dark:text-gray-400">
                    7% скидка
                  </span>

                  <button
                    className="btn text-white bg-yellow-600 hover:bg-yellow-500 w-full mb-4 sm:w-auto sm:mb-0"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setHeartModalOpen(true); }} aria-controls="modal"
                  >
                    Детали
                  </button>
                  <div>
                    <Modal id="modal" ariaLabel="modal-headline" show={heartModalOpen} handleClose={() => setHeartModalOpen(false)}>
                      {prices.map((item) => (
                        <div className="relative ">
                          <h1 className="h2 mt-4">Сердце и сосуды</h1>
                          <p className="text-xl text-gray-900 mb-4">Список анализов которые входят в комплекс.</p>
                          <p className="text-xl font-medium mb-4">{item.heart}</p>
                        </div>
                      ))}
                    </Modal>
                  </div>
                </div>

                <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border border-gray-200 rounded-lg lg:mx-1">
                  <div class="flex-shrink-0">
                    <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-900 rounded-lg">
                      Здоровая<br /> печень
                    </h2>
                  </div>
                  <span
                    class="pt-2 text-4xl font-bold text-gray-900 uppercase dark:text-gray-100"
                  >
                    14700₸
                  </span>
                  <span class="text-gray-500 dark:text-gray-400">
                    5% скидка
                  </span>

                  <button
                    className="btn text-white bg-yellow-600 hover:bg-yellow-500 w-full mb-4 sm:w-auto sm:mb-0"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiverModalOpen(true); }} aria-controls="modal"
                  >
                    Детали
                  </button>
                  <div>
                    <Modal id="modal" ariaLabel="modal-headline" show={liverModalOpen} handleClose={() => setLiverModalOpen(false)}>
                      {prices.map((item) => (
                        <div className="relative ">
                          <h1 className="h2 mt-4">Здоровая печень</h1>
                          <p className="text-xl text-gray-900 mb-4">Список анализов которые входят в комплекс.</p>
                          <p className="text-xl font-medium mb-4">{item.liver}</p>
                        </div>
                      ))}
                    </Modal>
                  </div>
                </div>

                <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border border-gray-200 rounded-lg lg:mx-1">
                  <div class="flex-shrink-0">
                    <h2 class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-900 rounded-lg">
                      Женское здоровье
                    </h2>
                  </div>
                  <span
                    class="pt-2 text-4xl font-bold text-gray-900 uppercase dark:text-gray-100"
                  >
                    41000₸
                  </span>
                  <span class="text-gray-500 dark:text-gray-400">
                    10% скидка
                  </span>

                  <button
                    className="btn text-white bg-yellow-600 hover:bg-yellow-500 w-full mb-4 sm:w-auto sm:mb-0"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setWomenModalOpen(true); }} aria-controls="modal"
                  >
                    Детали
                  </button>
                  <div>
                    <Modal id="modal" ariaLabel="modal-headline" show={womenModalOpen} handleClose={() => setWomenModalOpen(false)}>
                      {prices.map((item) => (
                        <div className="relative ">
                          <h1 className="h2 mt-4">Женское здоровье</h1>
                          <p className="text-xl text-gray-900 mb-4">Список анализов которые входят в комплекс.</p>
                          <p className="text-xl font-medium mb-4">{item.women}</p>
                        </div>

                      ))}
                    </Modal>
                  </div>
                </div>

                <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border border-gray-200 rounded-lg lg:mx-1">
                  <div class="flex-shrink-0">
                    <h2
                      class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-900 rounded-lg"
                    >
                      Мужское<br /> здоровье
                    </h2>
                  </div>
                  <span
                    class="pt-2 text-4xl font-bold text-gray-900 uppercase dark:text-gray-100"
                  >
                    44400₸
                  </span>
                  <span class="text-gray-500 dark:text-gray-400">
                    10% скидка
                  </span>

                  <button
                    className="btn text-white bg-yellow-600 hover:bg-yellow-500 w-full mb-4 sm:w-auto sm:mb-0"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMenModalOpen(true); }} aria-controls="modal"
                  >
                    Детали
                  </button>
                  <div>
                    <Modal id="modal" ariaLabel="modal-headline" show={menModalOpen} handleClose={() => setMenModalOpen(false)}>
                      {prices.map((item) => (
                        <div className="relative ">
                          <h1 className="h2 mt-4">Мужское здоровье</h1>
                          <p className="text-xl text-gray-900 mb-4">Список анализов которые входят в комплекс.</p>
                          <p className="text-xl font-medium mb-4">{item.men}</p>
                        </div>
                      ))}
                    </Modal>
                  </div>
                </div>

                <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border border-gray-200 rounded-lg lg:mx-1">
                  <div class="flex-shrink-0">
                    <h2
                      class="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-gray-900 rounded-lg"
                    >
                      Планирование беременности
                    </h2>
                  </div>
                  <span
                    class="pt-2 text-4xl font-bold text-gray-900 uppercase dark:text-gray-100"
                  >
                    41000₸
                  </span>
                  <span class="text-gray-500 dark:text-gray-400">
                    10% скидка
                  </span>

                  <button
                    className="btn text-white bg-yellow-600 hover:bg-yellow-500 w-full mb-4 sm:w-auto sm:mb-0"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPregnancyModalOpen(true); }} aria-controls="modal"
                  >
                    Детали
                  </button>
                  <div>
                    <Modal id="modal" ariaLabel="modal-headline" show={pregnancyModalOpen} handleClose={() => setPregnancyModalOpen(false)}>
                      {prices.map((item) => (
                        <div className="relative ">
                          <h1 className="h2 mt-4">Планирование беременности</h1>
                          <p className="text-xl text-gray-900 mb-4">Список анализов которые входят в комплекс.</p>
                          <p className="text-xl font-medium mb-4">{item.pregnancy}</p>
                        </div>
                      ))}
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
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
                    <div className="text-gray-600">Выберите необходимые для вас анализы с помощью поисковика таблицы.</div>
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
                    <div className="text-gray-600">Проследите, чтобы все пункты из списка были выполнены.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Расположение мед.центра на карте</div>
                    <div className="text-gray-600">Найдите нас по адресу <a className="text-blue-600 hover:underline" href="https://2gis.kz/almaty/inside/9430047375172881/firm/70000001046536980/76.883741%2C43.221654?m=76.883705%2C43.221604%2F16.97">ул. Жандосова 96 г. Алматы</a>
                      <a className="text-blue-600 hover:underline" href="tel:+7707-824-9504"> +7 (707) 824 9504 </a> <a className="text-blue-600 hover:underline" href="tel:+7727-236-0065">+7 (727) 236 0065</a>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
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
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/features-element.png').default} width="530" height="462" alt="Features bg" />
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
                  <SimpleMap />
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
