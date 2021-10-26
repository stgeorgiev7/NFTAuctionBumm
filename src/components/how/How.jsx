import React from "react";
import styles from './How.module.scss';
import classNames from "classnames";
import { Button, Grid } from '@mui/material';
import HowStep from "./HowStep";

export default function How({ description, title, items=[], link }) {

    return (
        <Grid container >
            <div className={classNames(styles.HowContainer)}>
                <Grid item>
                    <h1 className={classNames(styles.CardTitle)}>
                        {title}
                    </h1>
                </Grid>

                <Grid item>
                    <p className={classNames(styles.CardDescription)}>
                        {description}
                    </p>
                </Grid>

                <Grid item>
                    <a href={link}>
                        <Button variant='contained'>
                            LEARN MORE
                        </Button>
                    </a>
                </Grid>

                <Grid container>
                    {items.map((item, crrnumber) =>
                        <HowStep
                            number={crrnumber + 1}
                            title={item.title}
                            description={item.description}
                            key={crrnumber + '' + item.title}
                        />)
                        }
                </Grid>
            </div>
        </Grid>
    );
};

