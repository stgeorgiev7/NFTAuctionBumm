import React from 'react';
import styles from "./Header.module.scss";
import classNames from "classnames";
import Logo from '../logo/Logo';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { Input } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { ButtonBase } from '@mui/material';
import { Grid } from '@mui/material';


export default function Header() {
    return (
        <Grid container spacing={5} className={classNames(styles.gridContainer)}
            flexDirection='row'
            justifyContent="center"
            alignItems="center"
            style={{ padding: '10px' }}>

            <Grid item
                xs={3} sm={3} md={2}
                className={classNames(styles.logo)}
                style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Logo />
            </Grid>

            <Grid item xs={3} sm={4} md={4}>
                <Input fullWidth
                    className={classNames(styles.search)}
                    placeholder='Find items, users and activities'
                    disableUnderline={true}
                    startAdornment={
                        <InputAdornment position='start' >
                            <SearchIcon className={classNames(styles.searchIcon)}></SearchIcon>
                        </InputAdornment>
                    }>
                </Input>
            </Grid>

            <Grid item xs={4} sm={4} md={4} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Link href={"/"}>
                    <ButtonBase size='large'
                        color='secondary'
                        className={classNames(styles.whiteButton)}>Home
                    </ButtonBase>
                </Link>

                <Link href={"/activity"}>
                <ButtonBase size='large'
                    className={classNames(styles.whiteButton)}>Activity
                </ButtonBase>
                </Link>
                
                <Link href={"/explore"}>
                <Button variant='contained'>Explore</Button>
                </Link>
            </Grid>
        </Grid>
    )
};