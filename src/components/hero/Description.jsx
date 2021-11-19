import React, {useState} from "react";
import styles from "./Description.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function Description({text, image}) {
    const [description, setDdescription] = useState(text);
    const [describedImage, setImage] = useState(image);

    return (
        <div>
            <Typography variant={"body1"} className={classNames(styles.text)}>
                {description}
            </Typography>

        </div>
    )
}
