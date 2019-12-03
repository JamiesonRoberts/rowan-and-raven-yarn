import React from 'react';
import Link from 'next/link';

import SocialLinks from 'views/components/SocialLinks';

import styles from './styles.scss';
import DynamicLink from 'views/components/DynamicLink';
import Logo from 'views/components/Logo';

export default () => (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <Link href="/">
                <DynamicLink classes={styles.footerLogo}><Logo fill={'#FFF'}/></DynamicLink>
            </Link>
            <SocialLinks/>
            <nav className={styles.legalLinks}>
                <Link href={'policies'}>
                    <a className={styles.policyLink}>Shop Policies</a>
                </Link>
                <Link href={'privacy-terms'}>
                    <a className={styles.policyLink}>Privacy & Terms</a>
                </Link>
            </nav>
            <small className={styles.copyrightMessage}>© 2019 Rowan & Raven Yarn</small>
        </div>
    </footer>
)
