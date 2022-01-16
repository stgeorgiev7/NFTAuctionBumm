import React from "react";
import styles from "./ProductInfo.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoTimer from "./ProductInfoTimer";

export default function ProductInfo({
  title,
  creator,
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  return (
    <div className={classNames(styles["product-info"])}>
      <Grid container className={classNames(styles["info-grid"])}>
        <Grid item className={classNames(styles["title"])}>
          <ProductInfoTitle text={title} />
        </Grid>

        <Grid container>
          <Grid item xs={4} sm={6} md={8}>
            <ProductInfoPrice amount={price} currency={currency} />
          </Grid>

          <Grid
            item
            xs={4}
            sm={6}
            md={4}
            className={classNames(styles["badges"])}
          >
            {isLive && <ProductInfoStatus isLive={isLive} />}
            <ProductInfoLikes amount={likes} />
          </Grid>
        </Grid>

        <Grid container sx={{ paddingTop: 1 }} justifyContent="space-between">
          <Grid item  xs={7} sm={12} md={7}>
            <ProductInfoCreator
              name={creator?.username}
              avatar={creator?.avatar.url}
              verified={creator?.verified}
              id={creator?.id}
            />
          </Grid>

          <Grid
            item
            xs={4}
            sm={4}
            md={5}
            className={classNames(styles.timer)}
          >
            <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={"auction ended"} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
