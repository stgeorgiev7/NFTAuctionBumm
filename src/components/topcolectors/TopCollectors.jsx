import React, { useState } from 'react';
import styles from './TopCollectors.module.scss';
import classNames from 'classnames';
import CollectorColumn from '../collectors/CollectorColumn';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import _ from 'lodash';

export default function TopCollectors({ collectors = [] }) {

    const [collectorsData, setCollectors] = useState(collectors);
    
    collectorsData.map((collector, index) => {
        collector.id = index + 1;
    });

    const chunkedArray = _.chunk(collectorsData, 3);

    return (
        <Grid container className={classNames(styles.gridContainer)} className={classNames(styles.main)}>

            <Grid item xs={3} sm={3} md={3}
                style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '30px' }}>
                <h1 className={classNames(styles.heading)}>Top collectors</h1>
            </Grid>

            <Grid item xs={7} sm={7} md={7} justifyContent='flex-end' style={{ display: 'flex', padding: 0, marginLeft: '30px' }}>

                <Select value={10} className={classNames(styles.select)} sx={{ ":hover": { border: 'none' } }} >
                    <MenuItem value={10}>This Week</MenuItem>
                    <MenuItem value={20}>This Month</MenuItem>
                    <MenuItem value={30}>This Year</MenuItem>
                </Select>
            </Grid>

            <Grid container justifyContent='center'>
                {chunkedArray.map((list) => {
                    return (
                        <CollectorColumn items={list} key={list.name}/>
                    );
                })}
            </Grid>

        </Grid>

    )

};