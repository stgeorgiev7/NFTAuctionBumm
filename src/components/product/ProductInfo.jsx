import React from "react";
import styles from "./ProductInfo.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import ProductImage from "./ProductImage";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoTimer from "./ProductInfoTimer";

export default function ProductInfo ({ title, creator, price, currency, likes, onTimeEnd, timeEnd, isLive }) {

    return (
        <div className={classNames(styles["product-info"])}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={7} md={7}>
                    <ProductImage
                        url={'https://nft-auction.herokuapp.com/uploads/0xa5192c2be7bf2603bbbae09c340dfeac07275a7a_93a8d3aa6f.jpg'} />
                </Grid>

                <Grid item item xs={5} sm={5} md={5}>
                    <Stack className={classNames(styles["stats"])}>
                        <ProductInfoTitle text={title} />
                        <ProductInfoPrice amount={price} currency={currency} />
                        <ProductInfoLikes amount={likes}/>
                        <ProductInfoStatus isLive={isLive}/>
                        <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={"auction ended"}/>
                        <ProductInfoCreator />
                        <ProductInfoStatus isLive={isLive}/>

                    </Stack>
                </Grid>

            </Grid>

        </div>
    )
};