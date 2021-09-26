import {SearchIcon,MenuIcon} from '@heroicons/react/solid' 
import React from 'react'
import {useMoralis} from 'react-moralis';
import { Link } from 'react-router-dom';


function Header() {
   
    const {authenticate,isAuthenticated}=useMoralis();
    const authu= isAuthenticated? false : true;
    return (
        <header className="grid grid-cols-small-grid xl:grid-cols-header-grid sticky top-0 z-10 bg-my-black-color">
            <div className="cursor-pointer mt-7">
            <Link to="/">
            <img 
                src="/sleekxNFT.jpeg"
                className="h-120 w-190 object-contain"
                alt="banner"
            />
            </Link>
            </div>
            
            <div className="flex items-center 
            border-2 rounded-full
            py-2 drop-shadow-sm border-my-gold-color mr-9 mt-5 mb-9">
            
            <input 
            type="text" 
            placeholder="Start your search"
            className="ml-8 pl-2 bg-transparent outline-none border-none flex-grow
            text-sm bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary placeholder-my-gold-color bg-my-black-color "/>
            
            <SearchIcon className="inline-flex h-8 
             bg-gradient-to-r from-primary to-secondary text-my-black-color rounded-full 
            p-2 cursor-pointer md:mx-2 mx-2"/>
            </div>
            <div className="xl:hidden flex items-center flex-row-reverse mr-8">
            <MenuIcon className="h-12 w-12 bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary font-bold ml-3 cursor-pointer" />
            </div>
            <div className="hidden xl:inline-flex justify-between items-center -mt-3">
            {/* eslint-disable-next-line */}
            <Link to="/marketplace" className="bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary font-bold ml-3 cursor-pointer">Market Place</Link>
            {/* eslint-disable-next-line */}
            <Link to="/myitems" className="bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary font-bold cursor-pointer">My Items</Link>
            <Link to="/create">
            <button className="bg-gradient-to-r from-primary to-secondary text-my-black-color rounded-full pt-2 pb-2 pl-10 pr-10">Create</button>
            </Link>
            {
            authu?
            <button className={`bg-gradient-to-r from-primary to-secondary text-my-black-color rounded-full pt-2 pb-2 pl-3 pr-3 mr-5`} onClick = { () => authenticate()} >Connect Wallet</button>
            :
            <Link to="/profile">
            <button className={`bg-gradient-to-r from-primary to-secondary text-my-black-color rounded-full pt-2 pb-2 pl-10 pr-10 mr-5`} >Profile</button>
            </Link>
            }
            </div>
        </header>
    )
}

export default Header



