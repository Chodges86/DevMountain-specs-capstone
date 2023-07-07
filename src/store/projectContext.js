import { createContext, useState } from "react";

const ProjectContext = createContext({
    selectedProject: {},
    setProject: () => {}, 
    isAddingNew: false,
    setIsAddingNew: () => {}
})

export const ProjectContextProvider = (props) => {
    const [selectedProject, setSelectedProject] = useState()
    const [isAddingNew, setIsAddingNew] = useState(false)
    const [showNewProjBtn, setShowNewProjBtn] = useState(true)
    const [showBackBtn, setShowBackBtn] = useState(false)

    const setProject = (project) => {
        console.log("setProject called")
        setSelectedProject(project)
    }

    const contextValue = {
        selectedProject,
        setProject,
        isAddingNew,
        setIsAddingNew,
        showNewProjBtn,
        setShowNewProjBtn,
        showBackBtn,
        setShowBackBtn
    }

    return <ProjectContext.Provider value={contextValue}>
        {props.children}
    </ProjectContext.Provider>
}

export default ProjectContext