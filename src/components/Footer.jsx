import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="footer-container py-4 md:px-8 xs:px-0">
                <div className="mx-auto max-w-7xl">
                <div className="flex justify-between items-center md:flex-row xs:flex-col gap-4">
                        <ul className="text-sm flex items-center flex-wrap gap-3 md:gap-6 transition-all duration-500">
                        <Link
                            to="main"
                            smooth={true}
                            offset={-64}
                            duration={500}
                            className="header-item uppercase text-lg font-normal xs:text-sm cursor-pointer"
                        >
                            {t('footer-main')}
                        </Link>
                        <Link
                            to="slider"
                            smooth={true}
                            offset={-64}
                            duration={500}
                            className="header-item uppercase text-lg font-normal xs:text-sm cursor-pointer"
                        >
                            {t('footer-stek')}
                        </Link>
                        <Link
                            to="works"
                            smooth={true}
                            offset={-64}
                            duration={500}
                            className="header-item uppercase text-lg font-normal xs:text-sm cursor-pointer"
                        >
                            {t('footer-works')}
                        </Link>
                        </ul>
                    
                    {/* Социальные иконки */}
                    <div className="flex space-x-4 sm:justify-center">
                        <a href="https://github.com/NEETRUNNER" target="_blank" rel="noopener noreferrer" className="group w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-500 hover:border-indigo-600">
                        <svg className="text-gray-700 transition-all duration-500 group-hover:text-indigo-600 p-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.387.6.112.793-.26.793-.578v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.385-1.333-1.756-1.333-1.756-1.09-.746.084-.731.084-.731 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.49.997.107-.774.419-1.304.762-1.604-2.664-.3-5.466-1.332-5.466-5.931 0-1.31.469-2.383 1.236-3.222-.124-.303-.536-1.522.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.046.139 3.003.405 2.292-1.553 3.3-1.23 3.3-1.23.653 1.654.241 2.873.118 3.176.768.839 1.236 1.912 1.236 3.222 0 4.61-2.805 5.629-5.475 5.92.43.371.814 1.103.814 2.222v3.293c0 .32.193.694.8.576C20.565 21.798 24 17.302 24 12c0-6.628-5.373-12-12-12z" fill="currentColor"/>
                        </svg>
                        </a>
                        
                        <a href="https://t.me/Askeladd_dev" target="_blank" rel="noopener noreferrer" className="group w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-500 hover:border-indigo-600">
                        <svg className="text-gray-700 transition-all duration-500 group-hover:text-indigo-600 p-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.99 4.388 10.937 10.126 11.85.739.126 1.017-.321 1.017-.715v-2.458c-4.126.898-5.027-1.94-5.027-1.94-.672-1.705-1.64-2.159-1.64-2.159-1.342-.919.102-.9.102-.9 1.485.104 2.271 1.521 2.271 1.521 1.299 2.245 3.442 1.597 4.28 1.222.13-.944.508-1.598.927-1.964-3.304-.376-6.776-1.652-6.776-7.356 0-1.625.581-2.948 1.54-3.986-.157-.378-.668-1.9.147-3.957 0 0 1.253-.398 4.1 1.523 1.189-.33 2.463-.498 3.733-.505 1.268.007 2.544.175 3.733.505 2.846-1.92 4.1-1.523 4.1-1.523.816 2.057.304 3.58.147 3.957.96 1.038 1.54 2.361 1.54 3.986 0 5.719-3.478 6.978-6.79 7.346.521.449.984 1.326.984 2.677v4.002c0 .397.278.846 1.021.712C19.606 22.936 24 18.004 24 12 24 5.373 18.627 0 12 0z" fill="currentColor"/>
                        </svg>
                        </a>

                        <a href="https://www.linkedin.com/in/alexey-stasovskiy-512879332/" target="_blank" rel="noopener noreferrer" className="group w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-500 hover:border-indigo-600">
                        <svg className="text-gray-700 transition-all duration-500 group-hover:text-indigo-600 p-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zM7 19H4v-9h3v9zm-1.5-10.15a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM20 19h-3v-4.5c0-1.346-1.154-2.5-2.5-2.5S12 13.154 12 14.5V19H9v-9h3v1.1c.621-.596 1.5-1.1 2.5-1.1 2.21 0 4 1.79 4 4V19z" fill="currentColor"/>
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;