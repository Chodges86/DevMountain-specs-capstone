import React, { useContext } from "react";
import ProjectContext from "../store/projectContext";

const SelectedProject = () => {
    const projCtx = useContext(ProjectContext)
    console.log(projCtx.selectedProject)
    return (
        <h1>Selected Project</h1>
    )
};

export default SelectedProject