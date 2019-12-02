import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import DynamicLink from 'views/components/DynamicLink';

import styles from './styles.scss';

const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'About' },
    { name: 'Shop' },
];

export default ({ callback }) => {
    const handleInteraction = () => {
        callback(false);
    };

    return navLinks.map((value, index) => {
        const href = value.link || value.name.toLowerCase();
        return <Link key={index} href={href}>
            <DynamicLink
                key={index}
                ref={index}
                classes={classNames(
                    styles.navItem
                )}
                onClick={handleInteraction}
            >
                {value.name}
            </DynamicLink>
        </Link>;
    });
};
