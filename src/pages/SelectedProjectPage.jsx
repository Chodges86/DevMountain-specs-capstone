import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProjectContext from "../store/projectContext";

import { IconContext } from "react-icons";
import { HiOutlinePencil } from "react-icons/hi";

import classes from "./SelectedProjectPage.module.css";
import Button from "../components/FormButton";

const SelectedProject = () => {
  const projCtx = useContext(ProjectContext);
  const { selectedProject } = projCtx;
  const [seconds, setSeconds] = useState(selectedProject.seconds);
  const [minutes, setMinutes] = useState(selectedProject.minutes);
  const [hours, setHours] = useState(selectedProject.hours);
  
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (timerIsRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev+1)
      }, 1)
    } 
    if (seconds === 60) {
      setSeconds(0)
      setMinutes((prev) => prev + 1)
    }
    if (minutes === 60) {
      setMinutes(0)
      setHours((prev) => prev+1)
    }
    return () => clearInterval(timer)
  }, [timerIsRunning, minutes, seconds]);


  const stopHandler = () => {
    console.log("Stop");
    setTimerIsRunning(false);
    const body = {
      seconds,
      minutes,
      hours
    }
    axios.put(`http://localhost:4000/project/${selectedProject.id}`, body)
  };

  const startHandler = () => {
    console.log("Start");
    setTimerIsRunning(true);
  };

  const editTimeHandler = () => {
    console.log("Edit Time");
  };

  return (
    <div>
      <h1>{selectedProject.name}</h1>
      <h2>{selectedProject.companyName}</h2>
      <div className={classes.time}>
        <h3>{hours < 10 ? `0${hours} :` : `${hours} :`}</h3>
        <h3>{minutes < 10 ? `0${minutes} :` : `${minutes} :`}</h3>
        <h3>{seconds < 10 ? `0${seconds}` : `${seconds}`}</h3>
        <IconContext.Provider value={{ color: "#FF5722" }}>
          <HiOutlinePencil onClick={editTimeHandler} />
        </IconContext.Provider>
      </div>
      <div className={classes.buttons}>
        {timerIsRunning ? <Button
          name="Stop"
          type="button"
          color="#EEEEEE"
          fontColor="#2D4059"
          onClick={stopHandler}
        />
        :
        <Button
          name="Start"
          type="button"
          color="blue"
          onClick={startHandler}
        />}
      </div>
    </div>
  );
};

export default SelectedProject;
