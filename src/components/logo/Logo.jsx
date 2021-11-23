import React from 'react';

export default function Logo ({ type="default" }){
    const defaultLogo = "/images/logo.svg";
    const mutedLogo = "/images/logo-muted.svg"

    return (
        <img src={type !== "muted"? defaultLogo : mutedLogo}/>
    );
}
