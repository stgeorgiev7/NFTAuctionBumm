import React, {useState} from "react";
import styles from './ProductImage.module.scss';
import classNames from "classnames";


export default function ProductImage({ url }) {

    return (
        <div className={classNames(styles["product-image"])}>
            <img src={url} className={classNames(styles.image)}></img>
        </div>
    );
};
