import React from 'react';
import style from './Projects.module.css';

const Project = (props) => {
    return (
        <div className={style.projectBox}>
            <div className={style.projectImage}>{props.imageUrl}</div>
            <a href={props.projectUrl}>Check</a>
            <h4>{props.name}</h4>
            <span>{props.description}</span>
        </div>
    );
};

export default Project;