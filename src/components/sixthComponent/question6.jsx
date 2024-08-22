import React from 'react';
import styles from './question6.module.css';


function Ques6() {
    return (
        <div className = {styles.property}>
            <h3 className ={styles.sideHeading}><b>Box-Shadow</b></h3>
                <p className = {styles.theory}>This property is used to provide a 3D effect for the element. This property omits a shadow of the element behind, the position of the 
                shadow can be adjusted by two values horizontal-offset and vertical-offset. We also have two other values one for blurring the shadow
                and the other to provide the color for shadow.</p>
        
                <div className={styles.imp}>
                    <p>We can define the Box-shadow property within one line by following the below format:<br />
                    <i>box-shadow : horizontal-offset, vertical-offset, blur, desired-color; </i></p>
                </div>
        </div>
    );
}

export default Ques6;

