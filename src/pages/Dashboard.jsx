import React from "react";
import ProjectCard from "../components/ProjectCard";

import classes from "./Dashboard.module.css";

const DUMMY_PROJECTS = [
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
  },
];

const UserPortal = () => {

    const calcHeight = (DUMMY_PROJECTS.length / 4) * 200

  return (
    <div className={classes.parentContainer}>
        <div style={{ height: calcHeight }} className={classes.container}>
      {DUMMY_PROJECTS.map((project) => (
        <ProjectCard
          name={project.projectName}
          companyName={project.companyName}
          lastDate={project.lastDate}
          hours={project.hours}
        />
      ))}
    </div>
    </div>
  );
};

export default UserPortal;
