import React from 'react';

import styles from './styles.module.css';
import questions from './questions';

const TheForm = () => {
    return (
        <div className={styles.TheForm}>
            <form>
            <ol>
                    {
                        questions.map( (q, index) => {
                            if(q.startsWith('https://')) {
                                return (
                                    <li className={styles.question}>
                                        <div className={styles.questionContainer}>
                                            <input type="checkbox" id={index}/>
                                            <label for={index}>
                                                <a href={q} target="_blank" rel="noopener noreferrer">?</a>
                                            </label>
                                        </div>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className={styles.question}>
                                        <div className={styles.questionContainer}>
                                            <input type="checkbox" id={index}/>
                                            <label for={index}>{q}</label>
                                        </div>
                                    </li>
                                )
                            }
                        })
                    }
                </ol>
            </form>
        </div>
    )
}

export default TheForm;