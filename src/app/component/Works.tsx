const Works = () => {
  return (
    <>
      <div id="about"  className=" bg-[#071c2a] text-white mt-1 items-center ">

        <h1 className="sm:text-5xl flex justify-center text-3xl font-bold underline hover:decoration-[#74F0ed] sm:py-12 py-8 hover:text-[#74f0ed]">
          About Us
        </h1>
     
      <div  className="grid sm:grid-cols-2 grid-cols-1 sm:py-20 py-12 bg-[#071c2a] text-[#74f0ed] items-center shadow-lg shadow-[#74f0ed]">
        <div className="">
        <div className=" w-full text-white  ">
          <div className="border-[7px] border-[#74f0ed]   rounded-full items-center sm:h-[300px] h-[240px] sm:w-[300px] w-[240px] sm:my-0 my-12 mx-auto shadow-lg shadow-[#74f0ed]">
            <img src="/img/img1.png" className="sm:w-fit w-[200px] sm:ps-9  sm:sm:-ml-4 ml-3 -mt-1 sm:-rotate-3  rounded-full  " alt="" />
          </div>
        </div>
        </div>
        <div className="w-full ">
          <h1 className="mt-2 text-4xl text-[#74f0ed] sm:text-start text-center font-bold hover:underline hover:text-[#74f0ed] hover:decoration-[#74F0ed]">
            About
          </h1>
          <p className="sm:pr-24 sm:px-0 px-6 py-4 sm:text-justify  text-center text-xl ">
          I am Web Devloper. And i am programming learning such as HTML, CSS, and JavaScript, web developers translate design concepts into functional and interactive online experiences.HTML forms the structure of web pages, CSS adds style and aesthetics, while JavaScript introduces interactivity and dynamic functionality. As a web developer, I thrive in the dynamic and ever-evolving realm of digital creation. 
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Works;
