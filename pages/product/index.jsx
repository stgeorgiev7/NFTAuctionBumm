import React from "react";
import ProductImage from "../../src/components/product/ProductImage";
import ProductInfoTitle from "../../src/components/product/ProductInfoTitle";
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
        <ProductInfoTitle text={'Wooden pants'} />
        <ProductImage 
        url={'https://nft-auction.herokuapp.com/uploads/0xa5192c2be7bf2603bbbae09c340dfeac07275a7a_93a8d3aa6f.jpg'} />
        <Footer />
        </>
    );
}