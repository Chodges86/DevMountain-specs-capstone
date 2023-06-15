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
        <h4>{props.hours}</h4>
      </div>

  );
};

export default ProjectCard;
