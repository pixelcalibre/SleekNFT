import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React, { useState, useEffect } from 'react'
import { useMoralisCloudFunction,useMoralis,useMoralisQuery } from 'react-moralis'
import Moralis from 'moralis'; 
import {marketplaceContractAbi} from './abi.js';

const MARTKETPLACE_CONTRACT_ADDRESS="0xD09eEd06f09db762F181f37d354c4B6debf9fd31";



const MarketPlace = () => {
    const {enableWeb3, web3,isAuthenticated,user} = useMoralis();
    const {data} = useMoralisCloudFunction("getItems");
    const [title, setTitle] = useState('Empty');
    const [description, setDescription] = useState('No NFTs in the market place');
    const [price,setPrice] = useState(0);
    const [source, setSource] = useState('/ethbanner1.svg');
    const [seller,setSeller] = useState('Unknown');
    const [count, setCount] = useState(0);
    const marketplaceContract = new web3.eth.Contract(marketplaceContractAbi, MARTKETPLACE_CONTRACT_ADDRESS);
    const items = JSON.parse(JSON.stringify(data));
    // const onItemSold = () => {
    //             console.log("Item sold");
    //         }
    // const soldItemsQuery = new Moralis.Query('SoldItems');
    // const soldItemsSubscription = soldItemsQuery.subscribe();
    // soldItemsSubscription.on("create", onItemSold);
    // useEffect(async () => {
    //     const onItemSold = () => {
    //         console.log("Item sold");
    //     }
    //     let query = new Moralis.Query("Data");
    //     let subscription = await query.subscribe();
    //     subscription.on("create", onItemSold);
    //   }, []);
    

      useEffect(()=>{
        if (isAuthenticated) {
            enableWeb3();
          }
        if(items){
        fetch(items[count].tokenuri)
        .then( res => res.json())
        .then( nft => {
            setTitle(nft.name);
            setDescription(nft.description);
            setSource(nft.image);
            setPrice(items[count].askingPrice);
            setSeller(items[count].sellerUsername);
        });
    }
    console.log(items);
    },);
    const buyItem = async (item) => {
        console.log("I'm clicked");
        const myWalletAddress = '0xd782B8d8660Ae5293eDd4A16F6ECA12D4aDE3ef4';
        await marketplaceContract.methods.buyItem(item[count].uid).send({from: myWalletAddress, value: item[count].askingPrice});
    }

 
 
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
               <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-my-black-color m-2 px-3 py-3 rounded-2xl" onClick={() => buyItem(items)}>{price} SLE</button>
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

