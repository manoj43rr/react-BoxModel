import React from 'react';
import styles from './question1.module.css';


function Ques1() {
    return (
        <div className={styles.EntryQues}>
            <p className={styles.Question} style={{fontSize: 'large'}}>What are Box Model Properties?</p>
            <p className={styles.Answer}>The CSS Box Model is a fundamental concept that describes the rectangular boxes generated for elements in the 
            document tree and governs how elements are rendered on the page. Understanding the box model is crucial for effective layout 
            design in CSS.</p>
        </div>
    );
}

export default Ques1;

