import React from 'react';
import styles from './question2.module.css';


function Ques2() {
    return (
        <div className={styles.property}>
            <h3 className={styles.sideHeading}><b>Margins</b></h3>
            <p className={styles.theory}>The margin property is used to define space outside the border of the elements that surround them. The margin has 4 properties:
                left, right, top, and bottom. By providing the required value, we can space the elements that surround them.
            </p>
            <div className={styles.imp}>
                <p>
                    We can define the margin within one line by following the format below:<br />
                    <i>margin: top right bottom left;</i><br />
                    Alternatively, we can define each property separately as shown below:
                </p>
            </div>
            <div className={styles.imp}>
                <p>
                    <i>
                    margin-top: xx;<br/>
                    margin-right: xx;<br/>
                    margin-left: xx;<br/>
                    margin-bottom: xx;
                    </i>
                </p>
            </div>
        </div>
    );
}

export default Ques2;

