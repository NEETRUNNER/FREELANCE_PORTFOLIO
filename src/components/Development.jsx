import html from '../img/html.svg';
import css from '../img/css3.svg';
import js from '../img/js.svg';
import react from '../img/react.svg';

import ObserverAnimate from '../Others/FadeInSection';

import { useTranslation } from 'react-i18next';

const Development = () => {
    const { t } = useTranslation();

    return (
        <>
            <section
                id="development"
                className="development h-full bg-auto bg-center bg-fixed bg-main"
                
            >
                <div className="development-container md:py-12 xs:max-w-lg md:max-w-screen-md lg:max-w-screen-lg mx-auto w-11/12 py-6">
                    <ObserverAnimate>
                        <h1 className="development-title font-normal xs:text-2xl sm:text-5xl md:text-4xl lg:text-5xl mx-auto text-center text-white uppercase">
                            {t("development-title")}
                        </h1>
                        <div className="pt-4">
                            <div className="development-wrap py-4 xs:flex-col md:flex-row flex items-center">
                                <img
                                    src={html}
                                    alt=""
                                    className="md:mb-0 xs:mb-6 xs:w-32 sm:w-32 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain max-w-max-h-full animate-scale bg-white rounded-full md:p-8 xs:p-4"
                                />
                                <p className="development-wrap__text font-light sm:text-sm lg:text-xl	text-white rounded-lg max-w-full	bg-slate-800	min-h-44		p-5 flex items-center text-center">
                                    {t("html-description")}
                                </p>
                            </div>
                            <div className="development-wrap py-4 xs:flex-col pt-3.5 flex items-center md:flex-row-reverse lg:flex-row-reverse">
                                <img
                                    src={css}
                                    alt=""
                                    className="md:mb-0 xs:mb-6 xs:w-32 sm:w-32 md:w-48 sm:text-sm md:h-48 lg:w-52 lg:h-52 object-contain max-w-full max-h-full animate-scale bg-white rounded-full md:p-8 xs:p-4"
                                />
                                <p className="development-wrap__text font-light sm:text-sm lg:text-xl	text-white rounded-lg max-w-full	bg-slate-800	min-h-44		p-5 flex items-center text-center">
                                    {t("css-description")}
                                </p>
                            </div>
                            <div className="development-wrap py-4 xs:flex-col md:flex-row pt-3.5	 flex items-center">
                                <img
                                    src={js}
                                    alt=""
                                    className="md:mb-0 xs:mb-6 xs:w-32 sm:h-32 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain max-w-full max-h-full animate-scale bg-white rounded-full md:p-8 xs:p-4"
                                />
                                <p className="development-wrap__text font-light sm:text-sm lg:text-xl	text-white rounded-lg max-w-full	bg-slate-800	min-h-44 p-5 flex items-center text-center">
                                    {t("js-description")}
                                </p>
                            </div>
                            <div className="development-wrap py-4 xs:flex-col pt-3.5 flex items-center md:flex-row-reverse lg:flex-row-reverse">
                                <img
                                    src={react}
                                    alt=""
                                    className="md:mb-0 xs:mb-6 xs:w-32 sm:h-32 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain max-w-full max-h-full animate-scale bg-white rounded-full md:p-8 xs:p-4"
                                />
                                <p className="development-wrap__text font-light sm:text-sm lg:text-xl	text-white rounded-lg max-w-full bg-slate-800 min-h-44	 p-5 flex items-center text-center">
                                {t("react-description")}
                                </p>
                            </div>
                        </div>
                    </ObserverAnimate>
                </div>
            </section>
        </>
    );
};

export default Development;