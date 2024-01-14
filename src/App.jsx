import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Celestials } from "./components/Celestials";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>  
      <Navbar />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Celestials data={landingPageData.Celestials} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
    </div>
    
  );
};

export default App;
