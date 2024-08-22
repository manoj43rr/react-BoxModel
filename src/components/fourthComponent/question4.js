import React from 'react';
import styles from './question4.module.css';


function Ques4() {
    return (
        <div className ={styles.property}>
            <h3 className={styles.sideHeading}><b>Border</b></h3>
            <p className={styles.theory}>The border property defines the border around the padding and content.</p>

            <div className ={styles.imp}>
                <p>We can define the border property within one line by following the below format: <br />
                    <i>border : top, right, bottom, left; </i><br />
                    Alternatively, we can define each property separately as shown below:
                </p>
            </div>

            <div className = {styles.imp}>
                <p><i>
                    border-top: xx;
                    <br />border-right: xx;
                    <br />border-left: xx;
                    <br />border-bottom: xx;
                </i></p>
            </div>

            <div className = {styles.imp}>
                <p>The border has one more property - "Border-radius"<br />
                The border radius property makes the border of the element in the form of round or smooth corners.<br />
                It is achieved by the following command :<br />
                <i>Border-radius : xx;</i></p>
            </div>
        </div>
    );
}

export default Ques4;

