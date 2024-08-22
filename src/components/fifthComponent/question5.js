import React from 'react';
import styles from './question5.module.css';


function Ques5() {
    return (
        <div className= {styles.property}>
            <h3 className={styles.sideHeading}><b>Width & Height</b></h3>
            <p className = {styles.theory}>The width & Height property defines the width & height of the element.</p>
            <p className = {styles.imp}>It is done as below<br />
            <i> 
                width: xx;
                <br />Height: xx;
            </i></p>
        </div>
    );
}

export default Ques5;

