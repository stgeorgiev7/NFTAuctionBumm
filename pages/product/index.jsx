import React from "react";
import ProductImage from "../../src/components/product/ProductImage";
import ProductInfoTitle from "../../src/components/product/ProductInfoTitle";
import ProductInfoPrice from "../../src/components/product/ProductInfoPrice";
import ProductInfoStatus from "../../src/components/product/ProductInfoStatus";
import ProductInfoLikes from "../../src/components/product/ProductInfoLikes";
import ProductInfoCreator from "../../src/components/product/ProductInfoCreator";
import ProductInfoTimer from "../../src/components/product/ProductInfoTimer";
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
        <ProductInfoPrice amount={3} currency={'ETH'} />
        <ProductInfoStatus />
        <ProductInfoLikes amount={2500}/>
        <ProductInfoTimer timeEnd={"2022-10-11T12:04:48.511Z"} onTimeEnd={"auction ended"}/>
        
        <ProductInfoCreator name={'Stoyan'} />
        <ProductImage 
        url={'https://nft-auction.herokuapp.com/uploads/0xa5192c2be7bf2603bbbae09c340dfeac07275a7a_93a8d3aa6f.jpg'} />
        <Footer />
        </>
    );
}