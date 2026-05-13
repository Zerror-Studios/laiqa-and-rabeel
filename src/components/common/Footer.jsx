import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full COLOR_BG_CREAM py-8 border-t z-100 border-[#5513013b] max-md:px-5 px-10 flex max-md:flex-col max-md:justify-center max-md:items-center">



      <div className="w-fit h-fit flex justify-center items-center  ">
        <Link href={`/`} ><img src={`/svgs/CustomLogo.svg`} alt="Logo" className='h-[50px] object-cover object-center' /></Link>
      </div>

      <div className="w-[1px] h-[50px] COLOR_BG_RED mx-10 COLOR_TEXT_RED max-md:w-[50px] max-md:h-[1px] max-md:hidden ">
      </div>

      <div className="w-1/2 flex flex-col COLOR_TEXT_RED ml-auto max-md:w-full max-md:mt-5 justify-end items-end  max-md:text-center ">
        <span className=" Font_YV text-[14px]">For any questions, please reach out to the L&R planning team at:</span>

        <span className=" Font_YV flex gap-2 max-md:gap-0 max-md:mt-2  max-md:flex-col max-md:text-[14px] max-md:mx-auto max-md:text-center">

          <a href="mailto:laiqaandrabeel@gmail.com"><span className=" relative flex flex-col w-fit  group  cursor-pointer select-none max-md:mx-auto font-semibold text-[14px]">  laiqaandrabeel@gmail.com
            <div className="h-[1px] w-[0px]  COLOR_BG_RED transition-all duration-150 ease-in-out group-hover:w-full select-none  ">
            </div>
          </span></a>


          <span  className="max-md:hidden">|</span>

          <a href="tel:+919358800614"><span className=" relative flex flex-col w-fit  group text-[14px]  cursor-pointer select-none max-md:mx-auto font-semibold">  +91 93588 00614
            <div className="h-[1px] w-[0px] COLOR_BG_RED transition-all duration-150 ease-in-out group-hover:w-full select-none  ">
            </div>
          </span></a>

          <span  className="max-md:hidden">|</span>

          <a href="tel:+919310069102"><span className=" relative flex flex-col w-fit  group  cursor-pointer select-none max-md:mx-auto font-semibold">  +91 93100 69102
            <div className="h-[1px] w-[0px] COLOR_BG_RED transition-all duration-150 ease-in-out group-hover:w-full select-none  ">
            </div>
          </span></a>
        </span>
      </div>



     

    </footer>
  );
};

export default Footer;