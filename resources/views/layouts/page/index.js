import React from 'react';

import Header from 'views/components/Header';
import Footer from 'views/components/Footer';
import Container from 'views/components/Container';

const SiteLayout = ({ children }) => [
    <Header key={'header'}/>,
    <main key={'main'}>
        <Container>
            {children}
        </Container>
    </main>,
    <Footer key={'footer'}/>,
];

export const layout = page => <SiteLayout>{page}</SiteLayout>;
