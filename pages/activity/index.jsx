import React from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Hero from "../../src/components/hero/Hero";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityListItem from "../../src/components/activity/ActivityListItem";
import ActivityList from "../../src/components/activity/ActivityList";

export default function Activity() {

    return (
        <div>
            <Header />
            <Hero text={"Activity"}/>
            <ActivityFilters filters={{ "sort": [{ "label": "Name (Ascending)", "value": 1 }, { "label": "Name (Descending)", "value": 2 }, { "label": "Price (Ascending)", "value": 4 }, { "label": "Price (Descending)", "value": 5 }], "price": [{ "label": "0.3 - 0.5 ETH", "value": 6 }, { "label": "0.5 - 2 ETH", "value": 7 }, { "label": "2- 3 ETH", "value": 8 }] }} />
            <ActivityList 
            items={[{"created_at":"2021-10-22T08:29:23.382Z","user":{"avatar":{"url":"/images/avatar.png"},"confirmed":false,"name":"Antonio Banderas"},"nft":{"name":"BTC","owner":{"username":"John Travolta","avatar":{"url":"/images/avatar.png"},"confirmed":true}},"type":"buy"},
            {"created_at":"2021-10-22T08:29:23.382Z","user":{"avatar":{"url":"/images/avatar.png"},"confirmed":false,"name":"Steven Seagal"},"nft":{"name":"BTC","owner":{"username":"John Wick","avatar":{"url":"/images/avatar.png"},"confirmed":true}},"type":"buy"}]} />

            <Footer />
        </div>
    )
};
