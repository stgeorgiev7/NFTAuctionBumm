import React from "react";
import ProductImage from "../../src/components/product/ProductImage";
import ProductInfoTitle from "../../src/components/product/ProductInfoTitle";
import ProductInfoPrice from "../../src/components/product/ProductInfoPrice";
import ProductInfoStatus from "../../src/components/product/ProductInfoStatus";
import ProductInfoLikes from "../../src/components/product/ProductInfoLikes";
import ProductInfoCreator from "../../src/components/product/ProductInfoCreator";
import ProductInfoTimer from "../../src/components/product/ProductInfoTimer";
import ProductInfo from "../../src/components/product/ProductInfo";
import ProductTabs from "../../src/components/product/ProductTabs";
import ProductActions from "../../src/components/product/ProductActions";
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
        <div>
            <Head />
            <ProductInfo
                title={'Wooden pants'}
                creator={'Stoyan'}
                price={3}
                currency={'ETH'}
                likes={3500}
                timeEnd={"2022-10-11T12:04:48.511Z"}
                isLive={true} />

            <ProductActions isLive={true} buyAmount={3} bidAmount={1} currency={'ETH'} />

            <Footer />
        </div>
    );
}