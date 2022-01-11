import React from "react";
import Head from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Footer from "../../../src/components/footer/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ProductPage() {
    const router = useRouter();
    const crrid = router.query.id;

    const [product, setProduct] = useState([]);

    useEffect(async () => {
        const data = await fetch(process.env.apiUrl + "/nfts/" + crrid)
        .then((response) => response.json());

        setProduct(data);
    }, [crrid])

    console.log(product);

    const productData = 
        <ProductContainer
         name={product?.name}
         owner={product?.owner}
         price={product?.price}
         currency={product?.currency}
         auction_end={product?.auction_end}
         details={product?.details}
         source={product?.source?.url}
         likes={product?.likes}
         bids={product?.bids}
         />;

    return (
        <div>
            <Head />
            {productData}
            <Footer />
        </div>
    )
}