import React from "react";
import styles from "./ProductInfoStatus.module.scss";
import classNames from "classnames";

export default function ProductInfoStatus({isLive}) {

    const liveBadge = <p className={classNames(styles["product-info-status"])} >
        <span className={classNames(styles.status)}>•</span> LIVE
    </p>

    return (
            <div>
                {isLive? liveBadge: <div></div>}
            </div>
    )
};