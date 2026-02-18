import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='flex py-5 max-w-screen-2xl container mx-auto px-4 md:px-20 flex-col md:flex-row gap-10'>
                <div className=' order-2 md:order-1 w-full mt-12 md:w-1/2 md:mt-32'>
                    <div className='space-y-8'>
                        <h1 className='text-4xl font-bold'>
                            Hello, welcome here to learn something{" "}
                            <span className='text-pink-500'>new everyday!!</span>
                        </h1>
                        <p className='text-xl'>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                        </p>
                        <label className="input validator w-full outline-none">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                        <button className="btn btn-secondary">Summit</button>
                    </div>
                </div>

                <div className='order-1 w-full md:w-1/2'>
                    <img src="/books.jpg" alt="books" />
                </div>
            </div>
        </>
    )
}

export default Banner
