import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

export default ({ canViewCart }) => (
    <div className={
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
                id={'cart'}
                className={styles.cart}
            >
                Cart!
            </div>
        </div>
    </div>
);
