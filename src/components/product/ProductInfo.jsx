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


export default function ProductInfo({ title, creator, price, currency, likes, onTimeEnd, timeEnd, isLive }) {

    return (
        <div clases={classNames(styles["product-info"])}>

                    <Stack className={classNames(styles["stats"])}>
                        <ProductInfoTitle text={title} />
                        <ProductInfoPrice amount={price} currency={currency} />
                        <ProductInfoStatus isLive={isLive} />
                        <ProductInfoLikes amount={likes} />
                        <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={"auction ended"} />
                        <ProductInfoCreator name={creator.username} avatar={creator.avatar} verified={creator.verified}/>

                    </Stack>

        </div>
    )
};