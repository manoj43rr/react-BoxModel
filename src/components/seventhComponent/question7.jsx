import React from 'react';
import styles from './question7.module.css';


function Ques7() {
    return (
        <div className = {styles.property}>
            <h3 className = {styles.sideHeading}><b>Box-sizing</b></h3>
                <p class = {styles.theory}>This property Determines whether padding and border are included in the element's total width and height. It has two values content-box
                and border-box where the content-box is default.</p>
        
                <div className = {styles.imp}>
                    <p>
                    Using the default value, When a box is of size 200x100 then adding properties like border and padding to the box it adds them keeping 
                    the box size 200x100 as same. But when using the border-box value, the padding and border properties are alloted using the size of the
                    box.
                    </p>
            </div>    
        </div>
    );
}

export default Ques7;

