import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './Card.module.scss';
import classNames from 'classnames';
import Avatar from '../avatar/Avatar';
import { Card as CardContainer } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { Chip } from '@mui/material';
import mediaImage from './image/nft.jpg';
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Timer from '../timer/Timer';
import ProductImage from '../product/ProductImage';
import Link from 'next/link';

export default function Card({ name, user, likes = 0, mediaUrl, price, currency, timeLeft = 0, id }) {

    const [img, setImage] = useState(mediaUrl ? mediaUrl : mediaImage.src);
    const [millifiedLikes, setLikes] = useState(millify(likes));
    const [countDownTime, setCountDownTimer] = useState(timeLeft !== 0 || timeLeft === undefined ? <Timer time={timeLeft} /> : null);
    const [currentId, setId] = useState(String(id));

    return (
        <CardContainer
            sx={{ width: 270, height: 420 }}
            style={countDownTime ? { backgroundColor: '#1A2E2D', borderRadius: '25px', paddingBottom: '30px' } : { backgroundColor: '#181828', borderRadius: '25px' }}
            className={timeLeft !== 0 && timeLeft !== undefined? classNames(styles.live) : ''}>
            <Avatar url={user?.avatar?.url} size={40} verified={user?.verified} />
            <Link href={'/product/' + id}>
                <CardMedia
                    component="img"
                    image={img}
                    height={270}
                    width={270}
                    className={classNames(styles.cardImage)}

                >
                </CardMedia>
            </Link>

            {countDownTime}

            <CardContent style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px', paddingTop: 5 }}>
                <div>
                    <p className={classNames(styles.Card_title)}>{name}</p>
                    <p className={classNames(styles.price)}>~{price} {currency}</p>
                </div>
                <p className={classNames(styles.likes)}>
                    <FavoriteIcon fontSize={'small'} />  {millifiedLikes}
                </p>

            </CardContent>

            {/* <div className={classNames(styles.infoContainer)}>
                <div>

                </div>
                <p className={classNames(styles.likes)}> <FavoriteIcon fontSize={'small'} />
                    {millifiedLikes}</p>
            </div> */}

        </CardContainer >
    )
}