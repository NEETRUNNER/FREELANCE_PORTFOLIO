import Header from "./components/Header";
import Main from "./components/Main";
import Slider from "./components/Slider";
import Works from "./components/Projects";
import Questions from "./components/Faq";
import Footer from "./components/Footer";
import BurgerMenu from "./Others/BurgerMenu";

import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import Arrow from "./Others/Arrow";

const App = () => {
  const [active, setActive] = useState(false); // Подняли состояние чтобы передать пропс и в тот компонент и в тот
  const [activeContent, setActiveContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActiveContent(true);
    }, 1000);
  }, [activeContent])

  const toggleActive = () => {
    setActive((prevActive) => !prevActive);
  };

    return (
        <div className="app">
          
          <HashRouter>
            <div className={`overlay fixed top-0 left-0 w-full h-full transition-opacity duration-300 ${active ? "opacity-50 visible bg-black z-10" : "opacity-0 invisible"}`} onClick={() => setActive(false)}> 
            </div>

            <BurgerMenu toggleActive={toggleActive} active={active}/>

            <Header active={active} toggleActive={toggleActive}/>
            <Main/>
            <Arrow/>
            <Slider/>
            <Works/>
            <Questions/>
            <Footer/>
          </HashRouter>

          </div>
    );
  };

export default App;