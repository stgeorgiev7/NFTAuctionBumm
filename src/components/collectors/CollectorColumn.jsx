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
                crrIndex % 2 === 0 ? crritem.className='light' : crritem.className=''
                return (
                    <div key={`${crrIndex}_${crritem.name}`}>
                        <p>{crrIndex + 1}</p>
                        <Collector
                            type={crritem}
                            key={crritem.name}
                        ></Collector>
                    </div>
                );

            })}

        </Container>
    )
};