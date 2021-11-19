import React from "react";
import styles from "./ProfileHero.module.scss";
import classNames from "classnames";

export default function ProfileHero({image}) {

    return (
        <div className={classNames(styles["profile-hero"])}>
            <img src={image} className={classNames(styles["image"])}></img>
        </div>
    )
}