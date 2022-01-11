import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import { Card as CardContainer } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";
import mediaImage from "./image/nft.jpg";
import millify from "millify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Timer from "../timer/Timer";
import Link from "next/link";

export default function Card({
  name,
  user,
  likes = 0,
  mediaUrl,
  price,
  currency,
  timeLeft = 0,
  id,
}) {
  const [img, setImage] = useState(mediaUrl ? mediaUrl : mediaImage.src);
  const [millifiedLikes, setLikes] = useState(millify(likes));
  const [countDownTime, setCountDownTimer] = useState(
    timeLeft !== 0 || timeLeft === undefined ? <Timer time={timeLeft} /> : null
  );

  return (
    <CardContainer
      sx={{ transition: "0.5s" }}
      style={
        countDownTime
          ? {
              backgroundColor: "#1A2E2D",
            }
          : { backgroundColor: "#181828"}
      }
      className={
        timeLeft !== 0 && timeLeft !== undefined
          ? classNames(styles.live)
          : classNames(styles.card)
      }
    >
      <Avatar
        url={user?.avatar?.url}
        size={30}
        verified={user?.verified}
        className={classNames(styles.avatar)}
      />
      <Link href={"/product/" + id}>
        <CardMedia
          component="img"
          image={img}
          height={280}
          width={290}
          className={classNames(styles.cardImage)}
        ></CardMedia>
      </Link>

      {countDownTime}

      <CardContent
        style={{ display: "flex", justifyContent: "space-between" }}
        className={classNames(styles.cardInfo)}
      >
        <div>
          <Typography className={classNames(styles.Card_title)}>
            {name}
          </Typography>
          <Typography className={classNames(styles.price)}>
            ~{price} {currency}
          </Typography>
        </div>
        <Chip
          className={classNames(styles.likes)}
          label={millifiedLikes}
          icon={
            <FavoriteIcon
              style={{ fontSize: "13", justiFyContent: "flex-start" }}
            />
          }
          variant="outlined"
          color="success"
        />
      </CardContent>
    </CardContainer>
  );
}
