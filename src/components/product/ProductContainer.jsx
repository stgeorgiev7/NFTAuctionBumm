import React from "react";
import styles from "./ProductContainer.module.scss";
import classNames from "classnames";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import ProductActions from "./ProductActions";
import ProductTabs from "./ProductTabs";
import { Grid } from "@mui/material";
import { Container } from "@mui/material"


export default function ProductContainer({ name, owner, price, currency, likes, auction_end, details, bids, source }) {

    return (
        <div className={classNames(styles["product-container"])}>
            <Grid container spacing={1}>

                <Grid item xs={6}>
                    <ProductImage url={source.url} />
                </Grid>

                <Grid item xs={5}>
                    <ProductInfo
                        title={name}
                        price={price}
                        currency={currency}
                        isLive={auction_end ? true : false}
                        likes={likes}
                        timeEnd={auction_end}
                        creator={owner}
                        onTimeEnd
                        
                    />

                    <ProductTabs text={details} bids={bids} />
                    <ProductActions
                        isLive={auction_end ? true : false}
                        currency={currency}
                        buyAmount={price}
                        bidAmount={price}
                        onBid={() => {alert(`You have placed a bid on ${name} for ${price} ${currency}!`)}}
                        onBuy={() => {alert(`You have bought ${name} for ${price} ${currency}`)}}
                        onTimeEnd={()=> {alert('auction ended')}}
                    />

                </Grid>
            </Grid>
        </div>
    );
};