import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';
import DynamicLink from 'views/components/DynamicLink';
import Link from 'next/link';

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

export default ({ canViewNav, id, callback }) => {

    const handleInteraction = () => {
        callback(false)
    };

    return (<div className={
        classNames(
            styles.navDrawer,
            { [styles.navOpen]: canViewNav },
        )
    }>
        <div className={
            classNames(
                'container',
                styles.navContainer,
            )}>
            <div
                id={id}
                className={styles.navigation}
            >

                <nav
                    className={classNames(
                        styles.navigation
                    )}
                    id={id}
                    role={'navigation'}
                >
                    <button
                        onClick={handleInteraction}
                        aria-expanded={canViewNav}
                        aria-controls={id}
                    >
                        &times;
                    </button>
                    <NavigationItems elements={navLinks} classes={styles.navItem}
                                     callback={handleInteraction}/>
                </nav>

            </div>
        </div>
    </div>);
};
