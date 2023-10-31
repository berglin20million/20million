import React from 'react'
import Image from 'next/image'
import logo from '@/public/image/logo.png'

import logos from '@/public/utils/company.json'
import {Swiper , SwiperSlide} from "swiper/react"
import "swiper/css"
import { sliderSettings } from '@/public/utils/common'


const Landingpage = () => {
  return (
    <>
        <div className="landingpage">
            <div className="inner">
                <div className="image">
                    <Image src={logo} alt='' fill={true}/>
                </div>
                <div className="title">
                    <h2>
                        20 Billion brings over two decades of global experience in software product engineering and IT services, process re-engineering and digital transformation, innovation and entrepreneurship.
                    </h2>
                    <h3>
                        We help bridge your dreams and ambitions, to, a larger-than-life vision and venture.
                    </h3>
                </div>
                



                {/* scroll */}

                <div className="scroll">
                <Swiper {...sliderSettings}>
                    
                    {logos.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className="card">
                                <div className='num'>{card.number}</div>
                            </div>
                            
                        </SwiperSlide>
                    ))}
                
                </Swiper>
                </div>
            </div>
        </div>
    </>
  )
}

export default Landingpage

