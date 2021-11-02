import React from "react";
import { Container } from "@mui/material";
import Collector from "./Collector";
import styles from './CollectorColumn.module.scss';
import classNames from "classnames";

export default function CollectorColumn({ items }) {

    return (
        <div className={classNames(styles.collectorColumn)}>
            {items.map((crritem, crrIndex) => {
                
                return (
                    <div key={`${crrIndex}_${crritem.name}`}>
                        <Collector
                            name={crritem.name}
                            nftsCount={crritem.nftsCount}
                            avatar={crritem.avatar}
                            verified={crritem.verified}
                            id={crrIndex}
                            type={crrIndex % 2 !== 0 ? 'light': ''}
                            key={crritem.name}
                        ></Collector>
                    </div>
                );

            })}

        </div>

    )
};