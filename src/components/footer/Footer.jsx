import React from 'react';
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Logo from '../logo/Logo';

import { Container } from '@mui/material';
import { ButtonBase } from '@mui/material';
import { Grid } from '@mui/material';


export default function Footer() {
    return (
            <Grid container spacing={5} className={classNames(styles.footContainer)} style={{ margin: '0px' }}
                flexDirection='row'
                justifyContent="center"
                alignItems="center"
            >

                <Grid item
                    xs={4} sm={4} md={4}
                    className={classNames(styles.logo)}
                    style={{display:'flex', justifyContent:'center', padding: '0' }}>
                    <Logo type='muted' />
                </Grid>

                <Grid item xs={4} sm={4} md={4} justifySelf='center' style={{ padding: '0' }}>
                    <p className={classNames(styles.text)}>Bum All Rights Reserved 2021</p>
                </Grid>

                <Grid item xs={4} sm={4} md={4} style={{padding:'0'}}>
                    <ButtonBase size='large'
                        color='secondary'
                        className={classNames(styles.whiteButton)}
                        style={{marginLeft: '50px'}}
                        >Privacy Policy
                    </ButtonBase>
                    <ButtonBase size='large'
                        className={classNames(styles.whiteButton)}
                        style={{marginLeft: '50px'}}
                        >Cookie Policy
                    </ButtonBase>
                </Grid>
            </Grid>
    )
};