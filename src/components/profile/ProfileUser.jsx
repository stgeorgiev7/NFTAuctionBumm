import React from "react";
import styles from "./ProfileUser.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import { Typography } from "@mui/material";

export default function ProfileUser({name, info, avatar, verified, size}) {

    return (
        <div className={classNames(styles["profile-user"])}>
            <Avatar url={avatar} size={size} verified={verified} />
            <Typography variant={"h3"} children={name} className={classNames(styles.typo)}/>
            <Typography variant={"body1"} children={info} className={classNames(styles.typo)} />
        </div>
    )
}