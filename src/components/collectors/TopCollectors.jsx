import React, { useState } from 'react';
import styles from './TopCollectors.module.scss';
import classNames from 'classnames';
import CollectorColumn from './CollectorColumn';
import { Grid, Select, MenuItem, Container } from '@mui/material';
import _ from 'lodash';

export default function TopCollectors({ collectors = [], filters, setFilters }) {

    const [sortValue, setValueSort] = useState(0);

    function handleSortChange(e) {
        setValueSort(e.target.value);
        setFilters(e.target.value);
    };

    const collectorsData = collectors.sort((a, b) => b.nfts.length - a.nfts.length);
    collectors.map((crrColector, crrIndex) => {
        if (crrIndex < 12) {
            crrColector.id = crrIndex + 1;
        };
    });

    const top = collectorsData.filter(collector => collector.id <= 12);

    const chunkedArray = _.chunk(top, 3);

    return (
        <div className={classNames(styles.collectorsWrapper)}>
        <Container maxWidth="lg" disableGutters>
            <Grid container
                alignItems="center"
                className={classNames(styles.gridContainer)}
                className={classNames(styles.main)}
                direction="row"
                justifyContent="center"
            >

                <Grid item xs={2}>
                    <h1 className={classNames(styles.heading)}>Top collectors</h1>
                </Grid>

                <Grid item xs={10} sm={10} md={10}
                        justifyContent='flex-end' style={{ display: 'flex', padding: 0, alignSelf: 'center' }}
                        >

                    <Select
                        value={sortValue}
                        onChange={handleSortChange}
                        className={classNames(styles.select)}
                    >
                        <MenuItem value={0} style={{ display: 'none' }}>Sort By</MenuItem>
                        {filters && filters?.sort?.map((item, i) => {
                            return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                        })}
                    </Select>
                </Grid>

                <Grid container
                    className={classNames(styles.collectorContainer)}
                    justifyContent='center'
                    direction="row"
                    style={{ borderRadius: '50px' }}>

                    {chunkedArray.map((list, index) => {
                        return (
                            <Grid item
                             key={index}
                             className={classNames(styles.card)} >
                            <CollectorColumn items={list}></CollectorColumn>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Container>
        </div>
    )

};