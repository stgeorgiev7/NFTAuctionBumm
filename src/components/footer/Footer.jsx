import React from 'react';
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Logo from '../logo/Logo';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { ButtonBase } from '@mui/material';
import { Grid } from '@mui/material';


export default function Footer() {
    return (
        <Grid container spacing={5} className={classNames(styles.footContainer)} style={{margin:'0px'}}
            flexDirection='row'
            justifyContent="center"
            alignItems="center"
            >

            <Grid item
                xs={3} sm={3} md={2}
                className={classNames(styles.logo)}
                style={{ display: 'flex', justifyContent: 'flex-end', padding:'0'}}>
                <Logo type='muted'/>
            </Grid>

            <Grid item xs={4} sm={4} md={4} justifySelf='center' style={{padding:'0'}}>
              <p className={classNames(styles.text)}>Bum All Rights Reserved 2021</p>
            </Grid>

            <Grid item xs={4} sm={4} md={4} style={{ display: 'flex', justifyContent: 'space-evenly', padding:'0' }}>
                <ButtonBase size='large'
                    color='secondary'
                    className={classNames(styles.whiteButton)}>Privacy Policy
                </ButtonBase>
                <ButtonBase size='large'
                    className={classNames(styles.whiteButton)}>Cookie Policy
                </ButtonBase>
            </Grid>
        </Grid>
    )
};