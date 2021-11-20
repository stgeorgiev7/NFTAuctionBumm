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


export default function ProductInfo({ title, creator, price, currency, likes, onTimeEnd, timeEnd, isLive }) {

    return (
        <div clases={classNames(styles["product-info"])}>
            <Grid container>
                <ProductInfoTitle text={title} />

                <Grid container justifyContent='space-between' alignItems="baseline">
                    <Grid item xs={3} sm={3} md={6} >
                        <ProductInfoPrice amount={price} currency={currency} />

                    </Grid>

                    <Grid item xs={3} sm={3} md={3} justifyContent='center'>
                        <ProductInfoStatus isLive={isLive} />

                    </Grid>

                    <Grid item xs={3} sm={3} md={3} justifySelf='flex-end'>
                        <ProductInfoLikes amount={likes} />

                    </Grid>

                </Grid>

                <Grid container>

                    <Grid item xs={7} sm={7} md={7}>
                        <ProductInfoCreator name={creator.username} avatar={creator.avatar.url} verified={creator.verified} />

                    </Grid>

                    <Grid item xs={5} sm={5} md={5}>
                        <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={"auction ended"} />

                    </Grid>

                </Grid>



            </Grid>
            <Stack className={classNames(styles["stats"])}>

            </Stack>

        </div>
    )
};