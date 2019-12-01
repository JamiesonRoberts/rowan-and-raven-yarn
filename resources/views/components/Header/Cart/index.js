import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

export default ({ canViewCart, id, callback }) => {

    const handleInteraction = () => {
        callback(false)
    };

    return (<div className={
        classNames(
            styles.cartDrawer,
            { [styles.cartOpen]: canViewCart },
        )
    }>
        <div className={
            classNames(
                'container',
                styles.cartContainer,
            )}>
            <div
                id={id}
                className={styles.cart}
            >
                Cart!

                <button
                    onClick={handleInteraction}
                    aria-expanded={canViewCart}
                    aria-controls={id}
                >
                    &times;
                </button>
            </div>
        </div>
    </div>);
};
