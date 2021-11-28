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
  const [trendingFilters, setTrendingFilters] = useState();
  const [trendingSortFilter, setTrendingFilter] = useState(0);

  useEffect( () => {
    getTrendingData();

    async function getTrendingData() {
      const res = await fetch(`${process.env.apiUrl}/trending`);
      if (res.status === 200) {
        const data = await res.json();
        setTrendingCards(data.nfts);
        setTrendingFilters(data.filters);
      }
    }
  }, []);

  useEffect(() => {
    async function fetchTrendingFilters(path) {
      const res = await fetch(`${process.env.apiUrl}${path}`);
      if (res.status === 200) {
        const data = await res.json();
        setTrendingCards(data.nfts);
        console.log(trendingCards);
      };
    }

    if(trendingSortFilter !== 0) {
      fetchTrendingFilters(`/trending?sort=${trendingSortFilter}`);
    }
  }, [trendingSortFilter]);


  const [usersData, setUsersData] = useState([]);
  const [usersFilters, setUsersFilters] = useState();
  const [sortUsers, setUsersSort] = useState(0)

  useEffect(() => {
    getTopCollectorsData();

    async function getTopCollectorsData() {
        const res = await fetch(`${process.env.apiUrl}/top-collectors`);
        if (res.status === 200) {
          const data= await res.json();
          console.log(data);
          setUsersData(data.users);
          setUsersFilters(data.filters);
        }
    }
  }, []);

  useEffect(() => {
    async function fetchTopCollectorsData(path) {
      const res = await fetch(`${process.env.apiUrl}${path}`);
      if (res.status === 200) {
        const data = await res.json();
        setUsersData(data.users);
      }
    }

    if(sortUsers !== 0 ){
      fetchTopCollectorsData(`/top-collectors?sort=${sortUsers}`);
    }
  }, [sortUsers]);


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
      <Trending trendingCards={trendingCards} trendingFilters={trendingFilters} setFilters={setTrendingFilter}/>
      <TopCollectors collectors={usersData} filters={usersFilters} setFilters={setUsersSort} />
      <div style={{ backgroundColor: '#4E24F2', paddingTop: 10 }}>
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

      <Auctions cards={auctionData} filters={auctionFilters} />
      <Footer />
    </div>
  );
}
