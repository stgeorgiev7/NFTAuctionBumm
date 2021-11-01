import React from "react";
import User from "../user/User";

export default function Collector({type}) {
    console.log(type);

    return (
       <div className='container'>
           <User 
           name={type.name}
           info={`${type.nftsCount} items`}
           avatar={type.avatar}
           verified={type.verified}
           />
       </div>
    );
};