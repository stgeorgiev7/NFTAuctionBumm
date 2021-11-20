import React from "react";
import styles from "./ProfileCollection.module.scss";
import classNames from "classnames";
import ProfileHero from "./ProfileHero";
import ProfileUser from "./ProfileUser";
import ProfilCollectionFilters from "./ProfileCollectionFilters";
import Card from "../card/Card";
import {Grid} from "@mui/material";
import {Container} from "@mui/material";
import {Typography} from "@mui/material";

export default function ProfileCollection({user, filter, items}) {

    return (
        <div className={classNames(styles["profile-collection"])}>

        </div>
    )
};

