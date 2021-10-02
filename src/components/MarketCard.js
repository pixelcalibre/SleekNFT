import React from 'react';

const MarketCard = ({name,description,source}) => {
    return (
        <div className="bg-my-black-color w-72 h-80 mx-10">
        <div className=" object-cover py-3 px-2 content-center m-auto">
        <img 
        alt={name}
        src={source}
        />
        </div>
        <div className="text-center px-2 py-2">
        <h1>{name}</h1>
        <p>{description}</p>
        </div>
        </div>
    )
}


export default MarketCard
