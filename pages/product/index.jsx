import React from "react";
import ProductContainer from "../../src/components/product/ProductContainer";
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
            {/* <ProductInfo
                title={'Wooden pants'}
                creator={'Stoyan'}
                price={3}
                currency={'ETH'}
                likes={3500}
                timeEnd={"2022-10-11T12:04:48.511Z"}
                isLive={true} />
            <ProductTabs text={'nqkyv text'} bids={[{ "user": { "avatar": "/images/avatar.png", "name": "hrisi", "verified": true }, "amount": 30, "date": "2021-10-22T08:29:23.382Z" }, { "user": { "avatar": "/images/avatar.png", "name": "maxi", "verified": true }, "amount": 1000, "date": "2021-10-22T08:29:23.382Z" }]} />
            <ProductActions isLive={false} buyAmount={3} bidAmount={1} currency={'ETH'} /> */}

            <ProductContainer
                name={"Ergonomic Concrete Tuna"}
                owner={{ "username": "Justen_King18", "verified": true, "avatar": { "url": "https://nft-auction.herokuapp.com/uploads/thumbnail_0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg" } }}
                price={20} currency={"ETH"}
                likes={25}
                auction_end={"2022-09-02T20:43:19.149Z"}
                details={"asdasdads"}
                source={{ "url": "https://nft-auction.herokuapp.com/uploads/thumbnail_0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg" }}
                bids={[{ "user": { "info": 20, "name": "John", "verified": true, "avatar": "https://nft-auction.herokuapp.com/uploads/thumbnail_0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg" }, "date": "2021-10-22T08:29:23.382Z", "amount": 20 }]}
            />

            <Footer />


        </div>
    );
}