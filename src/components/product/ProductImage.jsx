import React from "react";
import styles from './ProductImage.module.scss';
import classNames from "classnames";
import Head from "../header/Header";
import Footer from "../footer/Footer";
import { CardMedia } from "@mui/material";

export default function ProductImage({url}) {

    return(
        <div className={classNames(styles.product-image)}>
            <Head />
                <img src={url} className={classNames(styles.image)}/>
                <CardMedia
                component='img'
                image={url}
                className={classNames(styles.image)}>

                </CardMedia>

            <Footer />
        </div>
    );
};
