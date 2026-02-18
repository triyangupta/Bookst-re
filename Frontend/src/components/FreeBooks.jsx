import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const FreeBooks = () => {
    const filterFreeData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl mx-auto px-4 md:px-20 mb-3 pb-8'>
                <div >
                    <h1 className='text-2xl font-bold 1 pb-3'>Free Offered Courses</h1>
                    <p className='font-medium text-xl pb-3 '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin?</p>
                </div>

                <div>
                    <Slider {...settings}>
                        {filterFreeData.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBooks
