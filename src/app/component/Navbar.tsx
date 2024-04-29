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
      <div className=" bg-[#000000] text-white h-14 shadow-lg shadow-[#74f0ed] ">
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
          <div className="sm:hidden block">
            <Sheet>
              <SheetTrigger ><MdMenu className="text-2xl" /></SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle><li className="list-none text-starthover:text-[#74f0ed] cursor-pointer hover:underline">Home</li></SheetTitle>
                  <SheetTitle><li className="list-none text-starthover:text-[#74f0ed] cursor-pointer hover:underline">About</li></SheetTitle>
                  <SheetTitle><li className="list-none text-starthover:text-[#74f0ed] cursor-pointer hover:underline">Contact</li></SheetTitle>
                  <SheetTitle><li className="list-none text-starthover:text-[#74f0ed] cursor-pointer hover:underline">Services</li></SheetTitle>
                  
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
