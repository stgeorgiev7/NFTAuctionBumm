import React from "react";
import { useState } from "react";
import styles from './ProductInfoLikes.module.scss';
import classNames from "classnames";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Chip} from "@mui/material";

export default function ProductInfoLikes({ amount = 0 }) {

    return (
        <div className={classNames(styles["product-info-likes"])}>
            <Chip 
            className={styles.likes}
            label={millify(amount)}
            icon={<FavoriteIcon style={{fontSize: "18", justiFyContent: "flex-start"}}/>}
            variant="outlined"
            color="success"
            />
        </div>
    )
};