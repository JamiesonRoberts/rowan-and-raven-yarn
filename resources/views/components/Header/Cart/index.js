import React from 'react';
import classNames from 'classnames';

import TrayButton from 'views/components/Header/TrayButton';

import styles from './styles.scss';

export default ({ canViewCart, id, callback }) => (
    <div className={
        classNames(
            styles.cartDrawer,
            { [styles.cartOpen]: canViewCart },
        )
    }>
        <div className={styles.container}>
            <div
                id={id}
                className={styles.cart}
            >
                <TrayButton id={id} active={canViewCart} callback={callback}/>
            </div>
        </div>
    </div>
)
