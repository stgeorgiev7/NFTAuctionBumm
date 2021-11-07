import React from 'react';
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Logo from '../logo/Logo';

import { Container } from '@mui/material';
import { ButtonBase } from '@mui/material';
import { Grid } from '@mui/material';


export default function Footer() {
    return (
        
            <Grid container className={classNames(styles.footContainer)} style={{ margin: '0px' }}
                flexDirection='row'
                alignItems="center"
                justifyContent='center'
            >
                <Grid item
                    xs={3} sm={3} md={3}
                    className={classNames(styles.logo)}
                    style={{ display: 'flex', justifyContent: 'center' }}
                    >
                    <Logo type='muted' />
                </Grid>

                <Grid item xs={3} sm={3} md={5} justifySelf='center' style={{ padding: '0' }}>
                    <p className={classNames(styles.text)}>Bum All Rights Reserved 2021</p>
                </Grid>

                <Grid item xs={3} sm={3} md={1} >
                    <ButtonBase size='large'
                        color='secondary'
                        className={classNames(styles.whiteButton)}
                        >Privacy Policy
                    </ButtonBase>
                </Grid>
                <Grid item xs={3} sm={3} md={2} alignSelf='center'>
                    <ButtonBase size='large'
                        className={classNames(styles.whiteButton)}
                        style={{marginLeft: '30px'}}
                        >Cookie Policy
                    </ButtonBase>
                </Grid>
            </Grid>
            
    )
};