import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ProjectContext from "../store/projectContext";
import classes from "./DeleteWarning.module.css";

import Button from "./FormButton";

const DeleteWarning = (props) => {
    const projCtx = useContext(ProjectContext)
    const { selectedProject } = projCtx
    const navigate = useNavigate()

    const didDeleteHandler = () => {
         axios
      .delete(`http://localhost:4000/project-delete/${selectedProject.id}`)
      .then((res) => {
        projCtx.setShowDeleteWarning(false)
        projCtx.setDidSelectDelete(false)
        navigate("/dash");
      });
    }

  return (
    <div className={classes.backdrop}>
    <div className={classes.warning}>
      <h2>Are you sure you want to delete this project:</h2>
      <h4>Title:</h4>
      <h3>{selectedProject.name}</h3>
      <h4>Current hours spent:</h4>
      <h3>{selectedProject.hours}:{selectedProject.minutes}:{selectedProject.seconds}</h3>
      <h4>Last Date worked on:</h4>
      <h3>{selectedProject.lastDate}</h3>
      <Button
        name="Cancel"
        color="blue"
        type="button"
        onClick={() => projCtx.setShowDeleteWarning(false)}
      />
      <Button
        name="Delete"
        color="#d70000"
        fontColor="#ffffff"
        type="button"
        onClick={didDeleteHandler}
      />
    </div>
    </div>
  );
};

export default DeleteWarning;
