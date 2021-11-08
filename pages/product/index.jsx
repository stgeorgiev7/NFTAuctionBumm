import React from "react";
import ProductImage from "../../src/components/product/ProductImage";
import dataNft from '../data/nfts.json';
import Head from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';

// export const getStaticProps = () => {

//     const data = dataNft;

//     return {
//         props: {nfts: data}
//     }
// };


export default function Product() {

    return (
        <>
        <Head />
        <ProductImage />
        <Footer />
        </>
    );
}