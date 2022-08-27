import React from 'react';
import style from './Projects.module.css';
import Project from "./Project";

const Projects = (props) => {
    return (
        <div id="projectSection"  className={style.mainWrapper}>
            <div className={style.container}>
                <div className={style.header}><h3>My projects</h3></div>
                <div className={style.projects}>
                    {props.projects.map((project) => {
                        return <Project key={project.id} name={project.name}
                                        description={project.description} projectUrl={project.projectUrl}
                                        imageUrl={project.imageUrl}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;