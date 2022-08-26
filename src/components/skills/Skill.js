import React from 'react';
import style from './Skills.module.css';

const Skill = (props) => {
    return (
        <div className={style.skillBox}>

            <div className={style.skillImage}></div>
            <h4>{props.skill}</h4>
            <span>{props.skillDescription}</span>

        </div>
    );
};

export default Skill;