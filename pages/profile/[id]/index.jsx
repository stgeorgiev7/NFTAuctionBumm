import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProfileCollection from "../../../src/components/profile/ProfileCollection";

export default function Profile() {
    const router = useRouter();
    const crrid = router.query.id;

    const [profile, setProfile] = useState([]);
    const [nftsData, setNfts] = useState([]);
    const [profileFilters, setFilters] = useState([]);

    useEffect(async () => {
        const data = await fetch(process.env.apiUrl + "/" + "users" + "/" + crrid)
        .then((response) => response.json());

        setProfile(data?.user);
        setNfts(data?.user?.nfts);
        setFilters(data?.filters);

    }, [crrid])

    return (
        <div>
            <Header />
            <ProfileCollection
            user={profile}
            filters={profileFilters}
            items={nftsData}
        />
            <Footer />
        </div>

    )
}