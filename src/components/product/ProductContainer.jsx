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
            <Grid container 
            spacing={6} 
            maxWidth="lg"
            justifyContent="center"
            className={classNames(styles["product-grd"])}>

                <Grid item 
                xs={6} sm={6} md={6} 
                className={classNames(styles["product-image"])}>
                    <ProductImage url={source} />
                </Grid>

                <Grid item
                 xs={6} sm={6} md={6}
                 className={classNames(styles["product-details"])}>
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

                    <ProductTabs 
                    text={details} 
                    bids={bids} 
                    className={classNames(styles["product-tabs"])}
                    />
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