import { useState, useEffect } from 'react';
import styles from './ExploreFilters.module.scss'
import classNames from "classnames"
import { FormControl, Select, MenuItem, Stack, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function ExploreFilters({ filters, setSort, setPrice }) {
    const [sortValues, setSortValue] = useState(0);
    const [priceValues, setPriceValue] = useState(0);

    function handleSortChange(e) {
        setSort(e.target.value);
        setSortValue(e.target.value);
    };

    function handlePriceChange(e) {
        setPriceValue(e.target.value);
        setPrice(e.target.value);
    };

    return (
        <div className={classNames(styles['explore-filters'])}>
            <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="flex-end"
            alignItems="center"
            className={classNames(styles["explore-stack"])}>
                <FormControl sx={{ minWidth: 220 }}>
                    <Select
                        className={styles.select}
                        labelId="sort-select"
                        sx={{minWidth: "150px"}}
                        variant="outlined"
                        color="primary"
                        value={sortValues}
                        onChange={handleSortChange}>
                            <MenuItem value={0} style={{display:"none"}}>Sort by</MenuItem>
                        {filters && filters.sort.map((item, i) => {
                            return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl  sx={{width: "220px"}} >
                    <Select
                     value={priceValues} 
                     onChange={handlePriceChange}
                     className={styles.select}  
                     >
                        <MenuItem value={0} style={{display:"none"}}>Price</MenuItem>
                        {filters?.price?.map((el, i )=> {
                            return <MenuItem key={i} value={el.value}>{el.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl >
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