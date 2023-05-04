import React, { useState, useEffect } from "react";
//import Axios from "axios";
import img1 from "./assets/images/img1.png";
import img2 from "./assets/images/img2.png";
import { BsTelephoneFill, BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube, AiFillLinkedin } from "react-icons/ai"

import './App.css';

const App=() =>{
  const [data, setData] = useState({
    username: "",
    email:"",
  })

  const [formErrors,setFormErrors]=useState({})
const [isSubmit,setIsSubmit]=useState(false)

  
  const changeHandler = event => {
    
    setData({ ...data, [event.target.name]: event.target.value })
  }
  
  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data)
    }
  },[data])

  const onSubmitForm = async(e) => {
    e.preventDefault()
    console.log(data)
setIsSubmit(true)
    setFormErrors(validate(data))
    setData()
    // Axios.post("http://localhost:3003/adduser", { userName:data.username,userEmail:data.email }).then(
    //    (res) => console.log(res.data)
    // );
    fetch("http://localhost:3003/adduser", {
       method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content.type": "application/json",
        "Accept":"application/json"  },
    }).then(res => {
      res.json()
      console.log(res)
    })
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    setData({username:"",email:""})
  }

  const validate = (values) => {
    const errors = {}
    if (!values.username) {
      errors.username="*Username is Required"
    }
    if (!values.email) {
      errors.email="*Email is Required"
    }
    return errors
  }

  return (
    <div >
  <div className="bg-gray-900 pb-4 text-white pl-24 pt-12 pr-20 border border-b-1 border-l-0 border-gray-800">
        <div className='flex flex-row justify-between pb-8'>
          <h1 className='font-bold text-2xl '> OPENAUTO</h1>
          <div className='flex flex-row justify-center'>
            <div className='flex flex-row pt-2'>
              <BsTelephoneFill className='text-gray-200 mt-1' size={15}/>
              <h3 className='text-[15px] tracking-wide font-semibold  ml-2 text-gray-400'>+91 987654321</h3>
            </div>
            <div className='flex flex-row mr-8 ml-8 pt-2'>
              <MdEmail className='text-gray-200 mt-1' size={17} />
              <h3 className='text-[15px] font-semibold tracking-wide ml-2 text-gray-400'>service@openauto.ca</h3>
            </div>
            <div className='flex flex-row'>
              <button className='border border-solid border-white text-[15px] rounded-3xl p-3'>Download the mobile app</button>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
      <div className='flex flex-col justify-center mt-16 '>
        <div className=' mr-32  '>
          <h1 className='text-4xl font-bold leading-relaxed mt-2'>Vehicle Maintanance <br /> From The Comfort of <br />Your Home</h1>
          <p className='text-gray-400 mt-2'>Open Auto Soothes the hassle of maintaining <br/> your vehicle and helps you deal with <br/> unexpected repairs worry-free.</p>
          </div>
        <form method="post" className='flex flex-col mt-8' onSubmit={onSubmitForm}>
          <div>
                <input type="text" name="username" value={data.username} onChange={changeHandler} className='outline-none bg-transparent border rounded-full p-4 pl-8 w-[320px]' placeholder='Enter Your Name' />
                <p className="text-red-500 text-sm mt-1 ml-4">{formErrors.username}</p>
              </div>
          <div className='mt-4 mb-4'>
          <input type="text" name="email" value={data.email} onChange={changeHandler} className='outline-none bg-transparent border rounded-full p-4 pl-8 w-[320px]' placeholder='Enter Your Email' />
          <p className="text-red-500 text-sm mt-1 ml-4">{formErrors.email}</p>
              </div>
          <div>
          <input type="submit" value="Submit" className='cursor-pointer outline-none text-center bg-transparent border font-bold rounded-full p-4 pl-8 w-[320px] hover:bg-purple-700 hover:border-0' placeholder='Enter Your Name' />
          </div>
            </form>
          </div>
          <img src={img2} className="h-[440px] mt-32" alt="" />
      </div>
      <div className='flex flex-row justify-end mt-8 mb-20'>
        <a href='www.facebook.com'><FaFacebookF className='mr-4' size={25}/></a>
        <a href='www.twitter.com'><AiOutlineTwitter className='mr-4' size={27}/></a>
        <a href='www.youtube.com'><AiFillYoutube className='mr-4' size={25}/></a>
        <a href='www.linkedin.com'><AiFillLinkedin className='mr-4' size={25}/></a>
        <a href='www.instagram.com'><BsInstagram className='mr-4' size={22}/></a>
      </div>
      </div>
      <div className='flex flex-row justify-between bg-gray-900 pl-24 pt-12 pb-16 border border-b-1 border-l-0 border-gray-800'>
        <img src={img1} className="h-[400px]" alt="" />
        <div className="flex flex-col mr-20 mt-4">
        <h1 className='text-4xl text-white font-bold leading-relaxed'>Focus on <br />Time Saving</h1>
          <p className='text-gray-400 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br/>Ipsum has been the industry's standard dummy text ever since the 1500s, when an <br/>unknoun printer took a gallery of type and scrambled it to make a type specimen<br/> book. It has survived not only five centuries, ut also the leap into electric <br/> typesetting, remeining essentially unchanged. It was</p>
          <button className='border border-solid border-white text-[15px] rounded-3xl h-12 mt-8 w-[320px] ml-0 p-3 text-white'>Download the mobile app</button>
        </div>
      </div>
      <footer className='bg-gray-900 pl-24 pt-12 pb-12'>
        <div className='flex flex-row justify-between '>
          <h1 className='font-bold text-white text-2xl'> OPENAUTO</h1>
          <div className='flex flex-row justify-center'>
            <div className='flex flex-row pt-2'>
              <BsTelephoneFill className='text-gray-200 mt-1' size={15}/>
              <h3 className='text-[15px] tracking-wide font-semibold  ml-2 text-gray-400'>+91 987654321</h3>
            </div>
            <div className='flex flex-row mr-8 ml-8 pt-2'>
              <MdEmail className='text-gray-200 mt-1' size={17} />
              <h3 className='text-[15px] font-semibold tracking-wide ml-2 text-gray-400'>service@openauto.ca</h3>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <p className='text-gray-400 text-[12px] mt-8'>Open Auto @ all rights reserved</p>
          <div className='flex flex-row text-white mt-8 mb-12 mr-8'>
        <a href='www.facebook.com'><FaFacebookF className='mr-4' size={25}/></a>
        <a href='www.twitter.com'><AiOutlineTwitter className='mr-4' size={27}/></a>
        <a href='www.youtube.com'><AiFillYoutube className='mr-4' size={25}/></a>
        <a href='www.linkedin.com'><AiFillLinkedin className='mr-4' size={25}/></a>
        <a href='www.instagram.com'><BsInstagram className='mr-4' size={22}/></a>
      </div>
        </div>
      </footer>
  </div>
  );
}

export default App;
