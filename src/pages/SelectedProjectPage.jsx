import React, { useContext } from "react";
import ProjectContext from "../store/projectContext";

import { IconContext } from "react-icons";
import { HiOutlinePencil } from "react-icons/hi";

import classes from './SelectedProjectPage.module.css'
import Button from "../components/FormButton";

const SelectedProject = () => {
  const projCtx = useContext(ProjectContext);
  const { selectedProject } = projCtx;

  const stopHandler = () => {
    console.log("Stop")
  }
  const startHandler = () => {
    console.log("Start")
  }

  const editTimeHandler = () => {
    console.log("Edit Time")
  }

  return (
    <div>
      <h1>{selectedProject.name}</h1>
      <h2>{selectedProject.companyName}</h2>
      <div className={classes.time}>
        <h3>{selectedProject.hours}</h3>
        <IconContext.Provider value={{ color: "#FF5722" }}>
          <HiOutlinePencil onClick={editTimeHandler}/>
        </IconContext.Provider>
      </div>
      <div className={classes.buttons}>
        <Button name="Stop" type="button"  color="#EEEEEE" fontColor="#2D4059" onClick={stopHandler} />
        <Button name="Start" type="button" color="blue" onClick={startHandler} />
      </div>
    </div>
  );
};

export default SelectedProject;
