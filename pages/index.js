import React from 'react';

import {layout} from '../layouts/siteLayout';
import {meta} from '../global/_head';

import ComingSoon from '../components/comingSoon';

const Home = () => (<ComingSoon/>);

Home.head = () => meta([
    <title key={'title'}>Rowan & Raven Yarn | Every colour has a story</title>,
    <meta name="description"
          content="Hand dyed yarn from London, Ontario, Canada."/>,
    <meta name="title" content="Rowan & Raven Yarn | Every colour has a story"/>,
    <meta property="og:type" content="website"/>,
    <meta property="og:url" content="https://rowanandravenyarn.ca"/>,
    <meta property="og:title" content="Rowan & Raven Yarn | Every colour has a story"/>,
    <meta property="og:description"
          content="Hand dyed yarn from London, Ontario, Canada."/>,
    <meta property="og:image"
          content="/metaImage.jpg"/>,
    <meta property="twitter:card" content="summary_large_image"/>,
    <meta property="twitter:url" content="https://rowanandravenyarn.ca"/>,
    <meta property="twitter:title" content="Rowan & Raven Yarn | Every colour has a story"/>,
    <meta property="twitter:description"
          content="Hand dyed yarn from London, Ontario, Canada."/>,
    <meta property="twitter:image"
          content="/metaImage.jpg"/>,
]);

Home.layout = layout;

export default Home;
