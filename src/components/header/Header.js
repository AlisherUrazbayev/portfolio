import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.navMenu}>
                <a href="#">Profile</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contact me</a>
            </div>
        </div>
    );
};

export default Header;