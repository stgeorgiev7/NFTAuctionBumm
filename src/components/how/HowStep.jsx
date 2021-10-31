import React from "react";
import styles from './HowStep.module.scss';
import classNames from "classnames";
import { Grid } from '@mui/material';

export default function HowStep({ number, title, description }) {

    return (
        <Grid container 
        columns={{ xs: 3, sm: 3, md: 3 }} 
        justifyContent='flex-end'    
        className={classNames(styles.stepContainer)}
        alignContent='center'
        >

            <Grid item xs={3} sm={3} md={3} className={classNames(styles.numberContainer)} >
                <h1 className={classNames(styles.number)}>
                    {number}
                </h1>
            </Grid>

            <Grid item xs={6} sm={6} md={6} className={classNames(styles.infoContainer)}>
                <h3 className={classNames(styles.title)}>
                    {title}
                </h3>

                <p className={classNames(styles.description)}>
                    {description}
                </p>

            </Grid>
        </Grid>

    )
};