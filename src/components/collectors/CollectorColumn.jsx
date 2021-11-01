import React from "react";
import { Container } from "@mui/material";
import Collector from "./Collector";
import styles from './CollectorColumn.module.scss';
import classNames from "classnames";
import { style } from "@mui/material/node_modules/@mui/system";

export default function CollectorColumn({ items }) {

    return (
        <Container>
            {items.map((crritem, crrIndex) => {
                console.log(crritem);

                const background = crrIndex % 2 !== 0 ? 'light' : 'dark';
                console.log(background);

                return (
                    <div>
                        <p>{crrIndex + 1}</p>
                        <Collector
                            type={crritem}
                            className={background}
                            key={crritem.name}
                        ></Collector>
                    </div>
                );

            })}

        </Container>
    )
};