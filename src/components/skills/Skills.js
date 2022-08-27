import React from 'react';
import style from './Skills.module.css';
import Skill from "./Skill";

const Skills = (props) => {

    return (
        <div id="skillsSection" className={style.mainWrapper}>
            <div className={style.container}>
                <div className={style.header}><h3>My skills</h3></div>
                <div className={style.skillsContainer}>
                    {props.skills.map((skill) => {
                        return <Skill key={skill.id} skill={skill.name}
                                      skillDescription={skill.description}
                                      icon={skill.icon}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;