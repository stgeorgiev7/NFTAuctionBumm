import React from "react";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import dataFeatured from "./data/featured.json";
import dataTrending from "./data/trending.json";
import dataUsers from "./data/users.json";
import dataNfts from "./data/nfts.json";
import ProductImage from "../src/components/product/ProductImage";
import ProductInfoTitle from "../src/components/product/ProductInfoTitle";
import ProductInfoPrice from "../src/components/product/ProductInfoPrice";
import ProductInfoStatus from "../src/components/product/ProductInfoStatus";
import ProductInfoLikes from "../src/components/product/ProductInfoLikes";
import ProductInfoCreator from "../src/components/product/ProductInfoCreator";
import ProductInfoTimer from "../src/components/product/ProductInfoTimer";
import ProductInfo from "../src/components/product/ProductInfo";
import Link from "next/link";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  useEffect(() => {
    setFeaturedCards(dataFeatured);
  }, []);

  const [trendingCards, setTrendingCards] = useState([]);
  useEffect(() => {
    setTrendingCards(dataTrending);
  }, []);

  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    setUsersData(dataUsers);
  }, []);

  const [auctionData, setAuctionData] = useState([]);
  useEffect(() => {
    setAuctionData(dataNfts);
  }, []);


  return (
    <div>
      <Header />
      <Featured items={trendingCards} />
      <Trending cards={featuredCards} />
      <TopCollectors collectors={usersData.sort((a, b) => b.nfts.length - a.nfts.length)} />
      <div style={{backgroundColor: '#4E24F2', paddingTop: 10}}>
      <How
        description='Discover, collect and sell extraoridanry NFTs on the world`s first and largest NFT marketplace. There are three things you`ll need in place to open your account and start buying or selling NFTs on BUM.'
        title='HOW IT WORKS'
        items={[{
          title: 'digital currency',
          description: 'You can get ETH, the digital currency that fuels transaction on the Ethereum blockchain, from a digital currency exchange.'
        },
        {
          title: 'crypto wallet',
          description: 'A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.'
        },
        {
          title: 'BUM',
          description: 'Let`s connect your wallet to BUM, edit your profile and begin interacting in the space.'
        }

        ]}
        link='https://google.com/'
      />
      </div>

      <Auctions cards={auctionData} />
      <Footer />
    </div>
  );
}
