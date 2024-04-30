import { MdMenu } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <>
      <div className=" bg-[#071c2a] text-white h-14 shadow-lg shadow-[#74f0ed]   ">
        <div className="container flex justify-between sm:px-12 px-6 items-center">
          <div className="">
            <h2 className="sm:text-4xl text-2xl text-[#74f0ed] font-semibold">
              Parbhat Kumar
            </h2>
          </div>
          <div className="sm:block hidden">
            <ul className=" flex gap-7">
              <li className="hover:text-[#74f0ed] cursor-pointer text-xl  hover:underline-offset-4 hover:underline">
                Home{" "}
              </li>
              <li className="hover:text-[#74f0ed]  cursor-pointer text-xl hover:underline hover:underline-offset-4 ">
                About
              </li>
              <li className="hover:text-[#74f0ed]  cursor-pointer  text-xl  hover:underline hover:underline-offset-4 ">
                Services
              </li>
              <li className="hover:text-[#74f0ed] cursor-pointer text-xl  hover:underline hover:underline-offset-4 ">
                Contact
              </li>
            </ul>
          </div>
          <div className="">
            <button className=" px-4 py-2 hover:shadow-lg hover:shadow-[#74f0ed] rounded-lg font-semibold bg-[#74f0ed] text-black mt-2">
              Hire Me
            </button>
          </div>
          <div className="sm:hidden block ">
            <Sheet>
              <SheetTrigger>
                <MdMenu className="text-2xl" />
              </SheetTrigger>
              <SheetContent className="bg-black text-[#74f0ed]">
                <SheetHeader>
                  <SheetTitle className="text-2xl text-[#74f0ed] underline underline-offset-4">
                    Menubar
                  </SheetTitle>
                </SheetHeader>
                <div className=" text-center">
                  <ul>
                    <li className="mt-2 font-semibold  text-xl  hover:rounded py-1  hover:bg-[#74f0ed] hover:text-[#071c2a]">
                      Home
                    </li>
                    <li className="mt-2 font-semibold  text-xl  hover:rounded py-1  hover:bg-[#74f0ed] hover:text-[#071c2a]">
                      About
                    </li>
                    <li className="mt-2 font-semibold  text-xl  hover:rounded py-1  hover:bg-[#74f0ed] hover:text-[#071c2a]">
                      Contact
                    </li>
                    <li className="mt-2 font-semibold  text-xl  hover:rounded py-1  hover:bg-[#74f0ed] hover:text-[#071c2a]">
                      Services
                    </li>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
