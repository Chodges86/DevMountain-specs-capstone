import React from "react";
import { IconContext } from "react-icons";
import { BsPlusLg } from "react-icons/bs";

import logo from "../assetts/by_the_hr_logo.png";

import classes from "./Header.module.css";

const isLoggedIn = true;

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <img src={logo} alt="" />
        {isLoggedIn && (
          <div className={classes.userReadOut}>
            <h1>Username</h1>
            <h1>Logout</h1>
          </div>
        )}
      </div>
      <div className={classes.btmHeader}>
        <IconContext.Provider value={{color: "#2D4059", size: "2em"}}>
          <BsPlusLg />
        </IconContext.Provider>
        <h1>New Project</h1>
      </div>
    </>
  );
};

export default Header;
