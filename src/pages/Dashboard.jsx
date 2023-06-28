import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ProjectCard from "../components/ProjectCard";
import AuthContext from "../store/authContext";

import classes from "./Dashboard.module.css";
import ProjectContext from "../store/projectContext";
import Input from "../components/FormInput";
import Button from "../components/FormButton";

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
  const projectCtx = useContext(ProjectContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [projects, setProjects] = useState([]);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newCustomerName, setNewCustomerName] = useState("");

  const { isAddingNew } = projectCtx;

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get(`http://localhost:4000/get-all-projects/${authCtx.userId}`)
        .then((res) => {
          // const dates = res.data.sort((a,b) => {
          //   Date.parse(b.last_date) - Date.parse(a.last_date)
          // })
          // console.log(dates)
          setProjects(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [authCtx.userId, isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      userId: authCtx.userId,
      projectTitle: newProjectTitle,
      customerName: newCustomerName,
    };
    axios
      .post(`http://localhost:4000/project`, body)
      .then((res) => {
        console.log(res.data);
        projectCtx.setIsAddingNew(false);
      })
      .catch((err) => console.log(err));
  };

  const setProjectTitleHandler = (value) => {
    setNewProjectTitle(value);
  };

  const setCustomerNameHandler = (value) => {
    setNewCustomerName(value);
  };

  return (
    <div className={classes.parentContainer}>
      {!isAddingNew && (
        <div className={classes.container}>
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
        </div>
      )}
      {isAddingNew && (
        <div className={classes.form}>
          <form onSubmit={submitHandler}>
            <Input
              name="Project Title"
              id="project_title"
              type="text"
              handler={setProjectTitleHandler}
              value={newProjectTitle}
            ></Input>
            <Input
              name="Customer Name"
              id="customer-name"
              type="text"
              handler={setCustomerNameHandler}
              value={newCustomerName}
            ></Input>
            <Button
              name="Cancel"
              color="white"
              type="button"
              onClick={() => {
                projectCtx.setIsAddingNew(false)
                projectCtx.setShowNewProjBtn(true)
              }}
            ></Button>
            <Button name="Add" color="blue" type="submit"></Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
