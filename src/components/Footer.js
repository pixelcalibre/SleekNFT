import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RedditIcon from '@material-ui/icons/Reddit';
import TelegramIcon from '@material-ui/icons/Telegram';
import React from 'react'

function Footer() {
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 
        gap-y-10 px-40 py-14 bg-my-black-color 
        ">
        <div>
        <h1 className="font-bold text-xl bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary">Stay in the loop</h1>
        <p className="text-l mt-5 bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating SLeekNFT.</p>
        <div>
        <input type="email" placeholder="Your email address" className="px-5 py-3 border-1 outline-none overflow-scroll border-my-gold-color rounded-xl  bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary" />
        <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-my-black-color m-5 px-5 py-3 rounded-md">Sign up</button>
        </div>
        </div>
            <div>
                <h1 className="font-bold text-xl mx-10 mb-5 bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary ">Join the community</h1>
                <div className="cursor-pointer mx-5  ">
                <InstagramIcon className="mx-5 "/>
                <RedditIcon className="mx-5 "/>
                <YouTubeIcon className="mx-5 "/>
                <TwitterIcon className="mx-5  "/>
                <TelegramIcon className="mx-5 "/>
                </div>
            </div>
            
        </div>
        <div className="bg-clip-text text-gradient bg-gradient-to-r from-primary to-secondary opacity-1 flex flex-1 bg-my-black-color px-40" >
                <h3>©2021 SleekNFT</h3>

                <div className="flex mx-5 text-center flex-1">
                    <h2 className="mx-5">Privacy Policy</h2>
                    <h2 className="mx-5">Terms of Service</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer



