import React from 'react';
import style from './Skills.module.css';

const Skill = (props) => {
    return (
        <div className={style.skillBox}>
            <img src={props.icon} alt="ssa"/>
            <h4>{props.skill}</h4>
            <span>{props.skillDescription}</span>
        </div>
    );
};

export default Skill;