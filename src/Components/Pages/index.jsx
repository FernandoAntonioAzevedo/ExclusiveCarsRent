import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from  'swiper/react';
import 'swiper/css';

import { Pagination, Autoplay } from 'swiper/modules';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import about from '../../assets/about.jpg';

import Cars from '../../Cars.json';

import carType1 from '../../assets/car-1.jpg';
import carType2 from '../../assets/car-2.jpg';
import carType3 from '../../assets/car-3.jpg';
import carType4 from '../../assets/car-4.jpg';
import carType5 from '../../assets/car-5.jpg';
import carType6 from '../../assets/car-6.jpg';

import test1 from '../../assets/test-1.jpg';
import test2 from '../../assets/test-2.jpg';
import test3 from '../../assets/test-3.jpg';

import newscar1 from '../../assets/banner-1.jpg';
import newscar2 from '../../assets/banner-2.jpg';
import newscar3 from '../../assets/banner-car.jpg';
import newscar4 from '../../assets/car-5.jpg';

function index() {

  const [pickUpDate, setPickUpDate] = useState(null);
  const datePickerRef = useRef(null);

  const openCalendar = () => {
    if (datePickerRef.current) {
        datePickerRef.current.open.setFocus();
    }
  };

  const [returnDate, setReturnDate] = useState(null);
  const returnPickerRef = useRef(null);

  const openreturenCalendar = () => {
    if (returnPickerRef.current) {
        returnPickerRef.current.setFocus();
    }
  };


  return (
    <>
      {/* Hero */}
      <div className='hero w-[100%] h-[100vh] overflow-hidden'>
          <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 2000,
              }}
              speed={1500}
              className='hero-swiper w-full h-full'>
              {/* slide 1 */}
              <SwiperSlide>
                  <div className="hero-slide hero-slide1 w-full flex items-center px-[12%]">
                      <div className="hero-content text-white">
                        <span className='font-bricolage text-1xl uppercase tracking-widest'>Premium</span>
                        <h1 className='font-bricolage text-9xl hero-title my-3'>Locação de carro</h1>
                        <p className='my-2 text-2xl font-bricolage hero-subtitle text-gray-300'>You can rent any of ours luxurious Cars.</p>
                        <p className='my-7 w-[60%] hero-pere text-gray-300'>Experience premium car rentals with comfort, style, and affordability-perfect for 
                          road trips, business travel, or luxury weekend getaways.
                        </p>
                        <div className='hero-btns flex-gap-4 mt-8'>
                          <button className='default-btn bg-[#f5b754] transition-all hover:bg-white hover:text-black px-7 py-5 font-bricolage rounded-full transform hover:-translate-y-1'>
                              View More &nbsp;
                              <i className="bi bi-arrow-up-right"></i> 
                          </button>
                          <button className='default-btn border px-7 py-5 font-bricolage rounded-full transition-all hover:bg-[#f5b754] hover:border-transparent hover:-translate-y-1'>
                            Rent Now
                            <i className="bi bi-arrow-up-right"></i> 
                          </button>
                        </div>
                      </div>
                  </div>
              </SwiperSlide>

              {/* slide 2 */}
              <SwiperSlide>
                  <div className="hero-slide hero-slide2 w-full flex items-center px-[12%]">
                      <div className="hero-content text-white">
                        <span className='font-bricolage text-1xl uppercase tracking-widest'>Premium</span>
                        <h1 className='font-bricolage text-9xl hero-title my-3'>Locação de carro</h1>
                        <p className='my-2 text-2xl font-bricolage hero-subtitle text-gray-300'>You can rent any of ours luxurious Cars.</p>
                        <p className='my-7 w-[60%] hero-pere text-gray-300'>Experience premium car rentals with comfort, style, and affordability-perfect for 
                          road trips, business travel, or luxury weekend getaways.
                        </p>
                        <div className='hero-btns flex-gap-4 mt-8'>
                          <button className='default-btn bg-[#f5b754] transition-all hover:bg-white hover:text-black px-7 py-5 font-bricolage rounded-full transform hover:-translate-y-1'>
                              View More &nbsp;
                              <i className="bi bi-arrow-up-right"></i> 
                          </button>
                          <button className='default-btn border px-7 py-5 font-bricolage rounded-full transition-all hover:bg-[#f5b754] hover:border-transparent hover:-translate-y-1'>
                            Rent Now
                            <i className="bi bi-arrow-up-right"></i> 
                          </button>
                        </div>
                      </div>
                  </div>
              </SwiperSlide>
          </Swiper>  
      </div>        
    </>
  )
}

export default index