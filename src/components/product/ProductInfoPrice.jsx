import React from 'react';
import styles from './ProductInfoPrice.module.scss';
import classNames from "classnames";

export default function ProductInfoPrice ({amount = 0, currency}) {

    return(
        <p className={classNames(styles["product-info-price"])}>
            on sale for {amount} {currency}
        </p>
    )

}