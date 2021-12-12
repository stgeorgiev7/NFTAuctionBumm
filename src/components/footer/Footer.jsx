import React from 'react';
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Logo from '../logo/Logo';

import { Container } from '@mui/material';
import { ButtonBase } from '@mui/material';
import { Grid } from '@mui/material';


export default function Footer() {
    return (
        <div className={classNames(styles.container)}>
            <Grid container className={classNames(styles.footContainer)}
                maxWidth="lg"
                flexDirection='row'
                alignItems="center"
                justifyContent='center'
            >
                <Grid item
                    xs={12} sm={12} md={2}
                    className={classNames(styles.logo)}
                >
                    <Logo type='muted' />
                </Grid>

                <Grid item
                    xs={12} sm={12} md={5}
                    justifySelf='center'
                    alignSelf="center"
                    style={{ padding: '0' }}
                    className={classNames(styles.text)}>
                    <p >Bum All Rights Reserved 2021</p>
                </Grid>

                <Grid item
                    xs={12} sm={12} md={5}
                    className={classNames(styles.whiteButton)}
                    justifyContent="flex-end" 
                    
                    >
                    <ButtonBase size='large'
                        color='secondary'
                    >Privacy Policy
                    </ButtonBase>

                    <ButtonBase size='large'

                        style={{ marginLeft: '30px' }}
                    >Cookie Policy
                    </ButtonBase>
                </Grid>
            </Grid>
        </div>
    )
};