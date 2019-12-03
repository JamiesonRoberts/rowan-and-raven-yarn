import React from 'react';
import classNames from 'classnames';

import NavigationItems from 'views/components/Header/NavigationItems';
import TrayButton from 'views/components/Header/TrayButton';

import styles from './styles.scss';

export default ({ canViewNav, id, callback }) => (
    <div className={
        classNames(
            styles.navDrawer,
            { [styles.navOpen]: canViewNav },
        )
    }>
        <div className={styles.container}>
            <div
                id={id}
                className={styles.navigation}
            >

                <nav
                    id={id}
                    role={'navigation'}
                >
                    <TrayButton id={id} active={canViewNav} callback={callback}/>
                    <NavigationItems callback={callback}/>
                </nav>
            </div>
        </div>
    </div>
)

