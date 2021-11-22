import React from 'react';

export default function Logo ({ type }){
    
    return (
        <img src={type !== "muted"? './images/logo.svg' :'./images/logo-muted.svg'}/>
    );
}
