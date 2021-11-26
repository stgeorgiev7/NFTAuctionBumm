import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProfileCollection from "../../../src/components/profile/ProfileCollection";

export default function Profile() {


    const [profile, setProfile] = useState([]);
    const [nftsData, setNfts] = useState([]);
    const [profileFilters, setFilters] = useState([]);

    const router = useRouter();
    const crrid = router.query.id;

    useEffect(() => {

        fetchProfileData();

        async function fetchProfileData() {
            const res = await fetch(`${process.env.apiUrl}/users/${crrid}`)
            const data = await res.json();
            if (res.status === 200) {
                setProfile(data?.user);
                setNfts(data?.user?.nfts);
                setFilters(data?.filters);

            }

        }

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