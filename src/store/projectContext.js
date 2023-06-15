import { createContext, useState } from "react";

const ProjectContext = createContext({
    selectedProject: {},
    setProject: () => {}
})

export const ProjectContextProvider = (props) => {
    const [selectedProject, setSelectedProject] = useState()

    const setProject = (project) => {
        console.log("setProject called")
        setSelectedProject(project)
    }

    const contextValue = {
        selectedProject,
        setProject
    }

    return <ProjectContext.Provider value={contextValue}>
        {props.children}
    </ProjectContext.Provider>
}

export default ProjectContext