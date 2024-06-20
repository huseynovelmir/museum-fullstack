import React from "react";
import style from "./style.module.scss";
import visitor from "../../../../assets/images/visitorinfo.jpg";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const Visitorinfo = () => {
  return (
    <div className={style.visitorinfo}>
      <img src={visitor} alt="" />
      <div className={style.textarea}>
        <h3>Visitor Info</h3>
        <div className={style.box}>
          <h4>Admission Prices</h4>
          <div className={style.hr}></div>
          <div className={style.prices}>
            <p>Adults: $20.00</p>
            <p>Seniors: $15.00</p>
            <p>Students: $10.00</p>
          </div>
        </div>
        <div className={style.box}>
          <h4>Opening Hours</h4>
          <div className={style.hr}></div>
          <div className={style.prices}>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday: 9am - 6pm</p>
            <p>Sunday: 10am - 6pm</p>
          </div>
        </div>
        <Link to="#" className={style.link}>
          BUY TICKET <MdOutlineArrowForwardIos />
        </Link>
      </div>
    </div>
  );
};

export default Visitorinfo;
