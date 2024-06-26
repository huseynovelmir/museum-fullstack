import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style.textarea}>
          <h1>Welcome To Ozeum Art And History Museum</h1>
          <p>
            Ozeum occupies a prominent place among the leading historical and
            cultural museums due to the high value of collection presented and
            constant activity in spheres of research, exhibitions and cultural
            education.
          </p>
          <Link to="/aboutus">
            <button>More About</button>
          </Link>
        </div>
        <div className={style.img}></div>
      </div>
    </div>
  );
};

export default About;
