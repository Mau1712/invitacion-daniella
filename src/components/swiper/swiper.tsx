import React from 'react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import 'swiper/css'
import './swiper.css'
import deco3 from '../../assets/deco3.png'

// 
import dani2 from '../../assets/dani2.png'
import dani3 from '../../assets/dani3.png'

import d1 from '../../assets/swiper/d1.jpg'
import d2 from '../../assets/swiper/d2.jpg'
import d3 from '../../assets/swiper/d3.jpg'
import d4 from '../../assets/swiper/d4.jpg'
import d5 from '../../assets/swiper/d5.jpg'
import d6 from '../../assets/swiper/d6.jpg'
import d7 from '../../assets/swiper/d7.jpg'
import d8 from '../../assets/swiper/d8.jpg'
import d9 from '../../assets/swiper/d9.jpg'
import d10 from '../../assets/swiper/d10.jpg'
import d11 from '../../assets/swiper/d11.jpg'
import d12 from '../../assets/swiper/d12.jpg'
import d13 from '../../assets/swiper/d13.jpg'
import d14 from '../../assets/swiper/d14.jpg'
import d15 from '../../assets/swiper/d15.jpg'
import d16 from '../../assets/swiper/d16.jpg'
import d17 from '../../assets/swiper/d17.jpg'
import d18 from '../../assets/swiper/d18.jpg'
import d19 from '../../assets/swiper/d19.jpg'
import d20 from '../../assets/swiper/d20.jpg'
import d21 from '../../assets/swiper/d21.jpg'
import d22 from '../../assets/swiper/d22.jpg'
import d23 from '../../assets/swiper/d23.jpg'
import d24 from '../../assets/swiper/d24.jpg'
import d25 from '../../assets/swiper/d25.jpg'
import d26 from '../../assets/swiper/d26.jpg'
import d27 from '../../assets/swiper/d27.jpg'
import d28 from '../../assets/swiper/d28.jpg'
import d29 from '../../assets/swiper/d29.jpg'



export const SwiperContainer = () => {
  return (
    <div className='swiperContainer'>

      <h2 className='titleSwiper'>Un recorrido de estas 15 primaveras</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        className="mySwiper"


        modules={[FreeMode, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img src={d1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={d2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
           <img src={d3} alt="" />
        </SwiperSlide>  
        <SwiperSlide>
          <img src={d4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={d5} alt="" />
        </SwiperSlide>
          <SwiperSlide>
            <img src={d6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d8} alt="" />
          </SwiperSlide>  
          <SwiperSlide>
            <img src={d9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d12} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d13} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d14} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d15} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d16} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d17} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d18} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d19} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d20} alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={d21} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d22} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d23} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d24} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d25} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d26} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d27} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d28} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d29} alt="" />
          </SwiperSlide>
      </Swiper>

      <div className='deco3Swiper'>
        <img  data-aos="fade-right" src={deco3} alt="" />
      </div>
    </div>
  )
}