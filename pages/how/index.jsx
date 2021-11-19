import React from "react";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Hero from "../../src/components/hero/Hero";

export default function HowPage() {

    return (
        <div>
            <Header />
                <Hero text={"how it works"}/>
            <Footer />
        </div>
    )
}