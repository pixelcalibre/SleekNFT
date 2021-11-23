import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React, { useState, useEffect } from 'react'
import { useMoralisCloudFunction,useMoralis,useMoralisQuery } from 'react-moralis'
import Moralis from 'moralis'; 
// import { useMoralis} from 'react-moralis';
// import {marketplaceContractAbi} from './abi.js';

// const MARTKETPLACE_CONTRACT_ADDRESS="0x5F93BfD7529f01E32DA50A0450bb88B3fe20720b";



const MarketPlace = () => {
    const {user} = useMoralis();
    const {data} = useMoralisCloudFunction("getItems");
    const [title, setTitle] = useState('Empty');
    const [description, setDescription] = useState('No NFTs in the market place');
    const [price,setPrice] = useState(0);
    const [source, setSource] = useState('/ethbanner1.svg');
    const [seller,setSeller] = useState('Unknown');
    const [count, setCount] = useState(0);

    const { data1} = useMoralisQuery(
        "SoldItems",{live:true});
    console.log(data1);
    // const soldItemsQuery = new Moralis.Query('SoldItems');
    // const soldItemsSubscription = soldItemsQuery.subscribe();


      useEffect(()=>{
        if(data){
        fetch(data[count].tokenuri)
        .then( res => res.json())
        .then( nft => {
            setTitle(nft.name);
            setDescription(nft.description);
            setSource(nft.image);
            setPrice(data[count].askingPrice);
            setSeller(data[count].sellerUsername);
        });
    }
    },);

 console.log(data);
    return (
        
        <div className="relative h-screen
        bg-gradient-to-r from-primary to-secondary ">
           <h1 className="text-my-black-color text-3xl font-bold px-640 pt-10">Explore NFTs</h1>  
           <div className="absolute top-130 left-500 bg-my-black-color p-5 rounded-md">
               <div className="object-contain">
               <img src={source} alt="your nft" className="h-350 w-350 p-5 pb-0" />
               </div>
               <div>
               <div className="flex justify-evenly">
               <h3 className="p-3 text-center">{title}</h3>
               <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-my-black-color m-2 px-3 py-3 rounded-2xl">{price} SLEEK</button>
               </div>
                   
                   <p className="p-3">{description}</p>
               </div>
           </div>
           <div className="absolute text-my-black-color top-180 left-400 cursor-pointer" onClick={() => (count > 0 ? setCount(count-1): setCount(data.length-1))}>
           <ArrowBackIosIcon  fontSize="large" />
           </div>
           <div className="absolute text-my-black-color top-180 right-450 cursor-pointer" onClick={() => (count === data.length-1? setCount(0) : setCount(count+1))}>
           <ArrowForwardIosIcon fontSize="large"/> 
           </div>
           <div className="absolute top-640 left-700 py-2 px-4 rounded-full bg-my-black-color">
               <h1 className="text-center text-my-gold-color">{count+1}</h1>
           </div>
           
           
       </div>
    )
}

export default MarketPlace

