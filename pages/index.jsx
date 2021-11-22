import React from "react";
import { useState, useEffect } from "react";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);

  useEffect(async () => {
    const dataFeatured = await fetch(process.env.apiUrl + '/featured')
    .then((response) => response.json());

    setFeaturedCards(dataFeatured);
  }, []);


  const [trendingCards, setTrendingCards] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);

  useEffect(async () => {
    const dataTrending = await fetch(process.env.apiUrl + "/" + "trending")
    .then((response) => response.json());

    setTrendingCards(dataTrending?.nfts);
    setTrendingFilters(dataTrending?.filters?.sort);
  }, []);
  

  const [usersData, setUsersData] = useState([]);
  const [usersFilters, setUsersFilters] = useState([]);
  
  useEffect(async () => {
    const dataUsers = await fetch(process.env.apiUrl + "/" + "top-collectors")
    .then((response) => response.json());

    setUsersData(dataUsers?.users);
    setUsersFilters(dataUsers?.filters?.sort);
  }, []);


  const [auctionData, setAuctionData] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState([]);

  useEffect(async () => {
    const dataNfts = await fetch(process.env.apiUrl + "/" + "live-auctions")
    .then((response) => response.json());
    
    setAuctionData(dataNfts?.nfts);
    setAuctionFilters(dataNfts?.filters?.price);
  }, []);

  return (
    <div>
      <Header />
      <Featured items={featuredCards?.nfts} />
      <Trending trendingCards={trendingCards} trendingFilters={trendingFilters}/>
      <TopCollectors collectors={usersData} filters={usersFilters}/>
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

      <Auctions cards={auctionData} filters={auctionFilters}/> 
      <Footer />
    </div>
  );
}
