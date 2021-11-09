import React from 'react';
import styles from './ProductInfoPrice.module.scss';
import classNames from "classnames";

export default function ProductInfoPrice ({amount, currency}) {

    return(
        <div className={classNames(styles["product-info-price"])}>
            on sale for {amount} {currency}
        </div>
    )

}