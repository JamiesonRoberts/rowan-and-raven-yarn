import React from "react";

import styles from "../styles/pages/Index.module.css";
import Logo from "../components/Logo";

export default function Custom404() {
    return <div className={styles.layout}>
        <Logo alt="Rowan & Raven Yarn" className={styles.logo}/>
        <div>
            <h1 className={styles.title}>404 - page not found</h1>
        </div>
    </div>
}
