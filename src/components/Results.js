import React from 'react';

import styles from './styles.module.css'

const Results = (props) => {
    return (
        <div>
            <h2>Your score:</h2>
            <h1 className={styles.resultNum}>
                {props.score}/{props.total}
            </h1>
            <h3 className={styles.percentage}>
                ({props.score / 1}%) - F
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