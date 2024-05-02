import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa"; 
// import Newskill2 from './Newskill2';
import Skillls from './Newskill2';

const Skills = () => {
  return (
    <>
      <div id="Skills" className=" bg-[#071c2a] text-white mt-1 shadow-lg  shadow-[#74f0ed]">
        <h1 className="sm:text-5xl text-3xl flex justify-center  font-bold underline hover:text-[#74f0ed] hover:decoration-[#74F0ed] sm:py-12 py-8">
          My Skills
        </h1>

        <div className='grid sm:grid-cols-2 grid-cols-1'>
          <div className=''>
           <div className='border '>
           <h1 className='text-2xl flex justify-center'>Technical Skills</h1>
           </div>
           <div className='border sm:px-16 py-12 mt-2'>
            {/* html part */}
             <span className=' '>
             <FaHtml5 className='text-2xl text-[#73311b] mt-4' />
              <p className=''>HTML</p>
              {/* <Newskill2 
              title="90"
              /> */}

             </span>
             {/* Css part */}
             <span className=''>
             <IoLogoCss3 className='text-2xl text-[#155781]  mt-4' />
              <p className=''>CSS</p>
              {/* <Newskill2
               title="80"
              /> */}
             </span >
             {/* js part */}
             <span className='mt-2'>
             <IoLogoJavascript className='text-2xl text-[#8a9e2b] mt-4 ' />
              <p className=''>JAVASCRIPT</p>
              {/* <Newskill2
               title="70"
               /> */}
             </span>
             {/* react part */}
             <span className=''>
             <FaReact className='text-2xl text-[blue] mt-4 ' />
              <p className=''>REACT</p>
                {/* <Newskill2
                 title="85"
                /> */}
             </span>
           </div>
          </div>
          <div className=''>
            <h1 className='flex justify-center text-2xl underline border'>Professional Skills</h1>
            <div>
              <div className='grid sm:grid-cols-2 grid-cols-1 border'>
              <div>
               <span>
               {/* <Skillls/> */}

               </span>
              </div>
              <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
