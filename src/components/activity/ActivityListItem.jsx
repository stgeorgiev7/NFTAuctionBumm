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
            <Avatar url={user?.avatar?.url} size={user?.avatar?.size} verified={user?.confirmed} />
            <p>{user?.name} {type === "like" ? "liked" : "bought"} 
               <Link href={"https://www.google.com/"}>{nft?.name}</Link>  by <Link href={"https://www.google.com/"}>{nft?.owner?.username}</Link>  </p>
            <p>{formatDate(created_at)} ago</p>
        </div>
    )
}