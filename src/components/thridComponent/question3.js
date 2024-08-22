import React from 'react';
import styles from './question3.module.css';


function Ques3() {
    return (
        <div className={styles.property}>
            <h3 className={styles.sideHeading}><b>Padding</b></h3>
             <p className ={styles.theory}>The padding property defines the space between the element's border and the content.
                We can define the padding property within one line by following the below format
            </p>
        
            <div className = {styles.imp}>
                <p>We can define the padding property within one line by following the below format:<br />
                    <i>padding : top, right, bottom, left; </i><br />
                    Alternatively, we can define each property separately as shown below:
                </p>
            </div>

            <div className = {styles.imp}>
                <p><i>
                    padding-top: xx;
                    <br />padding-right: xx;
                    <br />padding-left: xx;
                    <br />padding-bottom: xx;
                </i></p>
            </div>
        </div>
    );
}

export default Ques3;

