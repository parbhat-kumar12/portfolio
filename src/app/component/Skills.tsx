import { SiPreact } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import "react-circular-progressbar/dist/styles.css";
import React from "react";
import Newskill from "./Newskill";
import { Progress } from "@nextui-org/react";
import Newskill2 from "./Newskill2";

const Skills = () => {
  const percentage = 0.66;

  return (
    <>
      <div className="text-center  bg-[#071c2a] text-white mt-1 shadow-lg  items-center  shadow-[#74f0ed]">
        <h1 className="sm:text-5xl text-3xl font-bold underline hover:text-[#74f0ed] hover:decoration-[#74F0ed] sm:py-12 py-8">
          My Skills
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 bg-[#071c2a] border-b-4 border-[#74f0ed] sm:py-16 items-center ">
        <div className=" w-full  ">
          <div className="p-10 text-[#74f0ed] sm:px-20 ">
            <h3 className="text-4xl  font-semibold underline">
              Technical Skills
            </h3>
            <div className="mt-10 text-[#74f0ed]">
              <div className="text-3xl">
                <FaHtml5 />
              </div>
              <p className="text-xl">HTML</p>
              <span>
                <Newskill2 title="90" />
              </span>
            </div>
            {/* skill-2 */}
            <div className="mt-10 text-[#74f0ed]">
              <div className="text-3xl">
                <IoLogoCss3 />
              </div>
              <p className="text-xl">CSS</p>
              <span>
                <Newskill2 title="85" />
              </span>
            </div>
            {/*  */}
            <div className="mt-10 text-[#74f0ed]">
              <div className="text-3xl">
                <RiJavascriptFill />
              </div>
              <p className="text-xl">JAVASCRIPT</p>
              <span>
                <Newskill2 title="70" />
              </span>
            </div>
            {/*  */}
            <div className="mt-10 text-[#74f0ed]">
              <div className="text-3xl">
                <SiPreact />
              </div>
              <p className="text-xl">REACT</p>
              <span>
                <Newskill2 title="80" />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full  gap-8">
        <h3 className="text-4xl text-center text-[#74f0ed]  font-semibold underline">
              Professionl Skills
            </h3>
          <div className=" grid sm:grid-cols-2 grid-cols-1 px-12 sm:py-6">
          
            <div>
              <Newskill title="85" header="Creativity" />
            </div>
            <div>
              <Newskill title="70" header="Communication" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 px-12 sm:py-6">
            <div className="">
              <Newskill title="75" header="Problem Solving" />
            </div>
            <div>
              <Newskill title="90" header="Team Work" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
