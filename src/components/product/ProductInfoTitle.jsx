import React from "react";
import { useState } from "react";
import styles from './ProductInfoTitle.module.scss'
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function ProductInfoTitle ({text}) {

    const [crrTitle, setTitle] = useState(text.toString());

    return (
        <div className={classNames(styles["product-info-title"])}>
            <Typography className={classNames(styles.title)} variant='h1'>
                {crrTitle}    
            </Typography>
        </div>
    );
};