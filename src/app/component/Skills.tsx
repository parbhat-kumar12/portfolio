
import { SiPreact } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Skills = () => {
    const percentage = 0.66;
   
  return (
    <>
       <div className="text-center bg-[#071c2a] text-white mt-1 shadow-lg  shadow-[#74f0ed]">
      <h1 className="sm:text-5xl text-3xl font-bold underline hover:text-[#74f0ed] hover:decoration-[#74F0ed] sm:py-12 py-8">My Skills</h1>
    </div>
    <div className="grid sm:grid-cols-2 grid-cols-1 bg-[#071c2a] ">
        <div className=" w-full  ">
        <div className="p-10 text-[#74f0ed] sm:px-20 ">
          <h3 className="text-4xl  font-semibold underline">Technical Skills</h3>
          <div className="mt-10 text-[#74f0ed]">
            <div className="text-3xl">
              <FaHtml5 />
            </div>
            <p className="text-xl">HTML</p>
            <div className=" border-2 border-[#74f0ed] rounded-md sm:w-96 mt w-72">
              <div className="border-4 sm:w-72 w-60 border-[#74f0ed]"></div>
            </div>
          </div>
          {/* skill-2 */}
          <div className="mt-10 text-[#74f0ed]">
            <div className="text-3xl">
            <IoLogoCss3 />
            </div>
            <p className="text-xl">CSS</p>
            <div className=" border-2 border-[#74f0ed] rounded-md sm:w-96 mt w-72">
              <div className="border-4 sm:w-60 w-48 border-[#74f0ed]"></div>
            </div>
          </div>
          {/*  */}
          <div className="mt-10 text-[#74f0ed]">
            <div className="text-3xl">
            <RiJavascriptFill />
            </div>
            <p className="text-xl">JAVASCRIPT</p>
            <div className=" border-2 border-[#74f0ed] rounded-md sm:w-96 mt w-72">
              <div className="border-4 sm:w-80 w-64 border-[#74f0ed]"></div>
            </div>
          </div>
          {/*  */}
          <div className="mt-10 text-[#74f0ed]">
            <div className="text-3xl">
            <SiPreact />
            </div>
            <p className="text-xl">REACT</p>
            <div className=" border-2 border-[#74f0ed] rounded-md sm:w-96 mt w-72">
              <div className="border-4 sm:w-56 w-44 border-[#74f0ed]"></div>
            </div>
          </div>
       </div>


        </div>
        <div className="w-full">
       
        </div>
    </div>
    
      
    </>
  )
}

export default Skills
