import React from "react";

export default function LandingPage() {
  return (
    <div className="relative landing-review" style={{ minHeight: "90vh" }}>
      {/* NAVBAR 1 */}
      <div className="pt-8 xl2:px-20 px-10 flex justify-between items-center">
        {/* LOGO  */}
        {/* <div className="text-white font-semibold flex items-center">
          <i class="bi bi-house text-2xl"></i>
          <span className="ml-4">MY COLLEGE DASHBOARD</span>
        </div> */}
        <ul className="flex ml-auto w-fit items-center text-white font-semibold">
          <li className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1">
            FEATURES
          </li>
          <li className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1">
            PRICING
          </li>
          <li className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1">
            REVIEWS
          </li>
          <li className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1">
            MORE
          </li>
          {/* VERTICAL LINE  */}
          <div
            className="w-0 h-4 bg-white rounded-lg mx-7"
            style={{ width: "2px" }}
          ></div>
          <li className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1">
            LOGIN
          </li>
          <li className="mx-1 px-4 py-1 bg-transparentBlack1 hover:bg-transparentBlack2 rounded-sm">
            SIGNUP
          </li>
        </ul>
      </div>
      {/* LOGO 
      <div className="absolute top-8 left-20 text-white font-semibold flex items-center">
        <i class="bi bi-house text-base"></i>
        <span className="ml-2">MY COLLEGE DASHBOARD</span>
      </div> */}
      {/* Blob SVG  */}
      {/* REVIEW CONTENT */}
      <div className="mt-32 grid grid-cols-6 gap-4">
        <div></div>
        {/* LEFT REVIEW  */}
        <div className="col-span-2">
          <h1 className="text-white text-5xl font-bold">Make cool pages easily with vApp.</h1>
          <p className="text-gray-300 mt-2 text-lg pr-7">
            No one cares about products. People care about ideas. It is a
            product or an idea? No. It's a brand? A good one is.
          </p>
          <button className="text-white bg-buttonCyan px-4 py-3 rounded-md mt-4" type="button">
            <span className="mr-4 text-base font-semibold">
            Start free trial
            </span>
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
        <div className="col-span-2"></div>
        {/* <div></div> */}
      </div>
      <div class="custom-shape-divider-bottom-1649408986 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
