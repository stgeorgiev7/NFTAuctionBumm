import React, { useState } from 'react';
import styles from './Auctions.module.scss';
import classNames from 'classnames';
import Card from '../card/Card';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Auctions({ cards = [], filters, setPrice }) {
    const [priceValue, setPriceValue] = useState(0);

    function handlePriceChange(e) {
        setPriceValue(e.target.value);
        setPrice(e.target.value);
    };

    return (
        <div className={classNames(styles.wrapper)}>
        <Container
            disableGutters
            maxWidth="lg"
        >
            <Grid container
                className={classNames(styles.gridContainer)}
                className={classNames(styles.main)}>

                <Grid item
                    xs={2}
                    justifyContent="center">
                    <h1 className={classNames(styles.heading)}>🔥 Live Auctions</h1>
                </Grid>

                <Grid item xs={10} sm={10} md={10} justifyContent='flex-end' style={{ display: 'flex', padding: 0, alignSelf: 'center' }}>

                    <Select
                        value={priceValue}
                        className={classNames(styles.select)}
                        onChange={handlePriceChange}
                    >
                        <MenuItem value={0} style={{ display: 'none' }}>Price range</MenuItem>
                        {filters?.price?.map((item, i) => {
                            return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                        })}
                    </Select>
                </Grid>

                <Grid container
                    justifyContent='space-between'
                    className={classNames(styles.cardsContainer)}
                >
                    {cards.map(function (nft, index) {

                        return (
                            <Grid item
                                key={index}
                                direction="row"
                                alignItems="center"
                                className={classNames(styles.card)}
                            >
                                <Card
                                    name={nft.name}
                                    user={nft.owner}
                                    likes={nft.likes}
                                    mediaUrl={nft.source.url}
                                    price={nft.price}
                                    currency={nft.currency}
                                    timeLeft={nft.auction_end}
                                    id={nft.id}
                                >
                                </Card>
                            </Grid>
                        );

                    })}
                </Grid>

            </Grid>
        </Container>
        </div>
    )

};