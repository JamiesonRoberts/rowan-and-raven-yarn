import React from 'react';
import Head from 'next/head';

export const head = ({ title, description }) => (
    <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
    </Head>
);

