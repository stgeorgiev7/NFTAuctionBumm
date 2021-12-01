import React from "react";
import styles from "./ActivityListItem.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import Link from 'next/link';
import { formatDistance } from "date-fns";
import { parseISO } from "date-fns";

export default function ActivityListItem({ user, created_at, nft, type = "like" }) {

    const formatDate = (crrDate) => {
        const data = parseISO(crrDate)
        return formatDistance(data, new Date())
    };


    return (
        <div className={classNames(styles.activityList)}>
            <div className={classNames(styles.avatar)}>
                <Avatar url={user?.avatar?.url} size={55} verified={user?.confirmed} />
            </div>
            <div className={classNames(styles.info)}>
            <p className={classNames(styles["auction-info"])}>{user?.name} {type === "like" ? "liked" : "bought"}
                <Link href={"https://www.google.com/"}>{nft?.name}</Link>  by <Link href={"https://www.google.com/"}>{nft?.owner?.username}</Link>  </p>
            <p className={classNames(styles.time)}>{formatDate(created_at)} ago</p>
            </div>
        </div>
    )
}