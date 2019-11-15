import React from 'react';
import { layout } from '../layouts/siteLayout';
import { head } from '../global/seoMeta';

const Home = () => [
    <div className='hero'>
        {/*<Logo/>*/}
    </div>,
];

Home.head = () => head({ title: 'Rowan & Raven Yarn', description: 'Testing this sucker' });

Home.layout = layout;

export default Home;
