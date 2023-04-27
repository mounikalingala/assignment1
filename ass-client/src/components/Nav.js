import React from "react";
import { BsTelephoneFill, BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Nav = () => {
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
}

export default Nav