import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import AuthContext from "../store/authContext";

import classes from "./Dashboard.module.css";

const DUMMY_PROJECTS = [
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
    id: 1,
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
    id: 2,
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
    id: 3,
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
    id: 4,
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
    id: 5,
  },
  {
    projectName: "Project Title",
    companyName: "Company Name",
    lastDate: "6/9/2023",
    hours: "15:23:30",
    id: 6,
  },
];

const Dashboard = () => {
  const navigate = useNavigate()
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
  
  useEffect(()=> {
    if(!isLoggedIn) {
      navigate('/')
    }
  },[isLoggedIn, navigate])

  return (
    <div className={classes.parentContainer}>
      <div className={classes.container}>
        {DUMMY_PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
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

export default Dashboard;
