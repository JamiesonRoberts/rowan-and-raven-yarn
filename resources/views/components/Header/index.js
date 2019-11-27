import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/pro-regular-svg-icons';

import DynamicLink from 'views/components/DynamicLink';
import Logo from 'views/components/Logo';
import Cart from './Cart';
import styles from './styles.scss';

const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'About' },
    { name: 'Shop' },
];


const NavigationItems = ({ elements, callback, classes }) => {
    return elements.map((value, index) => {
        const href = value.link || value.name.toLowerCase();
        return <Link key={index} href={href}>
            <DynamicLink
                key={index}
                ref={index}
                classes={classNames(classes)}
                onClick={callback}
            >
                {value.name}
            </DynamicLink>
        </Link>;
    });
};

const Navigation = ({ children, canViewNav }) => (
    <nav
        className={classNames(
            styles.navigation,
            { [styles.navOpen]: canViewNav },
        )}
        id={'menu'}
        role={'navigation'}
    >
        {children}
    </nav>
);

export default () => {
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
                <nav>
                    main desktop nav goes here <br/>
                    no ssr component
                </nav>
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
            <div>
                mobile nav <br/>
                no ssr component

            </div>
            <Cart canViewCart={canViewCart} callback={state => setCanViewCart(state)}/>
            <div>
                <Navigation canViewNav={canViewNav}>
                    <NavigationItems elements={navLinks} classes={styles.navItem}
                                     callback={resetTrays}/>
                </Navigation>

            </div>
        </header>
    );
}
