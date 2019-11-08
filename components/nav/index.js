import React from 'react';
import Link from 'next/link';

import css from './styles.css';

const links = [
    { href: 'https://zeit.co/now', label: 'ZEIT' },
    { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
});

const Index = () => (
    <nav className={css.nav}>
    </nav>
);

export default Index;
