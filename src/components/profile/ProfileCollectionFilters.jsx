import React, { useState } from "react";
import styles from "./ProfileCollectionFilters.module.scss"
import classNames from "classnames";
import { Container } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function ProfileCollectionFilters({ filters }) {

    const [sortValues, setSortValues] = useState(filters.sort);
    const [priceValues, setPriceValues] = useState(filters.price);

    console.log(sortValues);

    console.log(filters);

    return (
        <div className={classNames(styles["profile-collection-filters"])}>
            <Container>
                <Stack direction={"row"} className={classNames(styles["stack"])}>
                    <FormControl>

                        <Select value={0}>
                            <MenuItem value={0} style={{ display: 'none' }}>Sort by</MenuItem>
                            {sortValues.map(el => {
                                return <MenuItem key={el.label} value={el.value}>{el.label}</MenuItem>
                            })}
                        </Select>
                    </FormControl>

                    <FormControl>
                        <Select value={0}>
                            <MenuItem value={0} style={{ display: 'none' }}>Price range</MenuItem>
                            {priceValues.map(el => {
                                return <MenuItem key={el.label} value={el.value}>{el.label}</MenuItem>
                            })}
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <TextField type='search' variant="standard" inputProps={{variant: 'standard'}}>
                            <InputAdornment position='start' variant="standard" >
                                <Search className={classNames(styles.searchIcon)}></Search>
                            </InputAdornment>
                        </TextField>
                    </FormControl>

                </Stack>
            </Container>
        </div>
    )
}