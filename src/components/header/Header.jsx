import React from 'react';
import styles from "./Header.module.scss";
import classNames from "classnames";
import Logo from '../logo/Logo';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { InputAdornment } from '@mui/material';
import { Grid } from '@mui/material';

export default function Header() {
    return (
        <div className={classNames(styles.container)}>

            <Grid container
                className={classNames(styles["gridContainer"])}
                alignItems="center"
                direction="row"
                justifyContent="space-between">
                <Grid item
                    xs={12} sm={12} md={2}
                    className={classNames(styles.logo)}
                    justifyItems="flex-end"
                >
                    <Link href={"/"}>
                        <Logo />
                    </Link>

                </Grid>
                <Grid item
                    xs={12} sm={12} md={6}
                    className={classNames(styles.search)} >

                    <TextField
                        fullWidth
                        variant="outlined"
                        margin="none"
                        placeholder="Find items, users and activities"
                        size="small"
                        InputProps={{
                            startAdornment: (

                                <InputAdornment position="start">
                                    <SearchIcon className={classNames(styles.searchIcon)} />
                                </InputAdornment>

                            )
                        }} />
                </Grid>

                <Grid item container
                    xs={12} sm={12} md={4}
                    className={classNames(styles.btns)}
                    justifyContent="flex-end"
                    direction="row"
                    alignItems="center">
                    <Link href={"/"}>
                        <Button variant='text'
                            className={classNames(styles.button)}
                            className={classNames(styles.homeBtn)}
                        >Home
                        </Button>
                    </Link>

                    <Link href={"/activity"}>
                        <Button variant='text'
                            className={classNames(styles.button)}
                        >Activity
                        </Button>
                    </Link>

                    <Link href={"/explore"}>
                        <Button variant="contained">Explore</Button>
                    </Link>
                </Grid>
            </Grid >
        </div >
    );
};