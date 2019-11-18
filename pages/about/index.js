import React from 'react';

import { layout } from 'views/layouts/page';
import { meta } from 'views/components/head';

const Home = () => (<div>About Rowan & Raven Yarn</div>);

Home.head = () => meta([
    <title key={'title'}>About | Rowan & Raven Yarn</title>,
    <meta key={'description'} name='description' content='Welcome to the home of Rowan & Raven Yarn' />
]);

Home.layout = layout;

export default Home;
