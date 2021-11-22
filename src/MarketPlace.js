import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import React, { useState, useEffect } from 'react'
import { useMoralisCloudFunction } from 'react-moralis'
import MarketCard from './components/MarketCard'
// import { useMoralis} from 'react-moralis';
// import {marketplaceContractAbi} from './abi.js';

// const MARTKETPLACE_CONTRACT_ADDRESS="0x5F93BfD7529f01E32DA50A0450bb88B3fe20720b";



const MarketPlace = () => {
    const {data} = useMoralisCloudFunction("getItems");
    // const [title, setTitle] = useState('You don\'t have any NFTs');
    // const [description, setDescription] = useState('');
    // const [source, setSource] = useState('/ethbanner1.svg');
    const item = [{
        "myId":"",
        "owner":"",
        "name":"No NFTs",
        "desc":"No Description",
        "price":"",
        "source":"./ethbanner3.svg",
    }];
    const [page, setPage] = useState(0);
    if(data){console.log(data.length);}

    const items = async function(){
         let i=0;
      await data?.map(it => {
         fetch(it.tokenuri)
        .then( res => res.json())
        .then( nft => {
            item[i]= {
                "myId": i++,
                "owner":it.sellerUsername,
                "name":nft.name,
                "desc":nft.description,
                "price":it.askingPrice,
                "source":nft.image
            }
        });
      })};
      items();
    

    // for(let i=0;i<2;i++){
    //     console.log(item[i].name,item[i].desc,item[i].source);
    // }
 console.log(item);
    return (
        
        <div className="relative bg-gradient-to-r from-primary to-secondary">
        <h1 className="px-4 py-4 text-my-black-color">1 results</h1>
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-screen ">
             {item.map(one => (
                <MarketCard 
                key={one.myId}
            name={one.name}
            description={one.desc}
            source={one.source}
            />
             ))}
              
         </div>
         <div className="absolute top-800 flex text-my-black-color left-690">
             <ArrowBackIos fontSize="medium" className="cursor-pointer" onClick={() => (page > 0 ? setPage(page-1):0)}/>
             <p className="text-center">Page {page+1} </p>
             <ArrowForwardIos fontSize="medium" className="cursor-pointer" onClick={() => (page === Math.floor((data.length)/8) ? setPage(Math.floor((data.length)/8)) : setPage(page+1))}/>
         </div>
        </div>
       
    )
}

export default MarketPlace

