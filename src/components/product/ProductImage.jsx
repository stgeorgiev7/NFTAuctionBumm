import React, {useState} from "react";
import styles from './ProductImage.module.scss';
import classNames from "classnames";
import Head from "../header/Header";
import Footer from "../footer/Footer";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import Image from "next/image"

export default function ProductImage({ url }) {
    console.log(url);

    const [img, setImage] = useState(url);

    return (
        <div className='product-image'>
       
            <Image
            src={url}
            className='image'>

            </Image>

        </div>
    );
};
