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
    console.log(creator)
    return (
        <div clases={classNames(styles["product-info"])}>
            <Grid container>
                <Grid item xs={11}>
                    <ProductInfoTitle sx={{ mt: 3 }} text={title} />
                </Grid>

                <Grid container alignItems="baseline" sx={{paddingTop:1}}>
                    <Grid item xs={4} sm={6} md={8} >
                        <ProductInfoPrice amount={price} currency={currency} />
                    </Grid>

                    <Grid item xs={4} sm={6} md={4}
                        sx={{ display: "flex", justifyContent: "flex-start", gap: "20px", alignItems:"baseline" }}>
                        {isLive && <ProductInfoStatus isLive={isLive} />}
                        <ProductInfoLikes amount={likes} />
                    </Grid>
                </Grid>

                <Grid container sx={{paddingTop:2}}>

                    <Grid sx={{pr:1}} xs={7} sm={12} md={7}>
                        <ProductInfoCreator
                            name={creator?.username}
                            avatar={creator?.avatar.url}
                            verified={creator?.verified}
                            id={creator?.id}
                             />
                    </Grid>

                    <Grid item sx={{pl: '10px', left: "10px"}} xs={4} sm={4} md={4}>
                        <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={"auction ended"} />

                    </Grid>

                </Grid>



            </Grid>
            <Stack className={classNames(styles["stats"])}>

            </Stack>

        </div>
    )
};