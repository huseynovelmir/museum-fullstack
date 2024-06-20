import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div className={style.intro}>
      <div className={style.bg}>
        <h1>Collections</h1>
        <p>
          <Link to="/">Home</Link> / Collections
        </p>
      </div>
    </div>
  );
};

export default Intro;
