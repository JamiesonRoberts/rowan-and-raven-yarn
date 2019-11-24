import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

import Logo from 'views/components/logo';
import styles from './styles.css';

export default ({
    menuOpen = false
} = {}) => {

    const LogoLink = React.forwardRef(({ onClick, href }, ref) => (
        <a href={href} onClick={onClick} ref={ref} className={styles.logo}>
            <Logo className={styles.logoImage}/>
        </a>
    ));

    const navLinks = [
        'Home',
        'About',
        'Shop',
    ];

    return (
        <header className={styles.outer}>
            <div className={classNames(
                'container',
                styles.container,
            )}>
                <Link href="/">
                    <LogoLink/>
                </Link>
                <nav className={styles.navigation}>
                    {navLinks.map((value, index) => {
                        return <Link key={index} href={value}>{value}</Link>;
                    })}
                </nav>
                <div className={styles.navIcons}>
                    <Link>
                        <FontAwesomeIcon icon={faUser}/>
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </Link>
                    <button>Menu</button>
                </div>
            </div>
        </header>
    );
}
