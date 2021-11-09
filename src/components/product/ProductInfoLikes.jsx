import React from "react";
import { useState } from "react";
import styles from './ProductInfoLikes.module.scss';
import classNames from "classnames";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProductInfoLikes({ amount = 0 }) {

    const [millifiedLikes, setMilifiedLikes] = useState(millify(amount));


    return (
        <p className={classNames(styles["product-info-likes"])}>
            <FavoriteIcon fontSize={'small'} className={classNames(styles["likes"])} />  {millifiedLikes}
        </p>
    )
};