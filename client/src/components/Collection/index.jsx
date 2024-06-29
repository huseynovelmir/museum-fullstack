import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import img1 from "./../../assets/images/img1.jpg";
import img2 from "./../../assets/images/img2.jpg";
import img3 from "./../../assets/images/img3.jpg";
import img4 from "./../../assets/images/img4.jpg";
import img5 from "./../../assets/images/img5.jpg";
import img6 from "./../../assets/images/img6.jpg";
const Collection = () => {
  return (
    <div className={style.collection}>
      <div className={style.container}>
        <div className={style.head}>
          <h1>Collectoin</h1>
          <Link to="/collection" className={style.link}>
            VIEW ALL COLLECTION
          </Link>
        </div>
        <p>
          Our collection currently contains more than 100,000 works of art and
          design dating from <br /> ancient times to today.
        </p>
        <div className={style.boxs}>
          <Link to="" className={style.boxLink}>
            <div className={style.box}>
              <img src={img1} alt="img" />
              <p> Public art maintenance best practices</p>
              <span>News</span>
            </div>
          </Link>
          <Link to="" className={style.boxLink}>
            <div className={style.box}>
              <img src={img2} alt="img" />
              <p>Original art holiday gift guide</p>
              <span>News</span>
            </div>
          </Link>
          <Link to="" className={style.boxLink}>
            <div className={style.box}>
              <img src={img3} alt="img" />
              <p>Building the best online portfolio for your art</p>
              <span>News</span>
            </div>
          </Link>
          <Link to="" className={style.boxLink}>
            <div className={style.box}>
              <img src={img4} alt="img" />
              <p>How to discover your taste as a new art collector</p>
              <span>News</span>
            </div>
          </Link>
          <Link to="" className={style.boxLink}>
            <div className={style.box}>
              <img src={img5} alt="img" />
              <p>Things successful artists refuse to do</p>
              <span>News</span>
            </div>
          </Link>
          <Link to="" className={style.boxLink}>
            <div className={style.box}>
              <img src={img6} alt="img" />
              <p>How to get your art funded</p>
              <span>News</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collection;
