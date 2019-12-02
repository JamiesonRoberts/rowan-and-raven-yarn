import React from 'react';

import styles from './styles.scss';

export default ({ id, active, callback }) => {

    const handleInteraction = () => {
        callback(false);
    };

    return (
        <button
            aria-expanded={active}
            aria-controls={id}
            onClick={handleInteraction}
            className={styles.trayButton}
        >
            &times;
        </button>
    );
}
