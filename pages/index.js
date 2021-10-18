import React from 'react';

import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faRavelry
} from "@fortawesome/free-brands-svg-icons";
import Tagline from "../components/Tagline";
import Head from "next/head";

const Index = () => (
    <>
        <Head>
            <title key={'title'}>Rowan & Raven Yarn | Every colour has a
                story</title>,
            <meta name="description"
                  content="Hand dyed yarn from London, Ontario, Canada."/>,
            <meta name="title"
                  content="Rowan & Raven Yarn | Every colour has a story"/>,
            <meta property="og:type" content="website"/>,
            <meta property="og:url" content="https://rowanandravenyarn.ca"/>,
            <meta property="og:title"
                  content="Rowan & Raven Yarn | Every colour has a story"/>,
            <meta property="og:description"
                  content="Hand dyed yarn from London, Ontario, Canada."/>,
            <meta property="og:image"
                  content="/metaImage.jpg"/>,
            <meta property="twitter:card" content="summary_large_image"/>,
            <meta property="twitter:url"
                  content="https://rowanandravenyarn.ca"/>,
            <meta property="twitter:title"
                  content="Rowan & Raven Yarn | Every colour has a story"/>,
            <meta property="twitter:description"
                  content="Hand dyed yarn from London, Ontario, Canada."/>,
            <meta property="twitter:image"
                  content="/metaImage.jpg"/>
        </Head>
        <main>
            <div>
                <Logo alt="Rowan & Raven Yarn"/>
                <div>
                    <a href="https://www.instagram.com/rowanandravenyarn/"
                       rel="noopener"
                       target="_blank">
                        <FontAwesomeIcon icon={faInstagram}/>
                        <span>Follow Rowan & Raven Yarn on Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/rowanandravenyarn"
                       rel="noopener" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF}/>
                        <span>Follow Rowan & Raven Yarn on Facebook</span>
                    </a>
                    <a href="https://www.ravelry.com/people/Rustierose"
                       rel="noopener" target="_blank"
                    >
                        <FontAwesomeIcon icon={faRavelry}/>
                        <span>Follow Rowan & Raven Yarn on Ravelry</span>
                    </a>
                </div>
                <Tagline/>
            </div>
        </main>
    </>
);

export default Index;
