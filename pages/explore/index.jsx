import React from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import ExploreTitle from "../../src/components/explore/ExploreTitle";

export default function Explore() {

    return(
        <div>
            <Header />
                <ExploreTitle text={"Explore"} />
            <Footer />
        </div>
    )
}