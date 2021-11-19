import React from "react";
import Head from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Footer from "../../../src/components/footer/Footer";
import data from "../../data/nfts.json";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function ProductPage() {
    const router = useRouter();
    const crrid = Number(router.query.id);

    let nft;
    let nftId;

    const [nftData, setNftData] = useState([]);
    useEffect(() => {
        setNftData(data);
    }, []);

    for(let i=0; i < nftData.length; i++) {
        if(crrid === nftData[i].id) {
            nftId = nftData[i].id;
            nft = nftData[i];
        }
    }

    console.log(nft);
   
    return (
        <div>
            <Head />
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
    )
}