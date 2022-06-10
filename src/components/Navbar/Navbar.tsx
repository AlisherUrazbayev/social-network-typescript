import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.item}>
                <a href="#">Profile</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a href="#">Messages</a>
            </div>
            <div className={styles.item}>
                <a href="#">News</a>
            </div>
            <div className={styles.item}>
                <a href="#">Music</a>
            </div>
            <div className={styles.item}>
                <a href="#">Settigns</a>
            </div>
        </div>
    );
}

export default Navbar;