import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import AuthContext from "../store/authContext";

import classes from "./Dashboard.module.css";
import ProjectContext from "../store/projectContext";
import Projects from "../components/Projects";
import AddNewProjectForm from "../components/AddNewProjectForm";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const projectCtx = useContext(ProjectContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [projects, setProjects] = useState([]);
  
  const [timeDidUpdate, setTimeDidUpdate] = useState(false);

  const { isAddingNew } = projectCtx;

  useEffect(() => {
    const prevSelectedProj = localStorage.getItem("projId");
    if (prevSelectedProj) {
      const body = {
        seconds: localStorage.getItem("seconds"),
        minutes: localStorage.getItem("minutes"),
        hours: localStorage.getItem("hours"),
      };
      axios
        .put(`http://localhost:4000/project/${prevSelectedProj}`, body)
        .then((res) => {
          if (res.status === 200) {
            localStorage.clear();
            setTimeDidUpdate(true);
          }
        });
    }
  }, [timeDidUpdate]);

  useEffect(() => {
    if (isLoggedIn && !isAddingNew) {
      projectCtx.setShowBackBtn(false);
      projectCtx.setShowNewProjBtn(true);
      axios
        .get(`http://localhost:4000/get-all-projects/${authCtx.userId}`)
        .then((res) => {
          setProjects(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [authCtx.userId, isLoggedIn, isAddingNew, projectCtx]);


  return (
    <div className={classes.parentContainer}>
      {!isAddingNew && (
       <Projects projects={projects}/>
      )}
      {isAddingNew && (
        <AddNewProjectForm />
      )}
    </div>
  );
};

export default Dashboard;
