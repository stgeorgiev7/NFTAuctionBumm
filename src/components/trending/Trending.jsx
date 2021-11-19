import React, { useState } from 'react';
import styles from './Trending.module.scss';
import classNames from 'classnames';
import Card from '../card/Card';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Trending({ cards = [] }) {
    const [data, setData] = useState(cards);

    const cardsData = cards.map(function (nft, index) {
        return (
            <Grid item key={index} columns={{ xs: 4, sm: 4, md: 4 }}>
                <Container style={{padding:'10px'}}>
                    <Card
                        name={nft.name}
                        user={nft.owner}
                        likes={nft.likes}
                        mediaUrl={nft.source.url}
                        price={nft.price}
                        currency={nft.currency}
                        id={nft.id}
                    >
                    </Card>
                </Container >
            </Grid>

        );
    });

    return (
        <Grid container className={classNames(styles.gridContainer)} className={classNames(styles.main)}>

            <Grid item xs={3} sm={3} md={3} justifyContent='flex-end'
                style={{display: 'flex', alignSelf: 'flex-end', marginRight:60}}>
                <h1 className={classNames(styles.heading)}>Trending</h1>
            </Grid>

            <Grid item xs={7} sm={7} md={7} justifyContent='flex-end' style={{display:'flex', padding:0, alignSelf:'center'}}>

                <Select value={10} className={classNames(styles.select)} sx={{":hover": {border:'none'}}} >
                    <MenuItem value={10}>This Week</MenuItem>
                    <MenuItem value={20}>This Month</MenuItem>
                    <MenuItem value={30}>This Year</MenuItem>
                </Select>
            </Grid>

            <Grid container justifyContent='center'>
                {cardsData}
            </Grid>

        </Grid>

    )

};