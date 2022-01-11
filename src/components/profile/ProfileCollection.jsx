import React, {useState} from "react";
import styles from "./ProfileCollection.module.scss";
import classNames from "classnames";
import ProfileHero from "./ProfileHero";
import ProfileUser from "./ProfileUser";
import ProfileCollectionFilters from "./ProfileCollectionFilters";
import Card from "../card/Card";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

export default function ProfileCollection({ user, filters, items, setSort, setPrice}) {

    return (
        <div className={classNames(styles["profile-collection"])}>
            <ProfileHero image={user?.avatar?.backgroundUrl} />
            <Container>
                <ProfileUser name={user?.username} info={user?.info} avatar={user?.avatar?.url} verified={user?.verified} size={100} />

                <Grid container alignItems="baseline">
                    <Grid item xs={3}>
                        <Typography variant={"h3"} children={"Collection"} className={classNames(styles["title"])}/>
                    </Grid>

                    <Grid item xs={9}>
                        <ProfileCollectionFilters filters={filters} setSort={setSort} setPrice={setPrice} />
                    </Grid>
                </Grid>

                <Grid
                 container 
                 className={classNames(styles.cardsContainer)}
                 justifyContent='center'
                 alignItems="center"
                 direction="row"
                 spacing={2}
                 sx={{marginTop: "50px", marginBottom: "60px"}}>
                    {items.map(function (nft, index) {
                        if (index <= 3) {
                            return (
                                <Grid item key={index} className={classNames(styles['card'])}>
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
                    })}
                </Grid>


            </Container>

        </div>
    )
};

