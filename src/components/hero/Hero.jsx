import React from "react";
import styles from "./Hero.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function Hero({ text }) {

    return (
        <div className={classNames(styles.hero)}>
            <Typography variant={"h1"}>{ text } </Typography> 
        </div>
    )
};