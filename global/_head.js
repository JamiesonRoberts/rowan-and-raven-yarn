import React from 'react';
import Head from 'next/head';

const HeadComponent = ({ children }) => (
    <Head>{children}</Head>
);

export const meta = data => <HeadComponent>{data}</HeadComponent>;
