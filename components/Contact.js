import React, { useState } from 'react'

const Contact = () => {

    const [show , setShow] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [projectRequirements, setProjectRequirements] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const visible = () =>{
        setShow(!show)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!name){
            setNameError('Please enter the name')
        }
        else{
            setNameError('')
        }
        if(!email){
            setEmailError('Please enter the email')
        }
        else{
            setEmailError('')
        }

    }

    

  return (
    <>
       <div className={!show ?'contact':'contact active'} >
        <div className="outer" onClick={()=>visible()}> Get In Touch</div>
        <div className="inner">
            
            <div className="title">Let's Discuss Project Ideas</div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="name same">
                        <input type="text" 
                        placeholder='Full Name *'
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         />
                    </div>
                    {nameError && <p className='error'>{nameError}</p>}
                    <div className="email same">
                        <input type="email" placeholder='Email *'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {emailError && <p className='error'>{emailError}</p>}
                    <div className="textarea">
                        <textarea name="" id="" cols="30" rows="10" placeholder='Project Requirements *'>

                        </textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div> 
        </div>
            
    </>
  )
}

export default Contact