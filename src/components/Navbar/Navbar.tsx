import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const isActiveFunc = (obj: { isActive: boolean }) => {
    return {
        color: obj.isActive ? "gold" : "white"
    }
}

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div>
                <NavLink to={"/"}
                         style={isActiveFunc}>Profile
                </NavLink>
            </div>
            <div>
                <NavLink to={"/messages"}
                         style={isActiveFunc}>Messages
                </NavLink>
            </div>
            <div>
                <NavLink to={"/news"}
                         style={isActiveFunc}>News
                </NavLink>
            </div>
            <div>
                <NavLink to={"/music"}
                         style={isActiveFunc}>Music
                </NavLink>
            </div>
            <div>
                <NavLink to={"/settings"}
                         style={isActiveFunc}>Settings
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;