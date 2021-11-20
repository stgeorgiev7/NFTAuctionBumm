import React from "react";
import styles from "./ProfileCollection.module.scss";
import classNames from "classnames";
import ProfileHero from "./ProfileHero";
import ProfileUser from "./ProfileUser";
import ProfilCollectionFilters from "./ProfileCollectionFilters";
import Card from "../card/Card";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import ProfileCollectionFilters from "./ProfileCollectionFilters";

export default function ProfileCollection({ user, filter, items }) {

    return (
        <div className={classNames(styles["profile-collection"])}>
            <Container>
                <ProfileHero image={'https://nft-auction.herokuapp.com/uploads/0x72abed3186b65b29e4da3faaa926e74d1f763cc5_c3e6697515.jpg'} />
                <ProfileUser />

                <Grid container>
                    <ProfileCollectionFilters />
                </Grid>
            </Container>

        </div>
    )
};

