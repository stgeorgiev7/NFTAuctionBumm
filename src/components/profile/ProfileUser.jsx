import React from "react";
import styles from "./ProfileUser.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import { Typography } from "@mui/material";

export default function ProfileUser({name, info, avatar, verified}) {

    return (
        <div className={classNames(styles["profile-user"])}>
            <Avatar url={avatar} verified={verified} />
            <Typography variant={"h3"} children={name} />
            <Typography variant={"body1"} children={info} />
        </div>
    )
}