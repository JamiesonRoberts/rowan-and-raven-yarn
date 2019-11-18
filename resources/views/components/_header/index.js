import React from 'react';
import Link from 'next/link';

import Logo from 'views/components/logo';

import styles from './styles.css';

export default () => {

    const LogoLink = React.forwardRef(({ onClick, href }, ref) => (
        <a href={href} onClick={onClick} ref={ref}>
            <Logo/>
        </a>
    ));

    const navLinks = [
        'Home',
        'About',
        'Shop',
    ];

    return (
        <header className={styles.outer}>
            <div className={styles.container}>
                <Link href="/">
                    <LogoLink/>
                </Link>
                <nav>
                    {navLinks.map((value, index) => {
                        return <Link key={index} href={value}>{value}</Link>;
                    })}
                </nav>
            </div>
        </header>
    );
}
