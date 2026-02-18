import React from 'react'

const Cards = ({ item }) => {
    return (
        <>
            <div className='mt-3'>
                <div className="card bg-gray-200 w-96 shadow-sm  hover:scale-105 duration-300 text-black ">
                    <figure>
                        {<img
                        className='dark:bg-amber-800'
                            src={item.image}
                            alt="Shoes" />}
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline p-4">${item.price}</div>
                            <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white p-4">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
