import React from 'react';

import styles from './styles.module.css';

const TheForm = (props) => {
    return (
        <div className={styles.TheForm}>
            <form onReset={props.resetTest} onSubmit={props.finishTest}>
            <ol>
                    {
                        props.questions.map( (q, index) => {
                            if(q.startsWith('https://')) {
                                return (
                                    <li className={styles.question} key={index}>
                                        <div className={styles.questionContainer}>
                                            <input 
                                                id={index}
                                                onChange={(e) => props.handleChange(e)}
                                                type="checkbox"
                                            />
                                            <label for={index}>
                                                <a href={q} target="_blank" rel="noopener noreferrer">?</a>
                                            </label>
                                        </div>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className={styles.question} key={index}>
                                        <div className={styles.questionContainer}>
                                            <input 
                                                id={index}
                                                onChange={(e) => props.handleChange(e)}
                                                type="checkbox" 
                                            />
                                            <label for={index}>{q}</label>
                                        </div>
                                    </li>
                                )
                            }
                        })
                    }
                </ol>
                <div className={styles.btnContainer}>
                    <button 
                        type="submit"
                        className={styles.btnStyles}
                    >
                        Calculate My Score!
                    </button>
                    <button
                        type="reset"
                        className={styles.btnStyles}
                    >
                        Clear checkboxes
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TheForm;