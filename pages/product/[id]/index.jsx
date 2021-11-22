import React from "react";
import Head from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Footer from "../../../src/components/footer/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ProductPage() {
    const router = useRouter();
    const crrid = router.query.id;

    const [productData, setProduct] = useState([]);

    useEffect(async () => {
        const data = await fetch(process.env.apiUrl + "/nfts/" + crrid)
        .then((response) => response.json());

        setProduct(data);
    }, [])

    const product = 
        <ProductContainer
         name={productData?.name}
         owner={{ "username": "Justen_King18", "verified": true, "avatar": { "url": "https://nft-auction.herokuapp.com/uploads/thumbnail_0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg" } }}
         price={productData?.price}
         currency={productData?.currency}
         details={productData?.details}
         source={productData?.mediaUrl}
         bids={[{ "user": { "info": 20, "name": "John", "verified": true, "avatar": "https://nft-auction.herokuapp.com/uploads/thumbnail_0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg" }, "date": "2021-10-22T08:29:23.382Z", "amount": 20 }]}
         />;


   console.log(productData);
    return (
        <div>
            <Head />
            {product}
            <Footer />
        </div>
    )
}