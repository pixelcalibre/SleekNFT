import React from 'react'

function CollectionCard() {
    return (
        <div className="cursor-pointer hover:scale-x-105 
        transition transform duration-300 ease-out ml-6">
            <div className="relative h-80 w-76">
                <img src="https://images.unsplash.com/photo-1622632169740-85c306c57aa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    layout="fill"
                    className="rounded-xl h-80 w-76"
                    alt="collection"
                />
            </div>
            <h3 className="text-2xl mt-3 text-my-black-color h-12">Name</h3>
        </div>
    )
}

export default CollectionCard





