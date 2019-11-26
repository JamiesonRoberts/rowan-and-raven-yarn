import React from 'react';

import { layout } from 'views/layouts/page';
import { meta } from 'views/components/Head';

const Home = () => (<div/>);

Home.head = () => meta([
    <title key={'title'}>Rowan & Raven Yarn | Coming Soon</title>,
    <meta key={'description'} name='description' content='Welcome to the home of Rowan & Raven Yarn' />
]);

Home.layout = layout;

export default Home;
