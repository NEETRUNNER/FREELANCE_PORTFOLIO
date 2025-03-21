import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ObserverAnimate from '../Others/FadeInSection';

import html from '../img/html.svg';
import css from '../img/css3.svg';
import js from '../img/js.svg';
import ts from '../img/typescript.svg'
import tailwind from '../img/tailwind.svg';
import react from '../img/react.svg';
import redux from '../img/redux.svg';
import vue from '../img/vue.svg';
import pinia from '../img/pinia.svg'

import { useTranslation } from 'react-i18next';

function SwipeToSlide() {
    const { t } = useTranslation();

    const settings = {
        centerMode: false,
        infinite: true,
        speed: 100,
        autoplay: false,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: false,
                },
            },
        ],
    };

    const style = {
        marginTop: '25px',
    };

    return (
        <section
            id="slider"
            className="slider bg-main"
        >
            <div className="slider-container mx-auto w-full lg:w-3/4 py-8">
                <ObserverAnimate>
                    <h1 className="slider-title text-white xs:text-2xl text-3xl lg:text-5xl font-libre font-semibold uppercase text-center ml-auto mr-auto">
                        {t('slider-title')}
                    </h1>
                    <Slider style={style} {...settings}>
                        {[
                            { src: html, alt: "HTML5", label: "HTML5" },
                            { src: css, alt: "CSS3", label: "CSS3" },
                            { src: js, alt: "JavaScript", label: "JavaScript" },
                            { src: ts, alt: "TypeScript", label: "TypeScript" },
                            { src: tailwind, alt: "Tailwind", label: "Tailwind" },
                            { src: react, alt: "React", label: "React" },
                            { src: redux, alt: "Redux", label: "Redux" },
                            { src: vue, alt: "Vue", label: "Vue 3" },
                            { src: pinia, alt: "pinia", label: "pinia" }
                        ].map((icon, index) => (
                            <div
                                key={index}
                                className="!flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 md:!w-full xs:!w-[90%] mx-auto"
                                style={{ width: 220 }}
                            >
                                <img
                                    src={icon.src}
                                    alt={icon.alt}
                                    className="w-full h-auto md:w-full xs:w-3/4 mb-3"
                                />
                                <h1 className="text-center uppercase text-xl font-semibold pt-1.5">
                                    {icon.label}
                                </h1>
                            </div>
                        ))}
                </Slider>

                </ObserverAnimate>
            </div>
        </section>
    );
}

export default SwipeToSlide;

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: 'none' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: 'none' }}
            onClick={onClick}
        />
    );
}
