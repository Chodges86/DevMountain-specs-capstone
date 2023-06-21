import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { BsPlusLg } from "react-icons/bs";

import AuthContext from "../store/authContext";
import ProjectContext from "../store/projectContext";

import logo from "../assetts/by_the_hr_logo.png";

import classes from "./Header.module.css";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const projectCtx = useContext(ProjectContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const showNewProjBtn = projectCtx.showNewProjBtn;

  const logoutHandler = () => {
    authCtx.setIsLoggedIn(false);
  };

  const newProjectHandler = () => {
    projectCtx.setIsAddingNew(true)
    projectCtx.setShowNewProjBtn(false)
  }

  return (
    <>
      <div className={classes.header}>
        <img src={logo} alt="" />
        {isLoggedIn && (
          <div className={classes.userReadOut}>
            <h1>{authCtx.firstName ? authCtx.firstName : "User"}</h1>
            <h2 onClick={logoutHandler}>Logout</h2>
          </div>
        )}
      </div>
      {isLoggedIn && showNewProjBtn && (
        <div className={classes.btmHeader}>
          <IconContext.Provider value={{ color: "#2D4059", size: "2em" }}>
            <BsPlusLg />
          </IconContext.Provider>
          <h1 onClick={newProjectHandler}>New Project</h1>
        </div>
      )}
    </>
  );
};

export default Header;
