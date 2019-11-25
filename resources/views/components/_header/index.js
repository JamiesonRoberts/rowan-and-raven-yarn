import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/pro-regular-svg-icons';

import Logo from 'views/components/logo';
import styles from './styles.scss';

export default () => {
    const [canViewNav, setCanViewNav] = useState(false);
    const [canViewCart, setCanViewCart] = useState(false);

    useEffect(() => {
        if (canViewNav) setCanViewCart(false);
    }, [canViewNav]);

    useEffect(() => {
        if (canViewCart) setCanViewNav(false);
    }, [canViewCart]);

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
                <nav
                    className={classNames(
                        styles.navigation,
                        { [styles.navOpen]: canViewNav },
                    )}
                    id={'menu'}
                    role={'navigation'}
                >
                    {navLinks.map((value, index) => {
                        return <Link key={index} href={value}>{value}</Link>;
                    })}
                </nav>
                <div
                    id={'cart'}
                    className={classNames(
                        styles.cart,
                        { [styles.cartOpen]: canViewCart },
                    )}
                >
                    Cart!
                </div>
                <div className={styles.navIcons}>
                    <button
                        aria-expanded={canViewCart}
                        aria-controls={'cart'}
                        onClick={() => setCanViewCart(!canViewCart)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </button>
                    <button
                        aria-expanded={canViewNav}
                        aria-controls={'menu'}
                        onClick={() => setCanViewNav(!canViewNav)}
                    >
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </div>
        </header>
    );
}
