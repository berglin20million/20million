import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import map from '@/public/image/dotmap.png'
import data from '@/public/utils/aboutwork.json'
import court from '@/public/image/court.png'
import heart from '@/public/image/heartbeat.png'
import cloud from '@/public/image/cloud-service.png'
import chain from '@/public/image/supply-chain.png'
import card from '@/public/image/credit-card.png'

const Aboutwork = () => {

  const [show ,setShow] =useState(1)

  useEffect(()=>{
    const intervalid = setInterval(()=>{
      const nextIndex = show  % data.length +1;
      setShow(nextIndex)
    },5000)

    return()=>{
      clearInterval(intervalid)
    }
  },[show])

  return (
    <>
      <div className="aboutwork">
        <div className="inner">
          <div className="title">
            What we Do?
          </div>
          <div className="divide">
            <div className="left">
              {data.map((item ,i)=>(

                <div  key={i}>
                  
                  {item.id === show && (
                  <div className="card">
                    <div className="atitle">{item.title}</div>
                    <div className="content">{item.content}</div>
                    <div className="content2">{item.content2}</div>

                  </div>
                )}
                </div>
                
              ))}
            </div>
            <div className="right">
              <div className="img">
                <Image src={map} alt='' fill={true}/>
              </div>
              <div className="container">
                <div className="hexagon">
                  <div className={(show==1) ? 'active shape': 'shape'}>

                  </div>
                  <div className="text">Engineering</div>
                </div>
                <div className="hexagon">
                  <div className={(show==2) ? 'active shape': 'shape'}>

                  </div>
                  <div className="text">Incubator</div>
                </div>
              </div>

              <div className="container2">
                <div className="hexagon">
                  <div className={(show==3) ? 'active shape': 'shape'}>

                  </div>
                  <div className="text">Academy</div>
                </div>
                <div className="hexagon">
                  <div className={(show==4) ? 'active shape': 'shape'}>

                  </div>
                  <div className="text">Ventures</div>
                </div>
              </div>
              
            </div>
          </div>


          <div className="boxes">
            <div className="innerboxes">
              <div className="box">
                <div className="innerbox">
                  <div className="image">
                    <Image src={court} alt='' fill={true}/>
                  </div>
                  
                </div>
                <p>FinTech</p>
              </div>
              <div className="box">
                <div className="innerbox">
                  <div className="image">
                    <Image src={heart} alt='' fill={true}/>
                  </div>
                  
                </div>
                <p>HealthTech</p>
              </div>
              <div className="box">
                <div className="innerbox">
                  <div className="image">
                    <Image src={cloud} alt='' fill={true}/>
                  </div>
                  
                </div>
                <p>IOT</p>
              </div>
            </div>
            <div className="innerboxes">
              <div className="box">
                <div className="innerbox">
                  <div className="image">
                    <Image src={chain} alt='' fill={true}/>
                  </div>
                  
                </div>
                <p>Supply Chain</p>
              </div>
              <div className="box">
                <div className="innerbox">
                  <div className="image">
                    <Image src={card} alt='' fill={true}/>
                  </div>
                  
                </div>
                <p>New Economy</p>
              </div>
            </div>
            
            

          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutwork