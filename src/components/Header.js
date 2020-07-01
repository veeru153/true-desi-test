import React from 'react';

import styles from './styles.module.css';
import headerImg from './header.png';

const Header = (props) => {
    return (
        <div className={[styles.Header].join(' ')}>
            <img src={headerImg} alt="header" />
            {props.resultsDisplayed ? (
                <div>
                    <div className={styles.headerText}>
                        <p>The True Desi Test is a parody of the Rice Purity Test.</p>
                        <p>It's a voluntary opportunity for people to test their "desi" tendencies and find out how "desi" they really are.</p>
                    </div>
                    <strong>Caution:</strong>
                </div>
            ) : null}
        </div>
    )
}

export default Header;