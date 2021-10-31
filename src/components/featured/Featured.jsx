import React from "react";
import { Container } from "@mui/material";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./Featured.module.scss";
import classNames from "classnames";

export default function Featured({ items = [] }) {

    const router = useRouter();

    return (
        <Container>
            <ImageList
            sx={{ width: 1100, height: 450 }}
            variant="quilted"
            >
                {items.map((item) => (
                    <ImageListItem 
                    key={item.image}
                    cols={item.cols || 1}
                    rows={item.rows || 1}>
                        <img
                            src={item.image}
                            srcSet={item.image}
                            alt={item.title}
                            loading="lazy"
                            onClick= {()=>{router.push(item.href)}}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

        </Container>
    )
}