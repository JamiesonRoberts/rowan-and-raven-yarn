import React from 'react';

import Header from 'views/components/_header';
import Footer from 'views/components/_footer';

const SiteLayout = ({ children }) => [
    <Header/>,
    <main>{children}</main>,
    <Footer/>,
];

export const layout = page => <SiteLayout>{page}</SiteLayout>;
