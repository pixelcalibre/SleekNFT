import React, {useState,useEffect} from 'react'
import { useMoralis, useMoralisFile,useNewMoralisObject} from 'react-moralis';
import '../Create.css';
import {marketplaceContractAbi, tokenContractAbi} from '../abi.js';


const TOKEN_CONTRACT_ADDRESS="0xA937CDE78CD3F35B88Bd5f314AE40C7EC0936cD4";
const MARTKETPLACE_CONTRACT_ADDRESS="0x5F93BfD7529f01E32DA50A0450bb88B3fe20720b";

function Createcomponent() {
  let statusValue;
    const{enableWeb3, web3,isAuthenticated,user}=useMoralis();
    const { save } = useNewMoralisObject('Item');
    const {saveFile} = useMoralisFile();
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState("");
    const [price, setPrice] = useState("0");
    const [nftstatus, setNftstatus] = useState("Instant Buy");
    const [description, setDescription] = useState("");

    


    const tokenContract = new web3.eth.Contract(tokenContractAbi, TOKEN_CONTRACT_ADDRESS);
    const marketplaceContract = new web3.eth.Contract(marketplaceContractAbi, MARTKETPLACE_CONTRACT_ADDRESS);
    // enableWeb3();
    useEffect(() => {
        if (isAuthenticated) {
          enableWeb3();
        }
      },[isAuthenticated]);

      
    
    const onFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setFile(event.target.files[0]);
          
        }
       }
      //  console.log(isWeb3Enabled);
    
    
    
    //Create Item
       const onCreateItem = async (e) => {
        // const web3 = await Moralis.Web3.enable();
        e.preventDefault();
            //console.log(file);
            const fileIpfs= await saveFile("nftFile.png",file,{
             saveIPFS:true
         });
         //console.log(fileIpfs);
             

         const nftFilePath = fileIpfs._ipfs;
        const nftFileHash=fileIpfs._hash;
          
      //console.log(nftFileHash,nftFilePath);
          
    const metadata = {
        name: filename,
        description: description,
        image: nftFilePath,
    };

    const metadataFileIpfs= await saveFile("metadata.json", {base64 : btoa(JSON.stringify(metadata))},{
        saveIPFS:true
    });
    //console.log(metadataFileIpfs);
     const nftFileMetaDataPath = metadataFileIpfs._ipfs;
     const nftFileMetaDataHash = metadataFileIpfs._hash;
     //console.log(nftFileMetaDataHash,nftFileMetaDataPath);
     const mintNft = async (metadataUrl) => {
      const myWalletAddress = user.get('ethAddress');
        const receipt = await tokenContract.methods.createItem(metadataUrl).send({from: myWalletAddress });
        // const receipt = await tokenContract.methods.createItem(metadataUrl).send({from: myWalletAddress });

        // console.log(receipt);
        return receipt.events.Transfer.returnValues.tokenId;
    };
     const nftId = await mintNft(nftFileMetaDataPath);
     
     await save({
         'name':filename,
         'description':description,
         'nftFilePath':nftFilePath,
         'nftFileHash':nftFileHash,
         'nftFileMetaDataPath':nftFileMetaDataPath,
         'nftFileMetaDataHash':nftFileMetaDataHash,
         'nftId':nftId,
         'nftContractAddress':TOKEN_CONTRACT_ADDRESS,
        });
        
        switch(nftstatus){
          case "notforsale":
            statusValue="0";
              break;
          case "instantbuy":
            statusValue="1";
              break;
          case "acceptoffers":
            statusValue="2";
              break;
          default: ;
      }
      console.log(nftstatus,statusValue);
        const userAddress = await user.get('ethAddress');
        switch(statusValue){
          case "0":
              return;
          case "1":
              await ensureMarketplaceIsApproved(nftId, TOKEN_CONTRACT_ADDRESS);
              await marketplaceContract.methods.addItemToMarket(nftId, TOKEN_CONTRACT_ADDRESS, price).send({from: userAddress });
              break;
          case "2":
              console.log("Not yet supported!");
              return;
          default: return;
      }
       console.log(nftstatus);
       }
       const ensureMarketplaceIsApproved = async (tokenId, tokenAddress) => {
        const userAddress = await user.get('ethAddress');
        const contract = new web3.eth.Contract(tokenContractAbi, tokenAddress);
        const approvedAddress = await contract.methods.getApproved(tokenId).call({from: userAddress});
        if (approvedAddress !== MARTKETPLACE_CONTRACT_ADDRESS){
            await contract.methods.approve(MARTKETPLACE_CONTRACT_ADDRESS,tokenId).send({from: userAddress});
        }
    }

    return (
        <div className="absolute left-96 top-16 bg-my-black-color w-3/6 h-56 my-10 rounded-lg">
             <div className="border-my-gold-color border-dashed border-2 h-5/6 mt-4 mx-4 rounded-lg text-center">
             <div className="p-3">
             <h1 className="bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary  text-2xl p-3">Upload File</h1>
             <p className="bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary  text-lg p-3">PNG, GIF, WEBP, MP4 or MP3. Max 100mb</p>
             <input type="file" className="ml-34 text-my-gold-color" onChange={onFileChange}/>
             {/* <button type="submit" className="text-my-black-color bg-gradient-to-r from-primary to-secondary  p-2 rounded-lg mt-1" onClick={() => open files}>Choose file</button>  */}
             </div>
             </div>
             <div className='flex'>
             <div className="flex flex-col py-20 w-72">
            <h1 className="text-my-black-color text-2xl py-1" >Tiltle</h1>
            <input  className=" placeholder-black rounded-lg py-1 px-1 border-b-2 outline-none" type="text" placeholder='e.g. "Redeemable T-shirt with logo" ' value={filename} onChange={(e) => setFilename(e.target.value)}/>
            <h1  className="text-my-black-color text-2xl py-1">Price</h1>
            <input className="placeholder-black py-1 border-b-2 overflow-auto outline-none rounded-lg px-1 " value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Enter the price'/>
            <label className="text-my-black-color text-2xl py-1" >Status</label>
            <select className="placeholder-my-black-color py-1 border-b-2 outline-none rounded-lg px-1 " value={nftstatus} onChange={(e) => setNftstatus(e.target.value)} name="status">
                 <option value="notforsale">Not For Sale</option>
                 <option value="instantbuy">Instant Buy</option>
                 <option value="acceptoffers">Accept Offers</option>
            </select>
            <button type="submit" className="text-my-gold-color bg-my-black-color p-2 rounded-lg w-32 mt-6 mb-20  " onClick={onCreateItem} >Create</button>
            </div>
            <div className="flex flex-col my-20 ml-40">
            <label className="text-my-black-color text-2xl py-1">Description</label>
            <textarea cols="40" rows="7" placeholder="Description"  className=" placeholder-black border-b-2 overflow-auto outline-none rounded-lg px-1 " value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div> 
            </div>
            </div>
    )
}

export default Createcomponent





