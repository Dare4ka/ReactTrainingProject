import React from "react";
import css from "./Link.module.css";

const Link = () => {
    return (
        <li className={css.link}>
             <a href="#">Profile</a>
        </li>
    )
};
export default Link;