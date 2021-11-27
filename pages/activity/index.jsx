import React from "react";
import { useState, useEffect } from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Hero from "../../src/components/hero/Hero";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityListItem from "../../src/components/activity/ActivityListItem";
import ActivityList from "../../src/components/activity/ActivityList";

export default function Activity() {

    const [activityData, setActivity] = useState([]);
    const [activityFilters, setFilters] = useState();

    const [sortFilter, setSortFilter] = useState(0);
    const [typeFilter, setTypeFilter] = useState(0)

    useEffect(() => {
        getActivitiesData();

        async function getActivitiesData() {
            const res = await fetch(`${process.env.apiUrl}/activities`);
            if (res.status === 200) {
                const data = await res.json();
                setActivity(data.activities);
                setFilters(data.filters);
            }
        }

    }, []);

    useEffect(() => {
        async function fetchFilters(path) {
            const res = await fetch(`${process.env.apiUrl}${path}`);
            if (res.status === 200) {
                const data = await res.json();
                setActivity(data.activities);
                
            }
        };

        if (sortFilter !== 0 && typeFilter !== 0 ) {
            fetchFilters(`/activities?sort=${sortFilter}&type=${typeFilter}`);
        } else if (sortFilter !== 0) {
            fetchFilters(`/activities?sort=${sortFilter}`);
        } else if (typeFilter !== 0) {
            fetchFilters(`/activities?type=${typeFilter}`)
        }
    }, [sortFilter, typeFilter]);

    return (
        <div>
            <Header />
            <Hero text={"Activity"} />
            <ActivityFilters filters={activityFilters} setSort={setSortFilter} setType={setTypeFilter}/>
            <ActivityList
                items={activityData}
            />


            <Footer />
        </div>
    )
};
