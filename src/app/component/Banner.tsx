import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
 import { CiLinkedin } from "react-icons/ci";
const Banner = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1  bg-[#000000] items-center">
        <div className="w-full  sm:px-28 px-6" >
        <h3 className="mt-2 text-2xl text-[#74f0ed] font-semibold">Hi, I am</h3>
            <h1 className="mt-2 text-4xl text-[#74f0ed]  font-bold">Parbhat Kumar</h1>
            <h2 className="mt-2 text-2xl text-[#74f0ed] ">And I am  </h2>
            <p className="mt-2 text-[#74f0ed] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              perferendis id maiore? id cupiditate maxime tempora distinctio,
              similique molestiae pariatur saepe velit autem expedita nam
              praesentium!
            </p>
            <div className=" icons-container mt-4 flex items-center space-x-5 ">
              <a className="bg-[#74f0ed] hover:border hover:border-[#74f0ed]  hover:bg-black hover:text-[#74f0ed] text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full">
              <FaFacebookF className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
              </a>
              <a className="bg-[#74f0ed] hover:border hover:border-[#74f0ed]  hover:bg-black hover:text-[#74f0ed] text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full">
              <FaTwitter className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
              </a>
              <a className="bg-[#74f0ed] hover:border hover:border-[#74f0ed]  hover:bg-black hover:text-[#74f0ed] text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full">
              <FaInstagram  className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
              </a>
              <a className="bg-[#74f0ed] hover:border hover:border-[#74f0ed]  hover:bg-black hover:text-[#74f0ed] text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full">
              <CiLinkedin className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
              </a>
            </div>
            <button className=" px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-[#74f0ed] font-semibold bg-[#74f0ed] text-black my-4">
              Hire Me
            </button>
        </div>
        <div className=" w-full text-white  ">
      <div className="border text-center rounded-full h-72 w-72 sm:my-0 my-12 mx-auto">
      
      </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
