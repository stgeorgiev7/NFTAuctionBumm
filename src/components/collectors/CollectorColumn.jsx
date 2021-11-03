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
                    <div key={`${crrIndex + 1}_${crritem.name}` }>
                        <Collector
                            name={crritem.name}
                            nftsCount={crritem.nftsCount}
                            avatar={crritem.avatar}
                            verified={crritem.verified}
                            id={crrIndex}
                            type={crrIndex === 1 ? 'light' : ''}
                            key={crritem.name}
                        ></Collector>
                    </div>
                );

            })}

        </div>

    )
};