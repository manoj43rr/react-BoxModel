import React from 'react';
import styles from './panel.module.css';
import deadImage from './dead.png'; 


function Panel() {
    return (
        <div className={styles.topTab}>
            <div className={styles.logo}>
                <img 
                    src={deadImage} 
                    style={{ borderRadius: '16px', border: '2px groove rgb(35,34,39)' }} 
                    alt="Logo"
                />
            </div>
            <h1 className={styles.HeroTxt}>CSS Box Model Properties</h1>
        </div>
    );
}

export default Panel;

