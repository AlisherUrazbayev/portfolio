import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.mainWrapper}>
            <div className={style.container}>
                <h3>Alisher Urazbayev</h3>
                <div className={style.socialNetworkContainer}>
                    <div className={style.socialNetworkLink}>Link</div>
                    <div className={style.socialNetworkLink}>Link</div>
                    <div className={style.socialNetworkLink}>Link</div>
                    <div className={style.socialNetworkLink}>Link</div>
                </div>
                <h3>@2022 All rights reserved</h3>
            </div>
        </div>
    );
};

export default Footer;