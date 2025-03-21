import { Link } from 'react-scroll'; // Для скролла
import ObserverAnimate from '../Others/FadeInSection';
import { useTranslation } from 'react-i18next';

const Main = () => {

    const { t } = useTranslation();

    return (
        <>
            <section
                id="main"
                className="main h-screen bg-main relative"
            >
                <div className="container h-full max-w-full flex items-center justify-center flex-col py-24">
                    <ObserverAnimate>
                        <div className="main-content mx-auto">
                            <h1 className="main-title xs:text-2xl md:text-3xl lg:text-5xl xl:text-7xl uppercase font-extrabold text-white text-center">
                                {t('main-title')}
                            </h1>
                            <div className="main-text text-center mx-auto mt-8 text-white font-mono md:text-[30px] xs:text-[25px] whitespace-nowrap overflow-hidden border-r-4 border-white animate-typing">
                                Frontend Developer
                            </div>
                        </div>

                        <div className="main-wrap__btns gap-x-8 xs:flex-col xs:items-center text-center mx-auto flex justify-center pt-12 xs:gap-y-4 xl:flex-row lg:flex-row">

                            <Link
                                to="slider"
                                smooth={true}
                                offset={-64}
                                duration={500}
                            >
                                <button className="button">
                                {t('first-btn')}
                                </button>
                            </Link>

                            <Link
                                to="works"
                                smooth={true}
                                offset={-64}
                                duration={500}
                            >
                                <button className="button">
                                    {t('second-btn')}
                                </button>
                            </Link>
                        </div>

                    </ObserverAnimate>
                </div>
            </section>
        </>
    );
};

export default Main;
