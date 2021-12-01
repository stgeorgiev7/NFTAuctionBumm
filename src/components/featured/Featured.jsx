import React from "react";
import { Container } from "@mui/material";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./Featured.module.scss";
import classNames from "classnames";
import Link from "next/link";

export default function Featured({ items = [] }) {
    const router = useRouter();

    return (
        <Container className={classNames(styles.FeaturedContainer)}>
            <ImageList
                variant="quilted"
                cols={6}
                gap={10}
            >
                {items.map((item, index) => (
                    <Link href={"/product/" + item.id} key={item.id}>
                        <ImageListItem
                            cols={index === 0 ? 3 : 1}
                            rows={index === 0 ? 2 : 1}
                        >

                            <img
                                src={item.source.url}
                                srcSet={item.image}
                                alt={item.title}
                                loading="lazy"
                                onClick={() => { router.push("/product/" + item.id) }}
                                className={classNames(styles.featuredImage)}

                            />
                        </ImageListItem>
                    </Link>


                ))}
            </ImageList>

        </Container >
    )
}