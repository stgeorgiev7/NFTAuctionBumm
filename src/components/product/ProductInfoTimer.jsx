import React from "react";
import Countdown, {calcTimeDelta} from "react-countdown";
import styles from './ProductInfoTimer.module.scss';
import classNames from "classnames";


export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
    const Completionist = () => <span>Live Auction finished</span>;

    const renderer = ({year, month, days, hours, minutes, seconds }) => {
        if ( timeEnd === 0) {
            return <Completionist />;
        } else {
            return <span> {hours}:{minutes}:{seconds}</span>;
        }
    };

    const timer = <Countdown date={timeEnd} className={classNames(styles["timer"])}/>

    return (
        <div className={classNames(styles["product-info-timer"])} >
            <label className={classNames(styles["title"])}>Ends in</label>
            <div className={classNames(styles["timer"])}>
            {timeEnd !== null || timeEnd === undefiend ? timer : '' }

            </div>

        </div>
    )
};