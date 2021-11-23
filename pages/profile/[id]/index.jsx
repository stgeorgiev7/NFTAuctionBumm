import React from "react";
import {useState, useReact} from "react";
import { useRouter } from "next/router";
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProfileCollection from "../../../src/components/profile/ProfileCollection";

export default function Profile() {
    const router = useRouter();
    const crrid = router.query.id;


}