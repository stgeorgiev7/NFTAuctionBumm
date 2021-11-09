import React from "react";
import { useState } from "react";
import styles from './ProductInfoTitle.module.scss'
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function ProductInfoTitle({title}) {

    const [crrTitle, setTitle] = useState(title.toString());

    return (
        <div className={classNames(styles["product-info-title"])}>
            <Typography className={classNames(styles.title)} variant='h1'>
                {crrTitle}    
            </Typography>
        </div>
    )
};