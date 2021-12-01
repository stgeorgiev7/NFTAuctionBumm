import React from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Hero from "../../src/components/hero/Hero";
import Description from "../../src/components/description/Description";

 
export default function HowPage() {

    return (
        <div>
            <Header />
                <Hero text={"how it works"}/>
                <Description 
                text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, aspernatur fugiat ullam nemo est quia delectus totam ab, labore commodi magni vel ipsam earum minus pariatur suscipit! Alias, consectetur optio.'}
                image={'https://nft-auction.herokuapp.com/uploads/0x72abed3186b65b29e4da3faaa926e74d1f763cc5_c3e6697515.jpg'} 
                
                />
            <Footer />
        </div>
    )
}