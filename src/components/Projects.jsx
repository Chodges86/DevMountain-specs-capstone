import ProjectCard from "./ProjectCard";

import classes from './Projects.module.css'

const Projects = ({projects}) => {
    return (
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
    )
}

export default Projects;