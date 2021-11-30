import React from "react";
import { useState, useEffect } from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
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
            <Container>
                <Grid container sx={{marginTop: "50px"}}>
                    <Grid item xs={3}>
                        <ExploreTitle text={"Explore"} />
                    </Grid>

                    <Grid item xs={9}>
                        <ExploreFilters filters={exploreFilters} setSort={setSortFilter} setPrice={setPriceFilter} />
                    </Grid>
                </Grid>

                <Grid container
                justifyContent="space-between"
                rowSpacing={2}
                maxWidth="xl"
                sx={{margin: "30px 0 30px"}}>
                    {exploreData.map(function (nft, index) {
                        return (
                            <Grid item key={index} xs={3}>
                                <Card
                                    name={nft.name}
                                    user={nft.owner}
                                    likes={nft.likes}
                                    mediaUrl={nft.source.url}
                                    price={nft.price}
                                    currency={nft.currency}
                                    timeLeft={nft.auction_end}
                                    id={nft.id}
                                >
                                </Card>
                            </Grid>
                        )
                    }
                    )}
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}