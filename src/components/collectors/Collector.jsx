import React from "react";
import User from "../user/User";
import styles from './Collector.module.scss';
import classNames from "classnames";

export default function Collector({ name, nftsCount, avatar, verified, id, type }) {

    return (
        <div className={classNames([styles.container, styles[type]])} >

            <p>{id}</p>

            <User
                name={name}
                info={`${nftsCount} items`}
                avatar={avatar}
                verified={verified}
            />

        </div>
    );
};