import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Link } from 'react-scroll'; // Для скролла

import ToggleLanguage from '../Others/ToggleLanguage';

import { useTranslation } from 'react-i18next';

const BurgerMenu = ({toggleActive, active}) => {
    const { t } = useTranslation();

    return (
    <ul
        className={active
                ? 'header-ul border-4 flex-col flex xs:w-full lg:w-3/12	 items-center justify-center h-full fixed text-center bg-white transition-all ease-in z-10 overflow-y-auto'
                : 'header-ul border-4 flex-col flex xs:w-full lg:w-2/12 items-center justify-center h-full fixed text-center bg-white ease-in transition-all -translate-x-full z-10 overflow-y-auto'
        }
    >   
        <Link
            onClick={toggleActive}
            to="main"
            smooth={true}
            offset={-64}
            duration={500}
            className="header-item xs:text-base uppercase cursor-pointer mb-7 md:text-2xl"
    >
            {t("burger-menu__main")}
        </Link>
        
        <Link
            onClick={toggleActive}
            to="works"
            smooth={true}
            offset={-64}
            duration={500}
            className="header-item xs:text-base uppercase cursor-pointer mb-7 md:text-2xl"
    >
            {t("burger-menu__works")}
        </Link>

        <Link
            onClick={toggleActive}
            to="slider"
            smooth={true}
            offset={-64}
            duration={500}
            className="header-item xs:text-base uppercase cursor-pointer mb-7 md:text-2xl"
    >
            {t("burger-menu__stek")}
        </Link>

        <div className="menu-soc flex flex-row justify-center w-full">
            <a href="https://github.com/NEETRUNNER" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="large" className='ml-1 mr-1'/>
            </a>
            <a href="https://t.me/Askeladd_dev" target="_blank" rel="noopener noreferrer">
                <TelegramIcon fontSize="large" className='ml-1 mr-1'/>
            </a>
            <a href="https://www.linkedin.com/in/alexey-stasovskiy-512879332/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="large" className='ml-1 mr-1'/>
            </a>
        </div>
        <ToggleLanguage/>
    </ul>
    )
}

export default BurgerMenu;