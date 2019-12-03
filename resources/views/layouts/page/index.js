import React from 'react';

import Header from 'views/components/Header';
import Footer from 'views/components/Footer';

import styles from './styles.scss';

const SiteLayout = ({ children }) => [
    <Header key={'header'}/>,
    <div className={styles.layoutGrid}>
        <main
            key={'main'}
            className={styles.main}
        >
            {children}
        </main>
        <Footer key={'footer'}/>
    </div>,
];

export const layout = page => <SiteLayout>{page}</SiteLayout>;
