import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Avatar.module.scss";
import defaultImg from "./image/avatar.png";
import verifiedImg from './image/verified.svg'
import { Badge } from "@mui/material";
import { Avatar as AvatarComp } from "@mui/material";


export default function Avatar({ url, size = 20, verified = false }) {
    const [badgeSize, badgeSizeSet] = useState(size - 30);

    const badgeImg = <img style={{height:badgeSize}} src={verifiedImg.src} ></img>;

    return (
        
        <Badge
            src={badgeImg}
            overlap='circular'
            badgeContent= {verified ? badgeImg : null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            style={{padding: '5px 10px 5px'}}
        >   
            <AvatarComp src={url ? url : defaultImg.src} sx={size}/>

        </Badge>
    )
};