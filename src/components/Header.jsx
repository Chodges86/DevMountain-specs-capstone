import React from "react";

import logo from "../assetts/by_the_hr_logo.png";

import classes from "./Header.module.css";

const isLoggedIn = false

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <img src={logo} alt="" />
        {isLoggedIn && <div className={classes.userReadOut}>
          <h1>Username</h1>
          <h1>Logout</h1>
        </div>}
      </div>
    </>
  );
};

export default Header;
