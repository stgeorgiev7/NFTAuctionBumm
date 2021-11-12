import React from "react";
import ProductImage from "../../src/components/product/ProductImage";
import ProductInfoTitle from "../../src/components/product/ProductInfoTitle";
import ProductInfoPrice from "../../src/components/product/ProductInfoPrice";
import ProductInfoStatus from "../../src/components/product/ProductInfoStatus";
import ProductInfoLikes from "../../src/components/product/ProductInfoLikes";
import ProductInfoCreator from "../../src/components/product/ProductInfoCreator";
import ProductInfoTimer from "../../src/components/product/ProductInfoTimer";
import {ProductInfo as ProductContainer} from "../../src/components/product/ProductInfo";
import dataNft from '../data/nfts.json';
import Head from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';



// export const getStaticProps = () => {

//     const data = dataNft;

//     return {
//         props: {nfts: data}
//     }
// };


export default function ProductInfo() {

    return (
        <div>
            <Head />
            <ProductContainer
                title={'Wooden pants'}
                creator={'Stoyan'}
                price={3}
                currency={'ETH'}
                likes={3500}
                timeEnd={"2022-10-11T12:04:48.511Z"}
                isLive={true} />
            <Footer />
        </div>
    );
}