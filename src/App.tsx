import About from "./components/About/About.tsx";
import NavBar from "./components/Navbar/NavBar.tsx";
import Section from "./components/Section/Section.tsx";
import Work from "./components/work/Work.tsx";
import GalleryComp from "./components/Gallery/Gallery.tsx";
import Service from "./components/Service/Service.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Preloader from "./components/Preloader/Preloader.tsx";
import { useState, useEffect } from "react";
function App() {
  const [preload, setPreload] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreload(false);
    }, 2500);

    const handleLoad = () => {
      setIsLoading(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return preload && !isLoading ? (
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
  );
}

export default App;
