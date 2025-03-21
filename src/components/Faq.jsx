import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ObserverAnimate from '../Others/FadeInSection';

import { useTranslation } from 'react-i18next';

const Questions = () => {
    const { t } = useTranslation();

    return (
        <section className="questions bg-black h-full bg-cover">
            <div className="container py-11 xs:max-w-lg md:max-w-screen-md lg:max-w-screen-lg mx-auto w-11/12">
                <ObserverAnimate>
                    <h1 className="questions-title xs:text-xl md:text-3xl lg:text-5xl xl:text-4xl uppercase font-bold text-white text-center ">
                       {t("questions-title")}
                    </h1>
                    <Accordion className="w-4/5 !mt-10 m-0 !mx-auto xs:w-full">
                        <AccordionSummary
                            expandIcon={<KeyboardDoubleArrowDownIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className="text-white	 hover:bg-blue-200"
                        >
                            <Typography className="lg:text-lg font-semibold text-black md:text-sm xs:text-xs">
                                {t("questions-first")}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className="bg-gray-50">
                            <Typography className="leading-relaxed text-lg font-bold text-violet-800 xs:text-base">
                                {t("questions-first-answer")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="w-4/5 mt-5 !mx-auto xs:w-full">
                        <AccordionSummary
                            expandIcon={<KeyboardDoubleArrowDownIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            className="text-white	 hover:bg-blue-200"
                        >
                            <Typography className="lg:text-lg font-semibold text-black md:text-sm xs:text-xs">
                                {t("questions-second")}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className="bg-gray-50">
                            <Typography className="leading-relaxed text-lg font-bold text-violet-800 xs:text-base">
                                {t("questions-second-answer")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="w-4/5 mt-5 !mx-auto xs:w-full">
                        <AccordionSummary
                            expandIcon={<KeyboardDoubleArrowDownIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                            className="text-white	 hover:bg-blue-200"
                        >
                            <Typography className="lg:text-lg font-semibold text-black md:text-sm xs:text-xs">
                                {t("questions-third")}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className="bg-gray-50">
                            <Typography className="leading-relaxed text-lg font-bold text-violet-800 xs:text-base">
                                {t("questions-third-answer")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="w-4/5 mt-5 !mx-auto xs:w-full">
                        <AccordionSummary
                            expandIcon={<KeyboardDoubleArrowDownIcon />}
                            aria-controls="panel4-content"
                            id="panel4-header"
                            className="text-white	 hover:bg-blue-200"
                        >
                            <Typography className="lg:text-lg font-semibold text-black md:text-sm xs:text-xs">
                                {t("questions-four")}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className="bg-gray-50">
                            <Typography className="leading-relaxed text-lg font-bold text-violet-800	xs:text-base">
                                {t("questions-four-answer")}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </ObserverAnimate>
            </div>
        </section>
    );
};

export default Questions;
