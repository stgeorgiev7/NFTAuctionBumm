import React from "react";
import styles from './ProductInfoCreator.module.scss';
import classNames from "classnames";
import User from "../user/User";

export default function ProductInfoCreator({name, avatar, verified=false}) {


    return(
        <div className={classNames(styles["product-info-creator"])}>
            <label className={classNames(styles["title"])}>Creator</label>
            <User name={name} avatar={avatar} className={classNames(styles["user-container"])}/>

        </div>
    )
}