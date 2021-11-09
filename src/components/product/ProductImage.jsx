import React, {useState} from "react";
import styles from './ProductImage.module.scss';
import classNames from "classnames";


export default function ProductImage({ url }) {

    const [img, setImage] = useState(url.toString());

    return (

        <div className={classNames(styles["product-image"])}>
            <img src={img} className={classNames(styles.image)}></img>
        </div>
    );
};
