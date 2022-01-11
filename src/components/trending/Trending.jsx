import React, { useState, useEffect } from "react";
import styles from "./Trending.module.scss";
import classNames from "classnames";
import Card from "../card/Card";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function Trending({
  trendingCards = [],
  trendingFilters,
  setFilters,
}) {
  const [sortValues, setSortValue] = useState(0);

  function handleSortChange(e) {
    setFilters(e.target.value);
    setSortValue(e.target.value);
  }

  return (
    <Container
      disableGutters
      maxWidth="lg"
      className={classNames(styles.trendingContainer)}
    >
      <Grid
        container
        className={classNames(styles.gridContainer)}
        className={classNames(styles.main)}
      >
        <Grid
          item
          xs={2}
          justifyContent="center"
          alignSelf="baseline"
          className={classNames(styles.heading)}
        >
          <h1>Trending</h1>
        </Grid>

        <Grid
          item
          xs={10}
          sm={10}
          md={10}
          justifyContent="flex-end"
          style={{ display: "flex", padding: 0, alignSelf: "center" }}
        >
          <Select
            value={sortValues}
            onChange={handleSortChange}
            className={classNames(styles.select)}
          >
            <MenuItem value={0} style={{ display: "none" }}>
              This Week
            </MenuItem>
            {trendingFilters &&
              trendingFilters?.sort?.map((item, i) => {
                return (
                  <MenuItem key={i} value={item.value}>
                    {item.label}
                  </MenuItem>
                );
              })}
          </Select>
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          className={classNames(styles.cardsContainer)}
        >
          {trendingCards.map(function (nft, index) {
            return (
              <Grid
                item
                direction="row"
                key={index}
                alignItems="center"
                className={classNames(styles.card)}
              >
                <Card
                  name={nft.name}
                  user={nft.owner}
                  likes={nft.likes}
                  mediaUrl={nft.source.url}
                  price={nft.price}
                  currency={nft.currency}
                  id={nft.id}
                ></Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
