import React from 'react';

import styles from './styles.module.css'

const Results = (props) => {
    let total = props.total != 0 ? props.total : 1;
    let percentage = Math.floor((props.score / total)*100);
    let grade = "F";
    let comment = "Nikal! Pehli fursat mein nikal!";
    console.log(props.score, total, props.score / total)

    if(percentage > 60) {
        grade = "D-";
        comment = "";
    }
    if(percentage > 65) {
        grade = "D";
        // comment
    }
    if(percentage > 70) {
        grade = "C-";
        // comment
    }
    if(percentage > 75) {
        grade = "C";
        // comment
    }
    if(percentage > 80) {
        grade = "B-";
        // comment
    }
    if(percentage > 85) {
        grade = "B";
        // comment
    }
    if(percentage > 90) {
        grade = "A-";
        // comment
    }
    if(percentage > 95) {
        grade = "A";
        // comment
    }

    return (
        <div>
            <h2>Your score:</h2>
            <h1 className={styles.resultNum}>
                {props.score}/{props.total}
            </h1>
            <h3 className={styles.percentage}>
                ({percentage}%) - {grade}
            </h3>
            <div className={styles.reaction}>
                <h3>Bruh!</h3>
            </div>
            <p></p>
            <button onClick={props.redoTest} className={styles.btnStyles}>Redo</button>
        </div>
    )
}

export default Results;