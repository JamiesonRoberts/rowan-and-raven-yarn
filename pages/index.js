import React from 'react';
import Head from 'next/head';

if (typeof window !== 'undefined') {
    const WebFont = require('webfontloader');

    WebFont.load({
        google: {
            families: ['Indie Flower&display=swap'],
        },
    });
}


const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel='icon' href='/favicon.ico'/>
        </Head>

        <div className='hero'>
            <h1 className='title'>Rowan & Raven</h1>
        </div>

        <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: 'Indie Flower', cursive;
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 10px;
        line-height: 1.15;
        font-size: 36px;
        padding-left: 5px
      }
      .title,
      .description {
        text-align: left;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
    </div>
);

export default Home;
