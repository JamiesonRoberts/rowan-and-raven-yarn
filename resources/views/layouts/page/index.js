import React from 'react';

import Header from 'views/components/Header';
import Footer from 'views/components/_footer';

const SiteLayout = ({ children }) => [
    <Header key={'header'}/>,
    <main key={'main'}>{children}</main>,
    <Footer key={'footer'}/>,
];

export const layout = page => <SiteLayout>{page}</SiteLayout>;
