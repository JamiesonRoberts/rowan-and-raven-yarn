import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faRavelry } from '@fortawesome/free-brands-svg-icons';

import styles from './styles.css';
import Logo from '../logo';

export default () => (
    <main className={styles.container}>
        <div className={styles.message}>
            <Logo className={styles.logo} alt="Rowan & Raven"/>
            <div className={styles.socialList}>
                <a href="https://www.instagram.com/rowanandravenyarn/" rel="noopener"
                   target="_blank" className={styles.socialLink}>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <span className={styles.invisible}>Follow Rowan & Raven Yarn on Instagram</span>
                </a>
                <a href="https://www.ravelry.com/people/Rustierose" rel="noopener" target="_blank"
                   className={styles.socialLink}>
                    <FontAwesomeIcon icon={faRavelry}/>
                    <span className={styles.invisible}>Follow Rowan & Raven Yarn on Ravelry</span>
                </a>
            </div>
            <p>Coming soon</p>
        </div>
    </main>
)
