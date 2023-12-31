import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProjectContext from "../store/projectContext";

import { IconContext } from "react-icons";
import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash3 } from "react-icons/bs";

import classes from "./SelectedProjectPage.module.css";
import Button from "../components/FormButton";
import { useNavigate } from "react-router-dom";
import DeleteWarning from "../components/DeleteWarning";

const SelectedProject = () => {
  const navigate = useNavigate();
  const projCtx = useContext(ProjectContext);
  const { selectedProject } = projCtx;
  const [seconds, setSeconds] = useState(selectedProject.seconds);
  const [minutes, setMinutes] = useState(selectedProject.minutes);
  const [hours, setHours] = useState(selectedProject.hours);
  const [isEditing, setIsEditing] = useState(false);
  const [editedHours, setEditedHours] = useState(hours);
  const [editedMinutes, setEditedMinutes] = useState(minutes);
  const [editedSeconds, setEditedSeconds] = useState(seconds);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  


  useEffect(() => {
    projCtx.setShowBackBtn(true)
    projCtx.setShowNewProjBtn(false)
    let timer;
    if (timerIsRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prev) => prev + 1);
    }
    if (minutes === 60) {
      setMinutes(0);
      setHours((prev) => prev + 1);
    }
    localStorage.setItem("seconds", seconds)
    localStorage.setItem("minutes", minutes)
    localStorage.setItem("hours", hours)

    return () => clearInterval(timer);
  }, [timerIsRunning, hours, minutes, seconds, projCtx]);

  const stopHandler = () => {
    console.log("Stop");
    setTimerIsRunning(false);
    const body = {
      seconds,
      minutes,
      hours,
    };
    axios.put(`http://localhost:4000/project/${selectedProject.id}`, body);
  };

  const startHandler = () => {
    setTimerIsRunning(true);
  };

  const editButtonClicked = () => {
    setIsEditing(true);
  };
  const editHourHandler = (e) => {
    setEditedHours(+e.target.value);
  };
  const editMinHandler = (e) => {
    setEditedMinutes(+e.target.value);
  };
  const editSecHandler = (e) => {
    setEditedSeconds(+e.target.value);
  };

  const saveEditHandler = (e) => {
    e.preventDefault();
    const body = {
      seconds: editedSeconds,
      minutes: editedMinutes,
      hours: editedHours,
    };
    axios
      .put(`http://localhost:4000/project/${selectedProject.id}`, body)
      .then((res) => {
        setHours(editedHours);
        setMinutes(editedMinutes);
        setSeconds(editedSeconds);
        setIsEditing(false);
      });
  };

  const projectDeleteHandler = () => {
    projCtx.setShowDeleteWarning(true)
   
  };

  return (
    <div>
      {projCtx.showDeleteWarning && <DeleteWarning />}
      <h1>{selectedProject.name}</h1>
      <h2>{selectedProject.companyName}</h2>
      {!isEditing ? (
        <div>
          <div className={classes.time}>
            <h3>{hours < 10 ? `0${hours} :` : `${hours} :`}</h3>
            <h3>{minutes < 10 ? `0${minutes} :` : `${minutes} :`}</h3>
            <h3>{seconds < 10 ? `0${seconds}` : `${seconds}`}</h3>
            <IconContext.Provider value={{ color: "#FF5722" }}>
              <HiOutlinePencil onClick={editButtonClicked} />
            </IconContext.Provider>
          </div>
          <div className={classes.buttons}>
            {timerIsRunning ? (
              <Button
                name="Stop"
                type="button"
                color="#EEEEEE"
                fontColor="#2D4059"
                onClick={stopHandler}
              />
            ) : (
              <Button
                name="Start"
                type="button"
                color="blue"
                onClick={startHandler}
              />
            )}
          </div>
          <IconContext.Provider value={{ color: "#FF5722" }}>
            <BsTrash3 onClick={projectDeleteHandler} />
          </IconContext.Provider>
        </div>
      ) : (
        <div>
          <form className={classes.form}>
            <div>
              <input
                type="number"
                onChange={editHourHandler}
                placeholder={hours}
              />
              :
              <input
                type="number"
                onChange={editMinHandler}
                placeholder={minutes}
              />
              :
              <input
                type="number"
                onChange={editSecHandler}
                placeholder={seconds}
              />
            </div>
            <Button
              name="Save"
              type="submit"
              color="blue"
              onClick={saveEditHandler}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default SelectedProject;
