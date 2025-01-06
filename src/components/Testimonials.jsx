import React from 'react'
import Heading from '../common/Heading'
import { TESTIMONIALS_CARDS } from '../utils/helper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';
function Testimonials() {
    return (
        <div className='container overflow-hidden'>
            <Heading heading={"Testimonials"} />
            <Swiper
               slidesPerView={3}
               spaceBetween={24}
               loop={true}
               centeredSlides={true}
               autoplay={{
                 delay: 1500,
                 disableOnInteraction: false,
               }}
               breakpoints={{
            
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
               pagination={true} modules={[Pagination , Autoplay]}
                className="mySwiper flex mt-10"
            >
                    {TESTIMONIALS_CARDS.map((obj, i) => (
                        <SwiperSlide className='px-6 pt-6 flex flex-col bg-gradient-to-b from-[#3B28F638] to-off-black rounded-3xl' key={i}>
                            <div>
                                <h4 className='text-white text-2xl font-medium'>{obj.heading}</h4>
                                <p className='text-white mt-2'>{obj.description}</p>
                            </div>
                            <div className='flex items-center gap-2 mt-6'>
                                <img className='max-w-[60px]' src={obj.image} alt="" />
                                <div>
                                    <p className='text-white text-xl font-medium'>{obj.subHeading}</p>
                                    <p className='text-white '>{obj.subDescription}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
}

export default Testimonials