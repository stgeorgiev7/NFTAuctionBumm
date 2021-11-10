import React from "react";
import Countdown, {calcTimeDelta} from "react-countdown";
import styles from './ProductInfoTimer.module.scss';
import classNames from "classnames";


export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
   
    const timer = 
    <Countdown 
    date={timeEnd} 
    className={classNames(styles["active"])} 
    children={<div>{onTimeEnd}</div>}
    /> 

    return (
        <div className={classNames(styles["product-info-timer"])} >
            <label className={classNames(styles["title"])}>Ends in</label>
            <div className={classNames(styles["timer"])}>
            {timeEnd !== null || timeEnd !== undefined ? timer : <div></div> }

            </div>

        </div>
    )
};