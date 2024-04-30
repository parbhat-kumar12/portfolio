import { SiHtmx } from "react-icons/si";

const Services = () => {
  return (
    <>
      <div className="text-center bg-[#071c2a] text-white mt-1 shadow-lg  shadow-[#74f0ed]">
        <h1 className="sm:text-5xl text-3xl font-bold underline hover:text-[#74f0ed] hover:decoration-[#74F0ed] sm:py-12 py-8">
          Services
        </h1>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-7 sm:px-20 px-8 sm:py-20 py-12 bg-[#071c2a] text-[#74F0ed]">
        <div className="border rounded-lg hover:-rotate-2  text-center shadow-lg shadow-[#74f0ed]">
          <span className=" flex justify-center text-4xl mt-2 ">
            <SiHtmx />
          </span>
          <h1 className="sm:text-4xl text-3xl pt-4">Web devloper</h1>
          <p className="px-2 py-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            laudantium ea quidem error eius ipsam, accusamus dolore dolores
            magni? Doloremque cumque incidunt natus quo dolor illo explicabo
            numquam eligendi possimus.
          </p>
        </div>
        <div className="border rounded-lg hover:-rotate-2 text-center shadow-lg shadow-[#74f0ed]">
          <span className=" flex justify-center text-4xl mt-2 ">
            <SiHtmx />
          </span>
          <h1 className="text-4xl pt-4">Web devloper</h1>
          <p className="px-2 py-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            laudantium ea quidem error eius ipsam, accusamus dolore dolores
            magni? Doloremque cumque incidunt natus quo dolor illo explicabo
            numquam eligendi possimus.
          </p>
        </div>
        <div className="border rounded-lg text-center hover:-rotate-2 shadow-lg shadow-[#74f0ed]">
          <span className=" flex justify-center text-4xl mt-2 ">
            <SiHtmx />
          </span>
          <h1 className="text-4xl pt-4">Web devloper</h1>
          <p className="px-2 py-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            laudantium ea quidem error eius ipsam, accusamus dolore dolores
            magni? Doloremque cumque incidunt natus quo dolor illo explicabo
            numquam eligendi possimus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
