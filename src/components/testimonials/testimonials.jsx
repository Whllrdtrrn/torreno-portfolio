import React from 'react'
// import { VscActivateBreakpoints } from 'react-icons/vsc'
import ME from '../../assets/Togapic.jpg'
import './testimonials.css'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar:ME,
        name:'whillourd',
        review:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
    },
    {
        avatar:ME,
        name:'whillourd',
        review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English."
    }
]

const testimonials = () => {
    return(
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container containerTestimonial"
            modules={[ Pagination]}
            spaceBetween={60}
            slidesPerView={1}
            pagination={{ clickable: true }}>
             {  
              data.map(({avatar,name,review},index) =>{
                    return(
                    <SwiperSlide key={index} className='cardTesti'>
                        <div className="img">
                            <img src = {avatar} alt="...." />
                        </div>
                        <h5>{name}</h5>
                        <small>{review}</small>
                    </SwiperSlide>
                    )
                
                })
            }
            </Swiper>
        </section>
    )
}
export default testimonials