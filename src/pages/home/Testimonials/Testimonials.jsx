import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import { FaQuoteLeft } from 'react-icons/fa';
const Testimonials = () => {
      const [reviews, setReviews] = useState([]);
     
      useEffect(()=> {
            fetch('reviews.json')
            .then(res=> res.json())
            .then(data => setReviews(data))
      }, [])

      return (
        <section className="my-20">
          <SectionTitle
            heading={"TESTIMONIALS"}
            subHeading="What Our Clients Say"
          ></SectionTitle>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center my-16 mx-24">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <FaQuoteLeft className='mt-10 text-8xl ' />
                  <p className="py-8">{review.details}</p>
                  <h3 className="text-2xl text-orange-400">{review.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      );
};

export default Testimonials;