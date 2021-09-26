import { useEffect, useState } from "react";
import { useMoralisCloudFunction } from "react-moralis";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const MyItems = () => {
    const { data} = useMoralisCloudFunction("getUserItems");
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [source, setSource] = useState('/ethbanner1.svg');
    const [count, setCount] = useState(0);

useEffect(()=>{
    fetch(data[count].tokenuri)
    .then( res => res.json())
    .then( nft => {
        setTitle(nft.name);
        setDescription(nft.description);
        setSource(nft.image);
    });
},[count]);
console.log(count);
//     getAndRenderItemData = (item, renderFunction) => {
    
//         fetch(item.tokenUri)
//         .then(response => response.json())
//         .then(data => {
//             item.name = data.name;
//             item.description = data.description;
//             item.image = data.image;
//             renderFunction(item);
//         })
//     }

    // (async function loadUserItems(){
    //     const items=data;
    //     console.log(items);
    // })()
    return (
        <div className="relative h-screen
         bg-gradient-to-r from-primary to-secondary ">
            <h1 className="text-my-black-color text-3xl font-bold px-685 py-10">My Items</h1>  
            <div className="absolute top-130 left-500 bg-my-black-color p-5 rounded-md">
                <div className="object-contain">
                <img src={source} alt="your nft" className="h-350 w-350 p-5 pb-0" />
                </div>
                <div>
                    <h3 className="p-3 text-center">{title}</h3>
                    <p className="p-3">{description}</p>
                </div>
            </div>
            <div className="absolute text-my-black-color top-180 left-400 cursor-pointer" onClick={() => (count > 0 ? setCount(count-1): setCount(data.length-1))}>
            <ArrowBackIosIcon  fontSize="large" />
            </div>
            <div className="absolute text-my-black-color top-180 right-450 cursor-pointer"  onClick={() => (count === data.length-1? setCount(0) : setCount(count+1))}>
            <ArrowForwardIosIcon fontSize="large"/> 
            </div>
            
            
        </div>
    )
}

export default MyItems
