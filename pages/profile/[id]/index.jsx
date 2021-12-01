import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProfileCollection from "../../../src/components/profile/ProfileCollection";

export default function Profile() {
    const [profile, setProfile] = useState([]);
    const [nftsData, setNfts] = useState([]);
    const [filters, setFilters] = useState();
    const [sortFilter, setSort] = useState(0);
    const [priceFilter, setPrice] = useState(0);

    const router = useRouter();
    const crrid = router.query.id;

    useEffect(() => {
        getProfileData();

        async function getProfileData() {

            const res = await fetch(`${process.env.apiUrl}/users/${crrid}`)
            if (res.status === 200) {
                const data = await res.json();
                setProfile(data?.user);
                setNfts(data?.user?.nfts);
                setFilters(data?.filters);
            }
        }

    });

    useEffect(() => {
        async function fetchUserData(path) {
            const res = await fetch(`${process.env.apiUrl}${path}`);
            if (res.status === 200) {
                const data = await res.json();
                setProfile(data?.nfts)
            }
        }

        if (sortFilter !== 0 && priceFilter !== 0) {
            fetchUserData(`/users/${crrid}?sort=${sortFilter}&price=${priceFilter}`);
        } else if (sortFilter !== 0) {
            fetchUserData(`/users/${crrid}?sort=${sortFilter}`);
        } else if (priceFilter !== 0) {
            fetchUserData(`/users/${crrid}?price=${priceFilter}`)
        }
    }, [sortFilter, priceFilter]);

    return (
        <div>
            <Header />
            <ProfileCollection
                user={profile}
                filters={filters}
                setSort={setSort}
                setPrice={setPrice}
                items={nftsData}
            />
            <Footer />
        </div>

    )
}