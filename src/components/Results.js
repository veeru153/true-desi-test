import React from 'react';

import styles from './styles.module.css'

const Results = (props) => {
    let total = props.total != 0 ? props.total : 1;
    let percentage = Math.floor((props.score / total)*100);
    let grade = "F";
    let comment = <h3>Nikal! Pehli fursat mein nikal!</h3>;
    console.log(props.score, total, props.score / total)

    if(percentage > 60) {
        grade = "D-";
        comment = <img src="https://cdn.discordapp.com/attachments/727483321852100700/727900377223266344/ezgif-2-c80260d829fb.gif" alt="Getting Beaten Up"></img>;
    }
    if(percentage > 65) {
        grade = "D";
    }
    if(percentage > 70) {
        grade = "C-";
        comment = <img src="https://cdn.discordapp.com/attachments/727483321852100700/727930698232627260/thequint_2015-12_88ece578-6541-4eba-972e-ace6cbac00c0_vggre.gif" alt="Don't Angry Me"></img>;
    }
    if(percentage > 75) {
        grade = "C";
    }
    if(percentage > 80) {
        grade = "B-";
        comment = <img src="https://66.media.tumblr.com/b3155c64aad3055877356e0aaffe3881/tumblr_o5sq4e9l9C1rhwgkjo1_250.gifv" alt="Dramatic Staring Scene"></img>
    }
    if(percentage > 85) {
        grade = "B";
        comment = <img src="https://i.gifer.com/7Egy.gif" alt="Kajol Hai Bhagwan"></img>
    }
    if(percentage > 90) {
        grade = "A-";
        comment = <img src="https://thumbs.gfycat.com/CrazyFlickeringIndianskimmer-small.gif" alt="Hrithik Okay Hand"></img>
    }
    if(percentage > 95) {
        grade = "A";
        comment = <img src="https://thumbs.gfycat.com/UnawareKeenLarva-size_restricted.gif" alt="Thaliava Salute"></img>
    } 
    if(percentage == 99) comment = <h3>You got 99%? Where did the extra 1% go!?</h3>
    if(percentage == 100) comment = <img src="https://cdn.discordapp.com/attachments/727483321852100700/727934556065497148/ezgif-2-e07a041f6cb7.gif" alt="Sachin 100"></img>

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
                {comment}
            </div>
            <p></p>
            <div className={styles.btnContainer}>
                <button 
                    onClick={props.redoTest} 
                    className={styles.btnStyles}
                    style={{ margin: 'auto' }}
                >Redo</button>
            </div>
        </div>
    )
}

export default Results;