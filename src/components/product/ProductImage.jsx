import React, {useState} from "react";
import styles from './ProductImage.module.scss';
import classNames from "classnames";
import Head from "../header/Header";
import Footer from "../footer/Footer";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import Image from "next/image"

export default function ProductImage({ url }) {
    console.log(url);

    const [img, setImage] = useState(url.toString());

    return (

        <CardContent className={classNames(styles["product-image"])}>
            <img src={img} className={classNames(styles.image)}></img>
        </CardContent>
        // <div className={classNames(styles.product)} className={classNames(styles.image)}>
        //     <img src={img} className={classNames(styles.image)}></img>

        // </div>
    );
};
