import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  let activeStyle = {
    color: "#c9a050",
  };

  return (
    <div className={style.header}>
      <div className={style.container}>
        <div>
          <NavLink
            className={style.Navlink}
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            HOME
          </NavLink>

          <NavLink
            className={style.Navlink}
            to="/collections"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            COLLECTIONS
          </NavLink>

          <NavLink
            className={style.Navlink}
            to="/aboutus"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ABOUT US
          </NavLink>
        </div>
        <h1>OZEUM</h1>
        <div>
          <NavLink
            className={style.Navlink}
            to="/blog"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            BLOG
          </NavLink>

          <NavLink
            className={style.Navlink}
            to="/shop"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SHOP
          </NavLink>

          <NavLink
            className={style.Navlink}
            to="/contacts"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CONTACTS
          </NavLink>

          <NavLink
            className={`${style.Navlink} ${style.lastLink}`}
            to="/visit"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            VISIT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
