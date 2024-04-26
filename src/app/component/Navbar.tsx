const Navbar = () => {
  return (
    <>
      <div className=" bg-[#000000] text-white h-14 ">
        <div className="container flex justify-between px-12 items-center">
          <div className="">
            <h2 className="text-3xl text-[#74f0ed] font-semibold">
              Parbhat Kumar
            </h2>
          </div>
          <div className="">
            <ul className=" flex gap-7">
              <li className="hover:text-[#74f0ed] hover:underline-offset-4 hover:underline">
                Home{" "}
              </li>
              <li className="hover:text-[#74f0ed] hover:underline hover:underline-offset-4 ">
                About
              </li>
              <li className="hover:text-[#74f0ed] hover:underline hover:underline-offset-4 ">
                Services
              </li>
              <li className="hover:text-[#74f0ed] hover:underline hover:underline-offset-4 ">
                Contact
              </li>
            </ul>
          </div>
          <div className="">
            <button className=" px-4 py-2 rounded-lg font-semibold bg-[#74f0ed] text-black mt-2">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
