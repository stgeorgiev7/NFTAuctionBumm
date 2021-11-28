import React from 'react';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import styles from "./ProductActions.module.scss";
import classNames from 'classnames';

export default function ProductActions({ isLive, currency, buyAmount, bidAmount, onBuy, onBid}) {

    return (
        <div className={styles['product-action']}>
            <Grid container>
                <Grid item xs={7} pr={1}>
                    <Button
                        className={styles['button']}
                        variant='contained'
                        sx={{width: "100%"}}
                        disabled={isLive ? false : true}
                        onClick={onBuy}>Buy for {buyAmount} {currency}
                    </Button>
                </Grid>

                <Grid item xs={5} pl={1}>
                    <Button
                        className={styles['button']}
                        disabled={isLive ? false : true}
                        variant="outlined"
                        sx={{width: "100%", right: "15px"}}
                        color="success"
                        onClick={onBid}>
                        Place bid for {bidAmount} {currency}
                    </Button>
                </Grid>

            </Grid>

        </div>
    )
};


