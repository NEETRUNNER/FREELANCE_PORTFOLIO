import { Tab } from '@headlessui/react';

import pizza from '../img/pizza.webp'
import store from '../img/store.webp'
import crypto from '../img/crypto.png'
import weather from '../img/weather.png'

import ObserverAnimate from '../Others/FadeInSection';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { useTranslation } from 'react-i18next';

import { useState, useEffect } from 'react';

const Works = () => {
    const {t} = useTranslation();
    
    return (
        <>
            <section id="works" className="projects bg-white">
                <div className="container py-11 mx-auto text-center w-4/5">
                    <ObserverAnimate>
                        <h1 className="works-title xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-4xl font-libre font-bold uppercase text-center ml-auto mr-auto">
                            {t("works-title")}
                        </h1>

                        <Tab.Group>
                            <Tabs />
                            <Tab.Panels>
                                <Tab.Panel className='flex justify-center mt-12 flex-wrap gap-x-8 gap-y-8'> 

                                <div className="card md:w-[300px] xs:w-[280px]">
                                    <img src={store} alt="" className='' />
                                    <div className="card__content overflow-auto">
                                        <p className="card__title">NB Store
                                        </p><p className="card__description">{t('store')}</p>

                                        <a target='_blank' rel='noreferrer' href="https://neetrunner.github.io/NBSTORE/">
                                            <button className="pushable">
                                                <span className="shadow"></span>
                                                <span className="edge"></span>
                                                <span className="front"> Открыть проект </span>
                                            </button>
                                        </a>

                                    </div>
                                </div>

                                <div className="card md:w-[300px] xs:w-[280px]">
                                    <img src={pizza} alt="" className='' />
                                    <div className="card__content overflow-auto">
                                        <p className="card__title">Next Pizza
                                        </p><p className="card__description">{t('pizza')}</p>

                                        <a target='_blank' rel='noreferrer' href="https://neetrunner.github.io/PIZZA/">
                                            <button className="pushable">
                                                <span className="shadow"></span>
                                                <span className="edge"></span>
                                                <span className="front"> Открыть проект </span>
                                            </button>
                                        </a>

                                    </div>
                                </div>

                                <div className="card md:w-[300px] xs:w-[280px]">
                                    <img src={crypto} alt="" className='h-[200px] object-cover' />
                                    <div className="card__content overflow-auto">
                                        <p className="card__title">Crypto
                                        </p><p className="card__description">{t('crypto')}</p>

                                        <a target='_blank' rel='noreferrer' href="https://neetrunner.github.io/CRYPTO/">
                                            <button className="pushable">
                                                <span className="shadow"></span>
                                                <span className="edge"></span>
                                                <span className="front"> Открыть проект </span>
                                            </button>
                                        </a>

                                    </div>
                                </div>

                                <div className="card md:w-[300px] xs:w-[280px]">
                                    <img src={weather} alt="" className='h-[200px] object-cover' />
                                    <div className="card__content overflow-auto">
                                        <p className="card__title">Weather App
                                        </p><p className="card__description">{t('weather')}</p>

                                        <a target='_blank' rel='noreferrer' href="https://neetrunner.github.io/WEATHER_IN_CITIES-TS-/">
                                            <button className="pushable">
                                                <span className="shadow"></span>
                                                <span className="edge"></span>
                                                <span className="front"> Открыть проект </span>
                                            </button>
                                        </a>

                                    </div>
                                </div>
                                
                                </Tab.Panel>
                                <Tab.Panel>

                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                        
                    </ObserverAnimate>
                </div>
            </section>
        </>
    );
};

export default Works;

const Tabs = () => {
    const {t} = useTranslation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Отслеживание изменения ширины окна
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // Удаляем обработчик при размонтировании
    }, []);

    const settings = {
        className: 'center',
        centerMode: false,
        infinite: false,
        centerPadding: '60px',
        slidesToShow: 1,
        speed: 500,
    };

    // Функция для обновления состояния при изменении ширины окна
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    return (
            <Tab.List className="pt-10 flex lg:justify-center">
                {isMobile ? (
                    <Slider {...settings} className="w-full">
                        <Tab className={({ selected }) => 
                            `relative text-sm px-5 py-2.5 uppercase font-semibold 
                            transition duration-300 ease-in-out transform whitespace-nowrap w-max 
                            bg-gray-200 rounded-lg shadow-md cursor-pointer 
                            ${selected ? 'text-white bg-blue-500 shadow-xl scale-105' : 'text-gray-700 hover:bg-gray-300'}`
                        }>
                            {t("tab-website")}
                        </Tab>
                    </Slider>
                ) : (
                    <div className="flex space-x-4">
                            <Tab className={({ selected }) =>
                                `relative px-6 py-3 text-lg font-bold rounded-lg transition 
                                ease-in-out duration-300 cursor-pointer tracking-wide
                                before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 
                                before:bg-blue-500 before:transition-all before:duration-300 
                                hover:before:w-full hover:before:left-0 
                                ${selected ? 'text-white bg-blue-500 shadow-xl scale-105' : 'text-gray-600 bg-gray-100 hover:bg-gray-300'}`}
                            >
                                {t("tab-website")}
                            </Tab>
                        )
                        </div>
                    )}
            </Tab.List>
    );
};