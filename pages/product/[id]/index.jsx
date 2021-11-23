import React from "react";
import Head from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Footer from "../../../src/components/footer/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ProductPage() {
   

    const [product, setProduct] = useState([]);
    const router = useRouter();


    useEffect(async () => {
        const crrid = router.query.id;
        const data = await fetch(process.env.apiUrl + "/nfts/" + crrid)
        .then((response) => response.json());

        setProduct(data);
    }, [])


    const productData = 
        <ProductContainer
         name={product?.name}
         owner={product?.owner}
         price={product?.price}
         currency={product?.currency}
         details={product?.details}
         source={product?.source?.url}
         likes={product?.likes}
         bids={product?.bids}
         />;


   console.log(product);
    return (
        <div>
            <Head />
            {productData}
            <Footer />
        </div>
    )
}