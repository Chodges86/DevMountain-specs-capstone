import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { BsPlusLg } from "react-icons/bs";

import logo from "../assetts/by_the_hr_logo.png";
import AuthContext from "../store/authContext";

import classes from "./Header.module.css";



const Header = () => {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn

  const logoutHandler = () => {
    authCtx.setIsLoggedIn(false)
  }

  return (
    <>
      <div className={classes.header}>
        <img src={logo} alt="" />
        {isLoggedIn && (
          <div className={classes.userReadOut}>
            <h1>Username</h1>
            <h2 onClick={logoutHandler}>Logout</h2>
          </div>
        )}
      </div>
      {isLoggedIn && <div className={classes.btmHeader}>
        <IconContext.Provider value={{color: "#2D4059", size: "2em"}}>
          <BsPlusLg />
        </IconContext.Provider>
        <h1>New Project</h1>
      </div>}
    </>
  );
};

export default Header;
