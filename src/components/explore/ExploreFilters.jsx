import { useState, useEffect } from 'react';
import styles from './ExploreFilters.module.scss'
import { FormControl, Select, InputLabel, MenuItem, Stack, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function ExploreFilters({ filters, setSort, setPrice }) {
    const [sortValues, setSortValue] = useState('');
    const [priceValues, setPriceValue] = useState('');


    function handleSortChange(e) {
        setSort(e.target.value);
        setSortValue(e.target.value);
    };

    function handlePriceChange(e) {
        setPriceValue(e.target.value);
        setPrice(e.target.value);
    };


    return (
        <div className={styles['explore-filters']}>
            <Stack direction="row" spacing={2}>
                <FormControl sx={{ minWidth: 220 }}>
                    <InputLabel id="sort-select" shrink={false}>{'Sort by'}</InputLabel>
                    <Select
                        className={styles.select}
                        labelId="sort-select"
                        id="demo-simple-select"
                        variant="outlined"
                        color="primary"
                        value={sortValues}
                        onChange={handleSortChange}>
                        {filters && filters.sort.map((item, i) => {
                            return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl>
                    <Select
                     value={priceValues} 
                     onChange={handlePriceChange}
                     className={styles.select}  
                     >
                        {filters?.price?.map((el, i )=> {
                            return <MenuItem key={i} value={el.value}>{el.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl size="medium">
                    <TextField
        
                        sx={{ minWidth: 340, background: "#181828", padding: "0.7rem 1.2rem", borderRadius: "30px" }}
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "white" }} />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </FormControl>
            </Stack>
        </div>
    )
}