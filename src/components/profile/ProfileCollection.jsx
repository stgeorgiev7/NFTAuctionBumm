import React from "react";
import styles from "./ProfileCollection.module.scss";
import classNames from "classnames";
import ProfileHero from "./ProfileHero";
import ProfileUser from "./ProfileUser";
import ProfileCollectionFilters from "./ProfileCollectionFilters";
import Card from "../card/Card";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

export default function ProfileCollection({ user, filters, items }) {

    const cardsData = items.map(function (nft, index) {
        if (index <= 3) {
            return (
                <Grid item key={index} xs={3}>
                    <Card
                        name={nft.name}
                        user={user}
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
    });

    return (
        <div className={classNames(styles["profile-collection"])}>
            <ProfileHero image={'https://nft-auction.herokuapp.com/uploads/0x72abed3186b65b29e4da3faaa926e74d1f763cc5_c3e6697515.jpg'} />
            <Container>
                <ProfileUser name={user.name} info={user.info} avatar={user.avatar} verified={user.verified} />

                <Grid container>
                    <Grid item xs={3}>
                        <Typography variant={"h3"} children={"Collection"} />
                    </Grid>

                    <Grid item xs={9}>
                        <ProfileCollectionFilters filters={filters} />
                    </Grid>
                </Grid>

                <Grid container justifyContent='center'>
                    {cardsData}
                </Grid>


            </Container>

        </div>
    )
};

