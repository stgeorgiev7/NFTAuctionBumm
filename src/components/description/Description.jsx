import React, {useState} from "react";
import styles from "./Description.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function Description({text, image}) {
    const [description, setDdescription] = useState(text);
    const [describedImage, setImage] = useState(image);

    return (
        <div className={classNames(styles.description)}>
            <Typography variant={"body1"} className={classNames(styles.text)} children={description} />
            <img src={describedImage} className={classNames(styles.image)}></img>
        </div>
    )
}
