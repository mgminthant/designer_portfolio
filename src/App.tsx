import { useState, useEffect } from "react";

import About from "./components/About/About.tsx";
import NavBar from "./components/Navbar/NavBar.tsx";
import Section from "./components/Section/Section.tsx";
import Work from "./components/work/Work.tsx";
import GalleryComp from "./components/Gallery/Gallery.tsx";
import Service from "./components/Service/Service.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Preloader from "./components/Preloader/Preloader.tsx";
import ThemeContext from "./contexts/StyleContext.ts";
import "./assets/styles/themes.css";

function App() {
  const [preload, setPreload] = useState(true);
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2500 - elapsedTime, 0);

      setTimeout(() => {
        setPreload(false);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {preload ? (
          <Preloader />
        ) : (
          <>
            <NavBar />
            <div className="main-container">
              <Section />
              <About />
              <Work />
              <GalleryComp />
              <Service />
              <Contact />
              <Footer />
            </div>
          </>
        )}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
