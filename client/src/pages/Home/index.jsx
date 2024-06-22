import React from "react";
import style from "./style.module.scss";
import Slider from "../../components/Slider";
import About from "../../components/About";
const Home = () => {
  return (
    <div>
      <Slider />
      <About />
    </div>
  );
};

export default Home;
