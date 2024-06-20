import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import bg from "../../../../assets/images/bg.jpeg";
const Exhibitions = () => {
  return (
    <div className={style.exhibitions}>
      <div className={style.container}>
        <div className={style.head}>
          <h1>Upcoming Exhibitions</h1>
          <Link to="/exhibitions" className={style.link}>
            VIEW ALL EXHIBITIONS
          </Link>
        </div>
        <img src={bg} alt="" />
        <div className={style.infos}>
          <div className={style.info}>
            <div>
              {" "}
              <h3>Bernard van Orley At Saint-Géry</h3>
              <span>September 21, 2023-October 20, 2024</span>
            </div>

            <p>
              Especially for the occasion, Ozeum is setting up the tapestries
              and paintings by Bernard van Orley from the series of Jacob's
              History and the first tapestry from the series Our Blessed Lady of
              the Sablon.
            </p>
            <button>More Info</button>
          </div>
          <div className={style.info}>
            <div>
              {" "}
              <h3>Records & Rebels 1966-1970</h3>
              <span>April 9, 2025 00:00-May 5, 2025 23:59</span>
            </div>

            <p>
              This major exhibition shows the revolutionary art of the late
              1960s, expressed through some of the greatest music hits of the
              20th century as well as paintings, film industry, fashion and
              design.
            </p>
            <button>More Info</button>
          </div>
          <div className={style.info}>
            <div>
              {" "}
              <h3>Golden Age of Renaissance Exhibition</h3>
              <span>June 13, 2024-July 1, 2024</span>
            </div>

            <p>
              Works of a German neoclassical painter Johan Zoffany who lived and
              created his masterpieces in Europe and India. The artist is
              appreciated for his detailed depiction of domestic life in the
              Georgian period.
            </p>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
