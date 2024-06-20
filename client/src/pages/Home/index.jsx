import React from "react";
import style from "./style.module.scss";
import Slider from "./components/Slider";
import About from "./components/About";
import Exhibitions from "./components/Exhibitions";
import Visitorinfo from "./components/Visitorinfo";
import Collection from "./components/Collection";
import Services from "./components/Services";
const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <Exhibitions />
      <Visitorinfo />
      <Collection />
      <Services />
    </div>
  );
};

export default Home;
