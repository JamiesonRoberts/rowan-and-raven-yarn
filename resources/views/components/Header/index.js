import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/pro-regular-svg-icons';

import Logo from 'views/components/Logo';
import styles from './styles.scss';

const DynamicLink = React.forwardRef(({ onClick, href, children, classes }, ref) => (
    <a href={href} onClick={onClick} ref={ref} className={classes}>
        {children}
    </a>
));

export default ({ cart = { size: 0 } } = {}) => {
    const [canViewNav, setCanViewNav] = useState(false);
    const [canViewCart, setCanViewCart] = useState(false);

    const resetTrays = () => {
        setCanViewCart(false);
        setCanViewNav(false);
    };

    useEffect(() => {
        if (canViewNav) setCanViewCart(false);
    }, [canViewNav]);

    useEffect(() => {
        if (canViewCart) setCanViewNav(false);
    }, [canViewCart]);

    // replace with fetch to shopify navigation
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'About' },
        { name: 'Shop' },
    ];

    return (
        <header className={classNames(
            styles.outer,
            { [styles.trayOpen]: canViewNav || canViewCart },
        )}>
            <div className={classNames(
                'container',
                styles.container,
            )}>
                <Link href="/">
                    <DynamicLink onClick={resetTrays}><Logo/></DynamicLink>
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
                        const href = value.link || value.name.toLowerCase();
                        return <Link key={index} href={href}>
                            <DynamicLink
                                onClick={resetTrays}
                                key={index}
                                ref={index}
                                classes={styles.navItem}
                            >
                                {value.name}
                            </DynamicLink>
                        </Link>;
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
                        className={classNames(
                            styles.navButton,
                            { [styles.active]: canViewCart },
                        )}
                    >
                        <FontAwesomeIcon icon={faShoppingCart}/>
                        <span className={'invisible'}>Cart</span>
                    </button>
                    <button
                        aria-expanded={canViewNav}
                        aria-controls={'menu'}
                        onClick={() => setCanViewNav(!canViewNav)}
                        className={classNames(
                            styles.navButton,
                            { [styles.active]: canViewNav },
                        )}
                    >
                        <FontAwesomeIcon icon={faBars}/>
                        <span className={'invisible'}>Menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
