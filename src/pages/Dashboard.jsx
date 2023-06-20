import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ProjectCard from "../components/ProjectCard";
import AuthContext from "../store/authContext";

import classes from "./Dashboard.module.css";

// const DUMMY_PROJECTS = [
//   {
//     projectName: "Project Title",
//     companyName: "Company Name",
//     lastDate: "6/9/2023",
//     hours: "15:23:30",
//     id: 1,
//   },
//   {
//     projectName: "Project Title",
//     companyName: "Company Name",
//     lastDate: "6/9/2023",
//     hours: "15:23:30",
//     id: 2,
//   },
//   {
//     projectName: "Project Title",
//     companyName: "Company Name",
//     lastDate: "6/9/2023",
//     hours: "15:23:30",
//     id: 3,
//   },
//   {
//     projectName: "Project Title",
//     companyName: "Company Name",
//     lastDate: "6/9/2023",
//     hours: "15:23:30",
//     id: 4,
//   },
//   {
//     projectName: "Project Title",
//     companyName: "Company Name",
//     lastDate: "6/9/2023",
//     hours: "15:23:30",
//     id: 5,
//   },
//   {
//     projectName: "Project Title",
//     companyName: "Company Name",
//     lastDate: "6/9/2023",
//     hours: "15:23:30",
//     id: 6,
//   },
// ];

const Dashboard = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [projects, setProjects] = useState([]) 
  const [isAddingNew, setIsAddingNew] = useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:4000/get-all-projects/${authCtx.userId}`)
      .then((res) => {
        console.log(res.data)
        setProjects([res.data])
      })
      .catch((err) => console.log(err));
  }, [authCtx.userId]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={classes.parentContainer}>
      {!isAddingNew && <div className={classes.container}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.title}
            companyName={project.company_name}
            lastDate={project.last_date}
            hours={project.current_hours}
            minutes={project.current_minutes}
            seconds={project.current_seconds}
          />
        ))}
      </div>}
    </div>
  );
};

export default Dashboard;
