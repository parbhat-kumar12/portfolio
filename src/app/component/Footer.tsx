import { IoSend } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div id="contact" className="grid sm:grid-cols-2 grid-cols-1 bg-[#071c2a] sm:py-20 py-6 items-center">
        <div className=" w-full sm:px-20 px-6  sm:py-16 py-8 text-white">
            <h1 className="sm:text-3xl text-2xl font-semibold text-center  ">Contact <span className="text-[#74f0ed] "> Me</span></h1>
            <h3 className="text-xl font-semibold mt-2">Let's Work Together </h3>
            <p className="mt-2 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, id. Voluptatum pariatur obcaecati animi, rem quis soluta! Distinctio possimus cumque doloribus eveniet nulla. Autem, nemo commodi! Aliquam quasi nam molestias!</p>
            <span className="flex gap-3 mt-4">
            <IoSend className="text-[#74f0ed]  mt-1" />
                <h1>parbhatpaul8@gmail.com</h1>
            </span>
            <span className="flex gap-3 mt-2">
            <LuPhoneCall className="text-[#74f0ed] mt-1" />
                <h1 >9306690735</h1>
            </span>

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
            <a  href="https://www.youtube.com/@Parbhat_Paul" className="hover:bg-[#74f0ed] hover:border hover:border-[#74f0ed]  bg-black text-[#74f0ed] hover:text-white cursor-pointer  w-9 h-9 flex justify-center items-center rounded-full hover:shadow-lg hover:shadow-[#74f0ed]">
              <FaYoutube className="fa-brands text-2xl fa-facebook hover:shadow-lg shadow-[#74f0ed ]" />
            </a>
          </div>
        </div>
        <div className=" w-full sm:px-20 px-12">
              <input type="text" className="py-2 mt-2 sm:w-[500px] w-80  bg-transparent border border-[#74f0ed] rounded ps-1" placeholder="Enter your name" /><br />
              <input type="text" className="py-2 mt-2 sm:w-[500px] w-80  bg-transparent border border-[#74f0ed] rounded ps-1" placeholder="Enter your Email" /><br />
              <input type="text" className="py-2 mt-2 sm:w-[500px] w-80  bg-transparent border border-[#74f0ed] rounded ps-1" placeholder="Enter your Subject" /><br />
             <textarea name="" placeholder="Enter Your Message" className="py-2 mt-2 sm:w-[500px] w-80  bg-transparent border border-[#74f0ed] rounded ps-1" cols={30} rows={4}></textarea>
              <button className=" px-4 py-2 hover:shadow-lg hover:shadow-[#74f0ed] rounded-lg font-semibold bg-[#74f0ed] text-black mt-4 sm:w-[500px] w-80">
              Submit
            </button>
        </div>
    </div>
    </>
  )
}

export default Footer
