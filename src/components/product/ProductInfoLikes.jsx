import React from "react";
import { useState } from "react";
import styles from './ProductInfoLikes.module.scss';
import classNames from "classnames";
import { Chip } from "@mui/material";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProductInfoLikes({ amount = 0 }) {

    const [millifiedLikes, setMilifiedLikes] = useState(millify(amount));
    const likes = <FavoriteIcon fontSize={'small'}> {millifiedLikes} </FavoriteIcon>

    return (
        <div className={classNames(styles["product-info-likes"])}>
            <Chip variant='outlined' 
            label={likes}
            className={classNames(styles["likes"])}
            >

            </Chip>
            
        </div>
    )
};