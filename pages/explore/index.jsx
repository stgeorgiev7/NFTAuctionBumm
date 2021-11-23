import React from "react";
import {useState, useEffect} from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import Card from "../../src/components/card/Card";
import data from "../data/nfts.json";

export default function Explore() {

    const [exploreData, setExplore] = useState([]);
    const [exploreFilters, setFilters] = useState([]);

    useEffect( async() => {
        const data = await fetch(process.env.apiUrl + "/" + 'explore')
        .then((response) => response.json());

        setExplore(data.nfts);
        setFilters(data.filters);
        
    }, []);

    console.log(exploreData);

    return (
        <div>
            <Header />
            <Container maxWidth={"xl"}>
                <Grid container>
                    <Grid item xs={3}>
                        <ExploreTitle text={"Explore"} />
                    </Grid>

                    <Grid item xs={9}>
                        <ExploreFilters filters={{ "sort": [{ "label": "Name (Ascending)", "value": 1 }, { "label": "Name (Descending)", "value": 2 }, { "label": "Price (Ascending)", "value": 4 }, { "label": "Price (Descending)", "value": 5 }], "price": [{ "label": "0.3 - 0.5 ETH", "value": 6 }, { "label": "0.5 - 2 ETH", "value": 7 }, { "label": "2- 3 ETH", "value": 8 }] }} />

                    </Grid>
                </Grid>

                <Grid container>
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