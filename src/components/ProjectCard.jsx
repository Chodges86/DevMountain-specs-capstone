import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectContext from "../store/projectContext";

import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const [didNavigate, setDidNavigate] = useState()
  const navigate = useNavigate()

  const projCtx = useContext(ProjectContext)

  useEffect(() =>{
    if(didNavigate) {
      navigate('/project')
    }
  },[didNavigate, navigate])

  const projectClickedHandler = () => {
    console.log(props.id)
    projCtx.setProject(props)
    setDidNavigate(true)
  }

  return (
      <div className={classes.card} onClick={projectClickedHandler}>
        <h1>{props.name}</h1>
        <h2>{props.companyName}</h2>
        <h2>{props.lastDate}</h2>
        <div className={classes.time}>
          <h4>{props.hours < 10 ? `0${props.hours}:` : `${props.hours}:`}</h4>
          <h4>{props.minutes < 10 ? ` 0${props.minutes}:` : ` ${props.minutes}:`}</h4>
          <h4>{props.seconds < 10 ? `0${props.seconds}` : `${props.seconds}`}</h4>
        </div>
      </div>

  );
};

export default ProjectCard;
