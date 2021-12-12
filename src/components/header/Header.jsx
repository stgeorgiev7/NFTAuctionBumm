import React from 'react';
import styles from "./Header.module.scss";
import classNames from "classnames";
import Logo from '../logo/Logo';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { Input } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { ButtonBase } from '@mui/material';
import { Grid } from '@mui/material';

export default function Header() {
    return (
        <div className={classNames(styles.container)}>

            <Grid container
                className={classNames(styles["gridContainer"])}
                maxWidth="lg"
                alignItems="center"
                direction="row"
                justifyContent="space-between">
                <Grid item
                    xs={12} sm={12} md={2}
                    className={classNames(styles.logo)}>
                    <Logo />
                
                </Grid>
                <Grid item
                    xs={12} sm={12}  md={5}
                    className={classNames(styles.search)} >

                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Find items, users and activities"
                        InputProps={{
                            startAdornment: (

                                <InputAdornment position="start">
                                    <SearchIcon className={classNames(styles.searchIcon)} />
                                </InputAdornment>
                                
                            )
                        }} />
                </Grid>
                
                <Grid item container
                    xs={12} sm={12} md={5}   
                    className={classNames(styles.btns)}
                    justifyContent="flex-end"
                    direction="row"
                    alignItems="center">
                    <Button variant='text' sx={{ color: "#ffff" }}>Home</Button>
                    <Button variant='text' sx={{ color: "#ffff" }}>Activity</Button>
                    <Button variant="contained">Explore</Button>
                </Grid>
            </Grid >
        </div >
    );
};