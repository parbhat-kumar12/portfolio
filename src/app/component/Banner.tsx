import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 mt-1 bg-[#071c2a] items-center shadow-lg shadow-[rgb(116,240,237)] sm:py-20  ">
        <div className="w-full sm:py-0 py-12  sm:px-28 px-6">
          <h3 className="mt-2 text-2xl text-[#74f0ed] font-semibold">
            Hi, I am
          </h3>
          <h1 className="mt-2 text-4xl text-[#74f0ed]  font-bold">
            Parbhat Kumar
          </h1>
          <h2 className="mt-2 text-2xl text-[#74f0ed] ">And I am</h2>
          <p className="mt-2 text-[#74f0ed] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            perferendis id maiore? id cupiditate maxime tempora distinctio,
            similique molestiae pariatur saepe velit autem expedita nam
            praesentium!
          </p>
          <div className=" icons-container mt-6 flex items-center space-x-5 ">
            <a className="hover:bg-[#74f0ed] hover:border hover:border-[#74f0ed]  bg-black text-[#74f0ed] hover:text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full hover:shadow-lg hover:shadow-[#74f0ed]">
              <FaFacebookF className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
            </a>
            <a className="hover:bg-[#74f0ed] hover:border hover:border-[#74f0ed]  bg-black text-[#74f0ed] hover:text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full hover:shadow-lg hover:shadow-[#74f0ed]">
              <FaTwitter className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
            </a>
            <a className="hover:bg-[#74f0ed] hover:border hover:border-[#74f0ed]  bg-black text-[#74f0ed] hover:text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full hover:shadow-lg hover:shadow-[#74f0ed]">
              <FaInstagram className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
            </a>
            <a className="hover:bg-[#74f0ed] hover:border hover:border-[#74f0ed]  bg-black text-[#74f0ed] hover:text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full hover:shadow-lg hover:shadow-[#74f0ed]">
              <CiLinkedin className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
            </a>
          </div>
          <button className=" px-4 py-2 mt-6 rounded-lg hover:shadow-lg sm:text-start text-center hover:shadow-[#74f0ed] font-semibold bg-[#74f0ed] text-black my-4">
            Hire Me
          </button>
        </div>
        <div className=" w-full text-white  ">
          <div className="border-[10px] border-[#74f0ed] text-center rounded-full  sm:h-[350px] h-[280px] sm:w-[350px] w-[280px] sm:my-0 my-12 mx-auto">
            <img src="/img" className="w-fit rounded-full text-center" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
