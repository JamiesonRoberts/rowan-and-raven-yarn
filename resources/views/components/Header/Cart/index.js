import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';
import TrayButton from 'views/components/Header/TrayButton';

export default ({ canViewCart, id, callback }) => (
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
                id={id}
                className={styles.cart}
            >
                <TrayButton id={id} active={canViewCart} callback={callback}/>
            </div>
        </div>
    </div>
)
