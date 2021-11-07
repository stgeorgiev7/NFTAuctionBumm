import React, { useState } from 'react';
import styles from './TopCollectors.module.scss';
import classNames from 'classnames';
import CollectorColumn from './CollectorColumn';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import _ from 'lodash';

export default function TopCollectors({ collectors = [] }) {

    const collectorsData = collectors.sort((a, b) =>  b.nfts.length - a.nfts.length);
    collectorsData.map((crrColector, crrIndex) => {
        if (crrIndex < 12) {
            crrColector.id = crrIndex + 1;
        };
    });

    const top = collectorsData.filter( collector => collector.id <= 12);

    const chunkedArray = _.chunk(top, 3);

    return (
        <Grid container className={classNames(styles.gridContainer)} className={classNames(styles.main)}>

            <Grid item xs={3} sm={3} md={3} justifyContent='flex-end'
                style={{display: 'flex', alignSelf: 'flex-end', marginRight:60}}>
                <h1 className={classNames(styles.heading)}>Top collectors</h1>
            </Grid>

            <Grid item xs={7} sm={7} md={7} justifyContent='flex-end' style={{display:'flex', alignSelf:'center'}}>

                <Select value={10} className={classNames(styles.select)} >
                    <MenuItem value={10}>This Week</MenuItem>
                    <MenuItem value={20}>This Month</MenuItem>
                    <MenuItem value={30}>This Year</MenuItem>
                </Select>
            </Grid>
        
            <Grid container justifyContent='center' style={{borderRadius:'50px'}}>
            
                {chunkedArray.map((list, index) => {
                    return (
                        <CollectorColumn key={index} items={list}></CollectorColumn>
                    );
                })}
            </Grid>
        </Grid>

    )

};