import { useState, useEffect } from 'react';
import styles from './ActivityFilters.module.scss';
import classNames from "classnames";
import { FormControl, Select, InputLabel, MenuItem, Stack, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function ActivityFilters({ filters, setSort, setType }) {
    const [sortValues, setSortValue] = useState(0);
    const [typeValues, setTypeValues] = useState(0);


    function handleSortChange(e) {
        setSort(e.target.value);
        setSortValue(e.target.value);
    };

    function handleTypeChange(e) {
       setTypeValues(e.target.value);
       setType(e.target.value);
    };

    return (
        <div className={styles['activity-filters']}>
            <Stack direction="row" 
            spacing={2} 
            alignItems="center"
            className={classNames(styles["activity-stack"])}>
                <FormControl sx={{ minWidth: 220 }}>
                    <Select
                        className={styles.select}
                        labelId="sort-select"
                        variant="outlined"
                        color="primary"
                        value={sortValues}
                        onChange={handleSortChange}>
                            <MenuItem value={0} style={{display: "none"}}>Sort by</MenuItem>
                        {filters && filters?.sort?.map((item, i) => {
                            return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl>
                    <Select
                     value={typeValues}
                     onChange={handleTypeChange}
                     className={styles.select}
                     >
                        <MenuItem value={0} style={{ display: 'none'}}>Type</MenuItem>
                        {filters?.type.map((el, i )=> {
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