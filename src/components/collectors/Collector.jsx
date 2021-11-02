import React from "react";
import User from "../user/User";

export default function Collector({name, nftsCount, avatar, verified, type}) {
    return (
       <div className='container'>
           <User 
           name={name}
           info={`${nftsCount} items`}
           avatar={avatar}
           verified={verified}
           className={type}
           />
       </div>
    );
};