import React from 'react';
import Link from "next/link"

export default function Logo ({ type="default" }){
    const defaultLogo = "/images/logo.svg";
    const mutedLogo = "/images/logo-muted.svg"

    return (
        <Link href={"/"}>
        <img src={type !== "muted"? defaultLogo : mutedLogo}/>
        </Link>
    );
}
