import React, { useState, useEffect } from 'react';
import styles from './Trending.module.scss';
import classNames from 'classnames';
import Card from '../card/Card';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Trending({ trendingCards = [], trendingFilters, setFilters }) {

    const [sortValues, setSortValue] = useState(0);

    function handleSortChange(e) {
        setFilters(e.target.value);
        setSortValue(e.target.value);
    }

    return (
        <Grid container className={classNames(styles.gridContainer)} className={classNames(styles.main)}>

            <Grid item xs={3} sm={3} md={3} justifyContent='flex-end'
                style={{ display: 'flex', alignSelf: 'flex-end', marginRight: 60 }}>
                <h1 className={classNames(styles.heading)}>Trending</h1>
            </Grid>

            <Grid item xs={7} sm={7} md={7} justifyContent='flex-end' style={{ display: 'flex', padding: 0, alignSelf: 'center' }}>
                    <Select
                        value={sortValues}
                        onChange={handleSortChange}
                        className={classNames(styles.select)}
                        sx={{ ":hover": { border: 'none' } }}
                    >
                        <MenuItem value={0} style={{ display: 'none' }}>This Week</MenuItem>
                        {trendingFilters && trendingFilters?.sort?.map((item, i) => {
                            return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                        })}
                    </Select>
            </Grid>

            <Grid container justifyContent='center'>
                {trendingCards.map(function (nft, index) {
                    return (
                        <Grid item key={index} columns={{ xs: 4, sm: 4, md: 4 }}>
                            <Container style={{ padding: '10px' }}>
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
                })}
            </Grid>

        </Grid>

    )

};