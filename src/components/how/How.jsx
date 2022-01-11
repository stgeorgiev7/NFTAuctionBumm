import React from "react";
import styles from './How.module.scss';
import classNames from "classnames";
import { Button, Grid } from '@mui/material';
import HowStep from "./HowStep";
import { Container } from "@mui/material";
import Link from "next/link";


export default function How({ description, title, items = [], link }) {

    return (
        <div className={classNames(styles.wrapper)}>
        <Container disableGutters >
            <Grid container
                columns={{ xs: 12, sm: 12, md: 12 }}
                justifyContent='center'
                className={classNames(styles.howContainer)}
                spacing={4}
            >

                <Grid item xs={7} sm={7} md={7}
                    className={classNames(styles.textContainer)}
                    alignContent='center'
                >
                  
                    <h1 className={classNames(styles.cardTitle)}>
                        {title}
                    </h1>

                    <p className={classNames(styles.cardDescription)}>
                        {description}
                    </p>

                    <a href={"/how"} style={{textDecoration:'none'}}>
                        <Button variant='contained'
                        className={classNames(styles.btn)} 
                        style={{backgroundColor: 'white', color: '#4e24f2', padding: '10px 35px', marginTop: '20px'}}>
                            LEARN MORE
                        </Button>
                    </a>
                </Grid>

                <Grid item xs={5} sm={5} md={5}
                    className={classNames(styles.cards)}
                    style={{ padding: 0 }} >
                    {items.map((item, crrnumber) =>
                        <HowStep
                            number={crrnumber + 1}
                            title={item.title}
                            description={item.description}
                            key={crrnumber + '' + item.title}
                            className={classNames(styles.card)}
                        />)
                    }
                </Grid>
            </Grid>

        </Container>
        </div>

    );
};

