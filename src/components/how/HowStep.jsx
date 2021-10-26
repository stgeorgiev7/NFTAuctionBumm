import React from "react";
import styles from './HowStep.module.scss';
import classNames from "classnames";
import { Grid } from '@mui/material';

export default function HowStep({ number, title, description }) {

    return (
        <Grid container columns={{xs:6, sm:6, md:6}}>
            <div className={classNames(styles.stepContainer)}>
                <Grid item xs={6} sm={6} md={6} >
                    <h1 className={classNames(styles.number)}>
                        {number}
                    </h1>
                </Grid>

                <Grid item item xs={6} sm={6} md={6}>
                    <h3 className={classNames(styles.title)}>
                        {title}
                    </h3>
                </Grid>

                <Grid item xs={6} sm={6} md={6}>
                    <p className={classNames(styles.description)}>
                        {description}
                    </p>
                </Grid>
            </div>

        </Grid>

    )
};