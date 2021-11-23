import React, { useState } from "react";
import styles from "./ProfileCollectionFilters.module.scss"
import classNames from "classnames";
import { Container } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { InputLabel } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export default function ProfileCollectionFilters({ filters }) {

    console.log(filters)

    const [valueSort, setValueSort] = useState('');
    const [priceValues, setPriceValues] = useState(filters.price);

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSort(e) {
        setValueSort(e.target.value);
    };

    function handlePrice(e) {
        setPriceValues(e.target.value);
    };

    return (
        <div className={classNames(styles["profile-collection-filters"])}>
            <Container>
                <Stack direction="row" spacing={2}>
                    <FormControl sx={{ minWidth: 220 }}>
                        <InputLabel id="sort-select" shrink={false}>{valueSort == '' && 'Sort by'}</InputLabel>
                        <Select
                            className={styles.select}
                            labelId="sort-select"
                            id="demo-simple-select"
                            variant="outlined"
                            color="primary"
                            value={valueSort}
                            onChange={handleSort}>
                            {Object.values(filters)[0]?.map((item, i) => {
                                return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Select value={0} onChange={handlePrice}>
                            <MenuItem value={0} style={{ display: 'none' }}>Price range</MenuItem>
                            {filters?.price?.map((el, i) => {
                                return <MenuItem key={i} value={el.value}>{el.label}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl size="medium">
                        <TextField
                            onChange={handleChange}
                            sx={{ minWidth: 340, background: "#181828", padding: "0.7rem 1.2rem", borderRadius: "30px" }}
                            id="input-with-icon-textfield"
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
            </Container>
        </div>
    )
}