import React from 'react'
import Image from 'next/image'
import flag from '@/public/image/india.png'
import location from '@/public/image/location.png'
import data from '@/public/utils/footeraddress.json'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="inner">
                <div className="divide">
                  <div className="one common">
                    
                      <h4>Company</h4>
                      <div className="innerone">
                        <p>Home</p>
                        <p>Engineering</p>
                        <p>Ventures</p>
                        <p>Incubation</p>
                        <p>Intellectual Property</p>
                      </div>
                    
                  </div>
                  <div className="two common">
                    
                      <h4>Domains</h4>
                      <div className="innerone">
                        <p>New Economy</p>
                        <p>Supply Chain</p>
                        <p>FinTech</p>
                        <p>HealthTech</p>
                        <p>Lot</p>
                      </div>
                    
                  </div>
                  <div className="three common">
                  
                    <h4>Technologies</h4>
                    <div className="innerone">
                      <p>Technology Consulting</p>
                      <p>Ruby on Rails</p>
                      <p>Python</p>
                      <p>React JS</p>
                      <p>Java</p>
                    </div>

                    
                  </div>
                  <div className="four common">
                  
                    <h4>About Us</h4>
                    <div className="innerone">
                      <p>Leadership</p>
                      <p>Team</p>
                      <p>20Million Diamond</p>
                      <p>Methodologies</p>
                      <p>Career</p>
                    </div>

                    
                  </div>
                  <div className="five common">
                  
                    <h4>Resourses</h4>
                    <div className="innerone">
                      <p>News</p>
                      <p>Blogs</p>
                      <p>Case Studies</p>
                      <p>Podcasts</p>
                      <p>Whitepapers</p>
                    </div>

                    
                  </div>
                </div>
                <div className="location">
                  Location: <Image src={flag} alt='' />
                </div>

                <div className="addresslist">
                  {data.map((item,i)=>(
                    <div className="inneraddress" key={i}>
                      <Image src={location} alt=''/>
                      <div className="area">
                        
                          <p>{item.address}</p>
                          <p>{item.address2}</p>
                          <h4>{item.country} </h4>
                        
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer