import React, { useState } from 'react';
import styles from './Auctions.module.scss';
import classNames from 'classnames';
import Card from '../card/Card';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Auctions({ cards = [], filters }) {
    const [data, setData] = useState(cards);

    return (
        <Grid container className={classNames(styles.gridContainer)} className={classNames(styles.main)}>

            <Grid item xs={3} sm={3} md={3} justifyContent='flex-end'
                style={{ display: 'flex', alignSelf: 'flex-end', marginRight: 60 }}>
                <h1 className={classNames(styles.heading)}>🔥 Live Auctions</h1>
            </Grid>

            <Grid item xs={7} sm={7} md={7} justifyContent='flex-end' style={{ display: 'flex', padding: 0, alignSelf: 'center' }}>

                <Select value={0} className={classNames(styles.select)} style={{ border: 'none' }} >
                    <MenuItem value={0} style={{ display: 'none' }}>Price range</MenuItem>
                    {filters?.map((item, i) => {
                        return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                    })}
                </Select>
            </Grid>

            <Grid container justifyContent='center'>
                {cards.map(function (nft, index) {
                    if (index <= 3) {
                        return (
                            <Grid item key={index} columns={{ xs: 3, sm: 3, md: 4 }}>
                                <Container style={{ padding: '10px' }}>
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
                                </Container >
                            </Grid>
                        );
                    }
                })}
            </Grid>

        </Grid>

    )

};