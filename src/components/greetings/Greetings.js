import React, {useState} from 'react';
import style from './Greetings.module.css';

const Greetings = () => {

    return (
        <div id="profileSection" className={style.mainWrapper}>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <p>Hello</p>
                    <h2>Alisher Urazbayev</h2>
                    <p>I am a front-end developer</p>
                </div>
                <div className={style.avatarContainer}></div>
            </div>
        </div>
    );
};

export default Greetings;