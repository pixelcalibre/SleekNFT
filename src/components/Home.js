
// import Header from './Header' 
import Banner from './Banner' 
import CollectionCard from './CollectionCard' 
// import Footer from './Footer' 
import React from 'react';


function Home() {
    return (
        <div className="">
      <Banner/>
      <hr className="text-my-black-color" />
      <section className="bg-gradient-to-r from-primary to-secondary">
      <h2 className="text-4xl text-my-black-color font-semibold py-8 mx-40">Collections</h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide -ml-4 pl-40 mr-56 ">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard/>
        </div>
      </section>


      
    </div>
    )
}

export default Home
