import React from 'react';

import { layout } from '../layouts/siteLayout';
import { meta } from './_head';

import ComingSoon from '../components/comingSoon';

const Home = () => (<ComingSoon/>);

Home.head = () => meta(
    <title>Rowan & Raven Yarn | Coming Soon</title>,
    <meta name='description' content='Welcome to the home of Rowan & Raven Yarn' />
);

Home.layout = layout;

export default Home;
