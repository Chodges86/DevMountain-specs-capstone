import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ProjectCard from "../components/ProjectCard";
import AuthContext from "../store/authContext";

import classes from "./Dashboard.module.css";
import ProjectContext from "../store/projectContext";
import Input from "../components/FormInput";
import Button from "../components/FormButton";

const Dashboard = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const projectCtx = useContext(ProjectContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [projects, setProjects] = useState([]);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newCustomerName, setNewCustomerName] = useState("");
  const [timeDidUpdate, setTimeDidUpdate] = useState(false)

  const { isAddingNew } = projectCtx;

  useEffect(() => {
    const prevSelectedProj = localStorage.getItem("projId");
    if (prevSelectedProj) {
      const body = {
        seconds: localStorage.getItem('seconds'),
        minutes: localStorage.getItem('minutes'),
        hours: localStorage.getItem('hours')
      }
      axios
        .put(`http://localhost:4000/project/${prevSelectedProj}`, body)
        .then(res => {
          if(res.status === 200) {
            localStorage.clear()
            setTimeDidUpdate(true)
          }
        })
    }
  }, [timeDidUpdate]);

  useEffect(() => {
    if (isLoggedIn && !isAddingNew) {
      axios
        .get(`http://localhost:4000/get-all-projects/${authCtx.userId}`)
        .then((res) => {
          setProjects(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [authCtx.userId, isLoggedIn, isAddingNew]);

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
        projectCtx.setIsAddingNew(false);
        projectCtx.setShowNewProjBtn(true);
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
                projectCtx.setIsAddingNew(false);
                projectCtx.setShowNewProjBtn(true);
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
