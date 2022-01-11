import React from "react";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Hero from "../../src/components/hero/Hero";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import { Container, Grid } from "@mui/material";
import Card from "../../src/components/card/Card";

export default function Explore() {

    const [exploreData, setExplore] = useState([]);
    const [exploreFilters, setFilters] = useState();

    const [sortFilter, setSortFilter] = useState(0);
    const [priceFilter, setPriceFilter] = useState(0);

    useEffect( () => {
        getExploreData();

        async function getExploreData() {
            const res = await fetch(`${process.env.apiUrl}/explore`);
            if (res.status === 200) {
                const data = await res.json();

                setExplore(data.nfts);
                setFilters(data.filters);
            }
        }
    }, []);

    useEffect(() => {
        async function fetchFilters(path) {
            const response = await fetch(`${process.env.apiUrl}${path}`);
            if (response.status === 200) {
                const data = await response.json();
                setExplore(data.nfts);
            }
        };

        if (sortFilter !== 0 && priceFilter !== 0) {
            fetchFilters(`/explore?sort=${sortFilter}&price=${priceFilter}`);
        } else if (sortFilter !== 0) {
            fetchFilters(`/explore?sort=${sortFilter}`);
        } else if (priceFilter !== 0) {
            fetchFilters(`/explore?price=${priceFilter}`);
        };
    }, [sortFilter, priceFilter]);


    return (
        <div>
            <Header />
            <Container disableGutters >
                <Grid container sx={{marginTop: "50px"}} maxWidth='lg' className={classNames(styles["explore-head"])}>
                    <Grid item xs={3} className={classNames(styles["explore-title"])}>
                        <ExploreTitle text={"Explore"} />
                    </Grid>

                    <Grid item xs={12} className={classNames(styles["explore-hero"])}>
                        <Hero text={"Explore"} />
                    </Grid>

                    <Grid item xs={9} className={classNames(styles["explore-filters"])}>
                        <ExploreFilters filters={exploreFilters} setSort={setSortFilter} setPrice={setPriceFilter} />
                    </Grid>
                

                <Grid  item container
                justifyContent="space-between"
                spacing={2}
        
                className={classNames(styles["explore-grid"])}>
                    {exploreData.map(function (nft, index) {
                        return (
                            <Grid item 
                            key={index} 
                            xs={3} 
                            className={classNames(styles["explore-card"])}>
                                <Card
                                    name={nft.name}
                                    user={nft.owner}
                                    likes={nft.likes}
                                    mediaUrl={nft.source.url}
                                    price={nft.price}
                                    currency={nft.currency}
                                    timeLeft={nft.auction_end}
                                    id={nft.id}
                                    className={classNames(styles["card"])}
                                >
                                </Card>
                            </Grid>
                        )
                    }
                    )}
                </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}