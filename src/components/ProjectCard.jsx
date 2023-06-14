import React from "react";

import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
      <div className={classes.card}>
        <h1>{props.name}</h1>
        <h2>{props.companyName}</h2>
        <h2>{props.lastDate}</h2>
        <h4>{props.hours}</h4>
      </div>

  );
};

export default ProjectCard;
