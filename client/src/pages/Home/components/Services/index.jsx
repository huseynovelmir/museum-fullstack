import React from "react";
import style from "./style.module.scss";
import { CiMusicNote1 } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { PiCoffeeLight } from "react-icons/pi";
import { PiShoppingBagOpenThin } from "react-icons/pi";

const Services = () => {
  return (
    <div className={style.services}>
      <div className={style.container}>
        <div className={style.head}>
          <h1>Services</h1>
        </div>
        <div className={style.boxs}>
          <div className={style.box}>
            <CiCamera className={style.icon} />
            <span>Photography</span>
          </div>
          <div className={style.box}>
            <CiMusicNote1 className={style.icon} />
            <span>Audioguide</span>
          </div>
          <div className={style.box}>
            <PiCoffeeLight className={style.icon} />
            <span>Restaurant and Cafe</span>
          </div>
          <div className={style.box}>
            <PiShoppingBagOpenThin className={style.icon} />
            <span>Shop</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
