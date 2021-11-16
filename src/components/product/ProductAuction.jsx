import React from 'react';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import styles from "./ProductAuction.module.scss";
import classNames from 'classnames';

export default function ProductAuction({ isLive, currency, buyAmount, bidAmount, onBuy, onBid }) {

    const auctionBtns =
        <div>
            <Grid container>
                <Grid item xs={7} sm={7} md={7}>
                    <Button className={classNames(styles['button'])} variant='contained'>
                        `Buy for ${buyAmount} ${currency}`
                    </Button>
                </Grid>

                <Grid item xs={5} sm={5} md={5}>
                    <Button className={classNames(styles['button'])} variant="contained" color="success">
                        `Place bid for ${bidAmount} ${currency}`
                    </Button>
                </Grid>

            </Grid>
        </div>

    return (
        <div className={classNames(styles["product-auctions"])} variant="contained" color="success">
            {isLive ? auctionBtns : <div></div>}
        </div>
    )
};


