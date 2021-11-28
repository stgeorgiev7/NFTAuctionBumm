import React from "react";
import Countdown from "react-countdown";
import styles from './ProductInfoTimer.module.scss';
import classNames from "classnames";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {

    const timer =
        <Countdown
            date={timeEnd}
            className={classNames(styles["active"])}
            children={<div>{onTimeEnd}</div>}
        />

    const timerComponent =

        <div className={classNames(styles["timer"])}>
            <div className={classNames(styles["title"])}>
                <label>ENDS IN</label>
            </div>
            <div className={classNames(styles["countDownWrapper"])}>
                {timer}
            </div>
        </div>

    return (
        <div className={classNames(styles["product-info-timer"])}>
            {timeEnd ? timerComponent : <div className={classNames(styles["timer"])}></div>}
        </div>

    )
};