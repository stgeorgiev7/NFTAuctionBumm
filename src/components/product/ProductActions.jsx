import React from 'react';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import styles from "./ProductActions.module.scss";
import classNames from 'classnames';

export default function ProductActions({ isLive, currency, buyAmount, bidAmount, onBuy, onBid }) {

    const auctionsBtns =
        <Grid container>
            <Grid item xs={7} sm={7} md={7}>
                <Button className={styles['button']} variant='contained' onClick={onBuy}>
                    Buy for {buyAmount} {currency}
                </Button>
            </Grid>

            <Grid item xs={5} sm={5} md={5}>
                <Button className={styles['button']} variant="outlined" color="success" onClick={onBid}>
                    Place bid for {bidAmount} {currency}
                </Button>
            </Grid>

        </Grid>

    return (
        <div className={'product-action'}>
            {isLive ? auctionsBtns: <div></div>}
        </div>
    )
};


