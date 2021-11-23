import React from "react";
import {useState, useEffect} from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Hero from "../../src/components/hero/Hero";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityListItem from "../../src/components/activity/ActivityListItem";
import ActivityList from "../../src/components/activity/ActivityList";

export default function Activity() {

    const [activityData, setActivity] = useState([]);
    const [activityFilters, setFilters] = useState([]);

    useEffect( async() => {
        const data = await fetch(process.env.apiUrl + "/" + "activities")
        .then((response) => response.json());

        setActivity(data.activities);
        setFilters(data.filters);


    }, []);

    console.log(activityFilters);

    return (
        <div>
            <Header />
            <Hero text={"Activity"}/>
            <ActivityFilters filters={activityFilters} />
            <ActivityList 
            items={activityData}
            />
        

            <Footer />
        </div>
    )
};
