import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.navMenu}>
                <a href="#profileSection">Profile</a>
                <a href="#skillsSection">Skills</a>
                <a href="#projectSection">Projects</a>
                <a href="#contactSection">Contact me</a>
            </div>
        </div>
    );
};

export default Header;