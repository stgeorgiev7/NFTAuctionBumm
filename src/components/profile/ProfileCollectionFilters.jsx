import React, { useState } from "react";
import styles from "./ProfileCollectionFilters.module.scss"
import classNames from "classnames";
import { Container, FormControl, Select, MenuItem, Stack, TextField, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function ProfileCollectionFilters({ filters, setSort, setPrice }) {

    const [sortValue, setSortValue] = useState(0);
    const [priceValue, setPriceValue] = useState(0);

    function handleSortChange(e) {
        setSortValue(e.target.value);
        setSort(e.target.value)
    }

    function handlePriceChange(e) {
        setPriceValue(e.target.value);
        setPrice(e.target.value)
    }

    return (
        <div className={classNames(styles["profile-collection-filters"])}>
            <Container>
                <Stack direction="row" spacing={2} alignItems="center">
                    <FormControl sx={{ minWidth: 220 }}>
                        <Select
                            value={sortValue}
                            onChange={handleSortChange}
                            className={classNames(styles.select)}
                            sx={{ ":hover": { border: 'none' } }}
                        >
                            <MenuItem value={0} style={{ display: 'none' }}>Sort by</MenuItem>
                            {filters && filters?.sort?.map((item, i) => {
                                return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 220 }}>
                        <Select
                            value={priceValue}
                            onChange={handlePriceChange}
                            className={classNames(styles.select)}
                            sx={{ ":hover": { border: 'none' } }}
                        >
                            <MenuItem value={0} style={{ display: 'none' }}>Price</MenuItem>
                            {filters?.price?.map((item, i) => {
                                return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl size="medium">
                        <TextField
                            sx={{ minWidth: 300, background: "#181828", padding: "0.7rem 1.2rem", borderRadius: "30px" }}
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