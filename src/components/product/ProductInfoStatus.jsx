import React from "react";
import styles from "./ProductInfoStatus.module.scss";
import classNames from "classnames";
import {Chip} from "@mui/material";

export default function ProductInfoStatus({isLive}) {

    const liveBadge = <Chip className={classNames(styles["chip"])} label="⬤ LIVE" />

    return (
            <div className={classNames(styles["product-info-status"])}>
                {isLive? liveBadge: <div></div>}
            </div>
    )
};