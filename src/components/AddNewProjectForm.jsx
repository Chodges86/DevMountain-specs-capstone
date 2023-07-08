import { useContext, useState } from "react";
import axios from "axios";
import Input from "./FormInput";
import Button from "./FormButton";

import classes from "./AddNewProjectForm.module.css";
import ProjectContext from "../store/projectContext";
import AuthContext from "../store/authContext";

const AddNewProjectForm = (props) => {
  const authCtx = useContext(AuthContext);
  const projectCtx = useContext(ProjectContext);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newCustomerName, setNewCustomerName] = useState("");

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

  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <Input
          name="Project Title"
          id="project_title"
          type="text"
          handler={(value) => setNewProjectTitle(value)}
          value={newProjectTitle}
        ></Input>
        <Input
          name="Customer"
          id="customer-name"
          type="text"
          handler={(value) => setNewCustomerName(value)}
          value={newCustomerName}
        ></Input>
        <div className={classes.buttons}>
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
        </div>
      </form>
    </div>
  );
};

export default AddNewProjectForm;
