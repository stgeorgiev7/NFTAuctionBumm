import React from "react";
import styles from "./ExploreTitle.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function ExploreTitle({text}) {

    return (
        <div className={classNames(styles["explore-title"])}>
            <Typography variant={"h1"} className={classNames(styles.text)} children={text} />
        </div> 
    )
};