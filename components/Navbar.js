import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/image/logo.png'
import arrow from '@/public/image/down-arrow.png'


const Navbar = () => {

    const [enginer , setEnginer] = useState(false)
    const [about , setAbout] = useState(false)
    const [resourse , setResourse] = useState(false)

    

  return (
    <>
    
        <div className="navbar">
            <div className="inner">
                <div className="logo">
                    <Image src={logo} alt='' fill={true} />
                </div>
                <div className="navlinks">
                    <ul>
                        <li onMouseOver={()=>setEnginer(true)} onMouseLeave={()=>setEnginer(false)}><Link href='/' passHref> <div className='anchor'>Engineering <Image src={arrow} alt="" width={12} height={12}/></div> </Link> 
                            <div className={enginer ? 'enginer active': 'enginer'}>
                                <h3>Digital transformation</h3>
                                <h3>Methodologies</h3>
                                <h3>trans Engeneering </h3>
                            </div> 
                        </li>

                        <li><Link href='/'><div className='anchor'>Incubation</div> </Link></li>
                        <li onMouseOver={()=>setAbout(true)} onMouseLeave={()=>setAbout(false)}><Link href='/'><div className='anchor'>About <Image src={arrow} alt="" width={12} height={12}/></div> </Link>
                            <div className={about ? 'about active': 'about'}>
                                <h3>LeaderShip</h3>
                                <h3>Team</h3>
                            </div> 
                        </li>
                        <li onMouseOver={()=>setResourse(true)} onMouseLeave={()=>setResourse(false)}><Link href='/'><div className='anchor'>Resourses <Image src={arrow} alt="" width={12} height={12}/></div> </Link>
                            <div className={resourse ? 'resourse active': 'resourse'}>
                                <h3>News</h3>
                                <h3>Blogs</h3>
                                <h3>Case Studies</h3>
                                <h3>Podcasts</h3>
                                <h3>Whitepapers</h3>
                            </div>
                        </li>
                        <button>Contact</button>
                    </ul>
                </div>
            </div>
        </div>

    </>
  )
}

export default Navbar