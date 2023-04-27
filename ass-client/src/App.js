import React, { useState } from "react";
import Axios from "axios";
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

  const changeHandler = event => {
        setData({...data,[event.target.name]:event.target.value})
    }

  const onSubmitForm = async(e) => {
    e.preventDefault()
    console.log(data)
    Axios.post("http://localhost:3003/", { data }).then(
      (res) => console.log(res.data)
    );
  setData({username:"",email:""})
  }

  return (
  <div>
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
      <div className='flex flex-row justify-center mt-16 '>
        <div className=' mr-32  '>
          <h1 className='text-4xl font-bold leading-relaxed mt-2'>Vehicle Maintanance <br /> From The Comfort<br /> of Your Home</h1>
          <p className='text-gray-400 mt-2'>Open Auto Soothes the hassle of maintaining <br/> your vehicle and helps you deal with <br/> unexpected repairs worry-free.</p>
        </div>
        <form action="post" className='flex flex-col p-8' onSubmit={onSubmitForm}>
          <div>
          <input type="text" name="username" onChange={changeHandler} className='outline-none bg-transparent border rounded-full p-4 pl-8 w-[320px]' placeholder='Enter Your Name' />
          </div>
          <div className='mt-8 mb-8'>
          <input type="text" name="email" onChange={changeHandler} className='outline-none bg-transparent border rounded-full p-4 pl-8 w-[320px]' placeholder='Enter Your Email' />
          </div>
          <div>
          <input type="submit" value="Submit" className='cursor-pointer outline-none text-center bg-transparent border font-bold rounded-full p-4 pl-8 w-[320px] hover:bg-purple-700 hover:border-0' placeholder='Enter Your Name' />
          </div>
        </form>
      </div>
      <div className='flex flex-row justify-end mt-8 mb-20'>
        <a href='www.facebook.com'><FaFacebookF className='mr-4' size={25}/></a>
        <a href='www.twitter.com'><AiOutlineTwitter className='mr-4' size={27}/></a>
        <a href='www.youtube.com'><AiFillYoutube className='mr-4' size={25}/></a>
        <a href='www.linkedin.com'><AiFillLinkedin className='mr-4' size={25}/></a>
        <a href='www.instagram.com'><BsInstagram className='mr-4' size={22}/></a>
      </div>
      </div>
      <div className='flex flex-row bg-gray-900 pl-24 pt-12 pb-16 border border-b-1 border-l-0 border-gray-800'>
        <div>
        <h1 className='text-4xl text-white font-bold leading-relaxed'>Focus on <br />Time Saving</h1>
          <p className='text-gray-400 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br/>Ipsum has been the industry's standard dummy text ever since the 1500s, when an <br/>unknoun printer took a gallery of type and scrambled it to make a type specimen<br/> book. It has survived not only five centuries, ut also the leap into electric <br/> typesetting, remeining essentially unchanged. It was</p>
        </div>
          <button className='border border-solid border-white text-[15px] rounded-3xl h-12 ml-24 w-[320px] mt-32 p-3 text-white'>Download the mobile app</button>
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
