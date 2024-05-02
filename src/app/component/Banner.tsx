import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

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
            <a href="https://www.facebook.com/profile.php?id=100069397192173" className="hover:bg-[#74f0ed] hover:border hover:border-[#74f0ed]  bg-black text-[#74f0ed] hover:text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full hover:shadow-lg hover:shadow-[#74f0ed]">
              <FaFacebookF className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
            </a>
            <a href="https://twitter.com/home?lang=en-in" className="hover:bg-[#74f0ed] hover:border hover:border-[#74f0ed]  bg-black text-[#74f0ed] hover:text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full hover:shadow-lg hover:shadow-[#74f0ed]">
              <FaTwitter className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
            </a>
            <a href="https://www.instagram.com/parbhat_paul/" className="hover:bg-[#74f0ed] hover:border hover:border-[#74f0ed]  bg-black text-[#74f0ed] hover:text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full hover:shadow-lg hover:shadow-[#74f0ed]">
              <FaInstagram className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
            </a>
            <a href="https://www.linkedin.com/in/parbhat-paul-5a480b2aa/" className="hover:bg-[#74f0ed] hover:border hover:border-[#74f0ed]  bg-black text-[#74f0ed] hover:text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full hover:shadow-lg hover:shadow-[#74f0ed]">
              <CiLinkedin className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
            </a>
            <a  href="https://www.youtube.com/@Parbhat_Paul"  className="hover:bg-[#74f0ed] hover:border hover:border-[#74f0ed]  bg-black text-[#74f0ed] hover:text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full hover:shadow-lg hover:shadow-[#74f0ed]">
              <FaYoutube className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
            </a>
          </div>
          <button className=" px-4 py-2 mt-6 rounded-lg hover:shadow-lg sm:text-start text-center hover:shadow-[#74f0ed] font-semibold bg-[#74f0ed] text-black my-4">
            Hire Me
          </button>
        </div>
        <div className=" w-full text-white  ">
          <div className="border-[7px] border-[#74f0ed]   rounded-full items-center sm:h-[300px] h-[240px] sm:w-[300px] w-[240px] sm:my-0 my-12 mx-auto shadow-lg shadow-[#74f0ed]">
            <img src="/img/img1.png" className="sm:w-fit w-[200px] sm:ps-9  sm:sm:-ml-4 ml-3 -mt-1 sm:-rotate-3  rounded-full  " alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
