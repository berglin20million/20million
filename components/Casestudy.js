import React from 'react'
import Image from 'next/image'
import laptop from '@/public/image/laptop.png'

import {Swiper , SwiperSlide} from "swiper/react"
import "swiper/css"
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { sliderSetting } from '@/public/utils/common'
import data from '@/public/utils/casestudy.json'

const Casestudy = () => {
  return (
    <>
      <div className="casestudy">
       <div className="inner">
        <div className="title">Case Study</div>
        <div className="subtitle">
          <h3>20Million believes that a good company builds and delivers marquee products and services.</h3>
          <h4>But, a great company impacts the lives of all of its stakeholders for the better.</h4>
        </div>
        
        
        <div className="scroll">
          <Swiper 
            modules={[ Pagination]}
            pagination={{ el: '.swiper-pagination', clickable: true }}
          {...sliderSetting}>
                    
                    {data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className="card">
                                <div className="left">
                                  <div className="image">
                                    <div className="img">
                                      <Image src={laptop} alt='' fill={true}/>
                                    </div>
                                    <div className="color">
                                      <div className="lapimage">
                                        <Image src={card.image} alt='' fill={true} />
                                      </div>
                                    </div>
                                  </div>
                                </div>


                                <div className="right">
                                  <div className="laptitle">
                                    {card.topic}
                                  </div>
                                  <div className="horizontal">
                                    <div className="industry">Industry: {card.industry}</div>
                                    <div className="location">Location: {card.location}</div>
                                  </div>
                                  <div className="content">
                                    {card.content}
                                  </div>
                                  <button>Read Full Case Study Now</button>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                    ))}

                      <div className="swiper-pagination"></div>
                
                </Swiper>
        </div>




       </div>
      </div>
    </>
  )
}

export default Casestudy

