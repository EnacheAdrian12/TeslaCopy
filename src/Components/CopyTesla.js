import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const CopyTesla = () => {
  return (
    <>
      <div className="bg-[url('./photos/tesla1.avif')] bg-cover bg-center h-screen ">
        <div className="flex justify-between font-bold pt-5 ">
          <div className="flex-1 ml-8">
            <svg
              className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon w-32"
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="grow hidden xl:inline ">
            <ul className="flex flex-row justify-center text-dark text-[14px] ">
              <li className="py-1 px-3  hover:rounded hover:bg-slate-400/50  hover:cursor-pointer">
                Model S
              </li>
              <li className="py-1 px-5  hover:rounded hover:bg-slate-400/50 hover:cursor-pointer">
                Model 3
              </li>
              <li className="py-1 px-5  hover:rounded hover:bg-slate-400/50 hover:cursor-pointer">
                Model X
              </li>
              <li className="py-1 px-5 hover:rounded hover:bg-slate-400/50 hover:cursor-pointer">
                Model Y
              </li>
              <li className="py-1 px-5  hover:rounded hover:bg-slate-400/50 hover:cursor-pointer">
                Solar Roof
              </li>
              <li className="py-1 px-5 hover:rounded hover:bg-slate-400/50 hover:cursor-pointer sm:show">
                Solar Panels
              </li>
            </ul>
          </div>
          <div className="flex-1 hidden xl:inline ">
            <ul className="flex flex-row justify-end text-dark text-[14px]">
              <li className=" hover:rounded hover:bg-slate-400/50 py-1 px-3 hover:cursor-pointer">
                Shop
              </li>
              <li className=" hover:rounded hover:bg-slate-400/50 py-1 px-3 hover:cursor-pointer">
                Account
              </li>
              <li className=" hover:rounded hover:bg-slate-400/50 py-1 px-3 hover:cursor-pointer ">
                Menu
              </li>
            </ul>
          </div>
        </div>
        {/* Model 3 */}
        <div className="flex flex-col justify-center mt-28">
          <h1 className="text-[40px] m-auto font-bold text-dark">Model 3</h1>
          <p className="m-auto pt-1 text-[16px] text-light">
            Order Online for{" "}
            <span className="underline"> Touchless Delivery</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-[400px] md:mt-[530px] text-[14px] md:flex-row">
          <button className="rounded bg-gray-800 w-96 md:w-60 mx-0 h-10 text-white md:mx-4">
            Custom Order
          </button>
          <button className="rounded bg-slate-200 w-96 md:w-60 mx-0 h-10 text-gray-900 md:mx-4 md:mt-0 mt-2">
            Existing Inventory
          </button>
        </div>
        <div className="flex justify-center">
          <div className="animate-bounce">
            <IoChevronDownOutline className="mt-16" />
          </div>
        </div>
      </div>
      {/* Model Y */}
      <div className="bg-[url('./photos/tesla2.avif')] bg-cover bg-center h-screen">
        <div className="flex flex-col justify-center pt-28">
          <h1 className="text-[40px] m-auto font-bold text-dark">Model Y</h1>
          <p className="m-auto pt-1 text-[16px] text-light">
            Order Online for{" "}
            <span className="underline"> Touchless Delivery</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-[400px] md:mt-[580px] text-[14px] md:flex-row">
          <button className="rounded bg-gray-800 w-96 md:w-60 mx-0 h-10 text-white md:mx-4">
            Custom Order
          </button>
          <button className="rounded bg-slate-200 w-96 md:w-60 mx-0 h-10 text-gray-900 md:mx-4 md:mt-0 mt-2">
            Existing Inventory
          </button>
        </div>
      </div>
      {/* Model S */}
      <div className="bg-[url('./photos/tesla3.avif')] bg-cover bg-center h-screen">
        <div className="flex flex-col justify-center pt-28">
          <h1 className="text-[40px] m-auto font-bold text-dark">Model S</h1>
          <p className="m-auto pt-1 text-[16px] text-light">
            Order Online for{" "}
            <span className="underline"> Touchless Delivery</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-[400px] md:mt-[580px] text-[14px] md:flex-row">
          <button className="rounded bg-gray-800 w-96 md:w-60 mx-0 h-10 text-white md:mx-4">
            Custom Order
          </button>
          <button className="rounded bg-slate-200 w-96 md:w-60 mx-0 h-10 text-gray-900 md:mx-4 md:mt-0 mt-2">
            Existing Inventory
          </button>
        </div>
      </div>
      {/* Model X */}
      <div className="bg-[url('./photos/tesla4.avif')] bg-cover bg-center h-screen">
        <div className="flex flex-col justify-center pt-28">
          <h1 className="text-[40px] m-auto font-bold text-dark">Model X</h1>
          <p className="m-auto pt-1 text-[16px] text-light">
            Order Online for{" "}
            <span className="underline"> Touchless Delivery</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-[400px] md:mt-[580px] text-[14px] md:flex-row">
          <button className="rounded bg-gray-800 w-96 md:w-60 mx-0 h-10 text-white md:mx-4">
            Custom Order
          </button>
          <button className="rounded bg-slate-200 w-96 md:w-60 mx-0 h-10 text-gray-900 md:mx-4 md:mt-0 mt-2">
            Existing Inventory
          </button>
        </div>
      </div>
      {/* Solar Panels */}
      <div className="bg-[url('./photos/tesla5.avif')] bg-cover bg-center h-screen">
        <div className="flex flex-col justify-center pt-28">
          <h1 className="text-[40px] m-auto font-bold text-dark">
            Solar Panels
          </h1>
          <p className="m-auto pt-1 text-[16px] text-light">
            Lowest Cost Solar Panels in America
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-[400px] md:mt-[580px] text-[14px] md:flex-row">
          <button className="rounded bg-gray-800 w-96 md:w-60 mx-0 h-10 text-white md:mx-4">
            Order Now
          </button>
          <button className="rounded bg-slate-200 w-96 md:w-60 mx-0 h-10 text-gray-900 md:mx-4 md:mt-0 mt-2">
            Learn More
          </button>
        </div>
      </div>
      {/* Solar Roof */}
      <div className="bg-[url('./photos/tesla6.avif')] bg-cover bg-center h-screen">
        <div className="flex flex-col justify-center pt-28">
          <h1 className="text-[40px] m-auto font-bold text-dark">Solar Roof</h1>
          <p className="m-auto pt-1 text-[16px] text-light">
            Produce Clean Energy from Your Roof
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-[400px] md:mt-[580px] text-[14px] md:flex-row">
          <button className="rounded bg-gray-800 w-96 md:w-60 mx-0 h-10 text-white md:mx-4">
            Order Now
          </button>
          <button className="rounded bg-slate-200 w-96 md:w-60 mx-0 h-10 text-gray-900 md:mx-4 md:mt-0 mt-2">
            Learn More
          </button>
        </div>
      </div>
      {/* Accessories */}
      <div className="bg-[url('./photos/tesla7.avif')] bg-cover bg-center h-screen">
        <div className="flex flex-col justify-center pt-28">
          <h1 className="text-[40px] m-auto font-bold text-dark">
            Accessories
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-[400px] md:mt-[580px] text-[14px] md:flex-row">
          <button className="rounded bg-gray-800 w-96 md:w-60 mx-0 h-10 text-white md:mx-4">
            Shop Now
          </button>
        </div>
      </div>
      <div class="flex justify-center pb-5">
        <div class="grow">
          <ul class="flex flex-col md:flex-row items-center justify-center text-neutral-700 text-[12px]">
            <li class="mx-5">Tesla © 2022</li>
            <li class="mx-5">Privacy {"&"} Legal</li>
            <li class="mx-5">Contact</li>
            <li class="mx-5">Careers</li>
            <li class="mx-5">News</li>
            <li class="mx-5">Engage</li>
            <li class="mx-5">Locations</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CopyTesla;
