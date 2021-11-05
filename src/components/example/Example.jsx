import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Head from "../header/Header";
import Featured from "../featured/Featured";
import Trending from "../trending/Trending";
import TopCollectors from "../collectors/TopCollectors";
import How from "../how/How";
import Auctions from "../auctions/Auctions";
import Footer from "../footer/Footer";
import userImage from '../avatar/image/avatar.png'
import mediaImage from "../card/image/nft.jpg";


export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Head />

      <Featured items={[
        {
          image:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500',
          title: 'Breakfast',
          rows: 2,
          cols: 3,
          href: '/about'
        }, 
        {
          image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500',
          title: 'Burger',
          href: '/about'
        }, 
        {
          image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500',
          title: 'Camera',
          href: '/about'
        },
        {
          image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500',
          title: 'Coffea',
          href: '/about'
        },
        {
          image: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500',
          title: 'Hats',
          href: '/about'
        },
        {
          image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500',
          title: 'Honey',
          href: '/about'
        },
        {
          image: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500',
          title: 'Basketball',
          href: '/about'
        },
      ]} />

      <Trending cards={
        [
          {
            name: "Clock",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 1,
            currency: "ETH",
          },
          {
            name: "DOGE",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 2.3,
            currency: "ETH",
          },
          {
            name: "BTC",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 5,
            currency: "ETH",
          },
          {
            name: "Litecoin",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 10,
            currency: "ETH",
          }
        ]
      } />

      <TopCollectors collectors={[
        {
          name: 'Tarikata73',
          nftsCount: 73,
          avatar: undefined,
          verified: true,
        },
        {
          name: 'brendan_1',
          nftsCount: 52,
          avatar: undefined,
          verified: true,
        },
        {
          name: 'damiankata',
          nftsCount: 48,
          avatar: undefined,
          verified: true,
        },
        {
          name: 'JoniDep',
          nftsCount: 46,
          avatar: undefined,
          verified: true,
        },
        {
          name: 'Kondio',
          nftsCount: 45,
          avatar: undefined,
          verified: true,
        },
        {
          name: 'Shtilqn',
          nftsCount: 43,
          avatar: undefined,
          verified: true,
        },
        {
          name: 'Gloriq',
          nftsCount: 40,
          avatar: undefined,
          verified: true,
        },
        {
          name: 'Sofia Vergara',
          nftsCount: 38,
          avatar: undefined,
          verified: true,
        },
        {
          name: 'Toni_montana',
          nftsCount: 36,
          avatar: undefined,
          verified: true,
        },
        {
          name: 'LeoMessi10',
          nftsCount: 35,
          avatar: undefined,
          verified: true,
        },
        {
          name: 'Ivan_3',
          nftsCount: 34,
          avatar: undefined,
          verified: true,
        },
        {
          name: 'Lal',
          nftsCount: 33,
          avatar: undefined,
          verified: true,
        },
        
      ]}/>

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

      <Auctions cards={
        [
          {
            name: "Clock",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 1,
            currency: "ETH",
            timeLeft: 12000,
          },
          {
            name: "DOGE",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 2.3,
            currency: "ETH",
            timeLeft: 6000,
          },
          {
            name: "BTC",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 5,
            currency: "ETH",
            timeLeft: 12000,
          },
          {
            name: "Litecoin",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 10,
            currency: "ETH",
            timeLeft: 24000,
          }
        ]
      } />

      <Footer />
    </div>
  );
}
