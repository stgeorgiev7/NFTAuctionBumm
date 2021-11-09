import React from "react";
import styles from "./ProductInfoStatus.module.scss";
import classNames from "classnames";

export default function ProductInfoStatus() {

    return (
        <div className={classNames(styles["product-info-status"])}>
            <p className={classNames(styles.status)}>
                <span>•</span> LIVE
            </p>
        </div>

    )
};