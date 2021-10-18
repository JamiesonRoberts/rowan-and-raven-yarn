import React from 'react';
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faRavelry,
} from "@fortawesome/free-brands-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";

import Logo from "../components/Logo";
import styles from "../styles/pages/Index.module.css";

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
            <div className={styles.layout}>
                <Logo alt="Rowan & Raven Yarn" className={styles.logo}/>
                <div>
                    <h1 className={styles.title}>Rowan &amp; Raven Yarn is now
                        closed indefinitely.</h1>
                    <p>Nadia may be around on Instagram from time to time by
                        that name if you’d like to stay in touch :) So long and
                        thanks for all the fish!</p>
                    <p>~Nadia, founder and owner of Rowan & Raven Yarn</p>
                    <div className={styles.linkList}>
                        <a href="https://www.instagram.com/rowanandravenyarn/"
                           rel="noopener"
                           target="_blank"
                        >
                            <FontAwesomeIcon icon={faInstagram}/>
                            <span className={styles.invisible}>Visit Rowan & Raven Yarn on Instagram</span>
                        </a>
                        <a href="https://www.facebook.com/rowanandravenyarn"
                           rel="noopener"
                           target="_blank"
                        >
                            <FontAwesomeIcon icon={faFacebookF}/>
                            <span className={styles.invisible}>Visit Rowan & Raven Yarn on Facebook</span>
                        </a>
                        <a href="https://www.ravelry.com/people/Rustierose"
                           rel="noopener"
                           target="_blank"
                        >
                            <FontAwesomeIcon icon={faRavelry}/>
                            <span className={styles.invisible}>Visit Rowan & Raven Yarn on Ravelry</span>
                        </a>
                        <a href="https://linktr.ee/Rowanandravenyarn"
                           rel="noopener"
                           target="_blank"
                        >
                            <FontAwesomeIcon icon={faTree}/>
                            <span className={styles.invisible}>Visit Rowan and Raven Yarn on Linktr.ee</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </>
);

export default Index;
