import React from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";

export default function Profile() {

    return (
        <div>
            <Header />
                <ProfileHero image={'https://nft-auction.herokuapp.com/uploads/0x72abed3186b65b29e4da3faaa926e74d1f763cc5_c3e6697515.jpg'} /> 
                <ProfileUser 
                name={"StoyankataMnogoBesen"} 
                info={"Gotov sym da umra no ne i da spra..."}
                avatar
                verified={true}
                />
            <Footer />
        </div>
    )
}