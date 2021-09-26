import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className="flex bg-my-black-color py-20 px-20 xl:px-40 ">
            <div className="lg:max-w-300">
                <h1 className="bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary m-3 text-8xl font-bold md:pb-4">Collect <br/>Digital Arts</h1>
                <h3 className="bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary m-3 text-xl">Create, Buy and Sell NFTs.</h3>
                <Link to="/create">
                <button className="bg-gradient-to-r from-primary to-secondary text-my-black-color ml-3 rounded-full py-4 px-10 text-xl">Create</button>
                </Link>
            </div>
            <div className="hidden xl:inline-flex xl:ml-72 " >
            <img 
            src="/ethbanner3.svg"
            className="object-contain h-400 w-300"
            alt="banner"
            />
            </div>
            
            
        </div>
    )
}

export default Banner





