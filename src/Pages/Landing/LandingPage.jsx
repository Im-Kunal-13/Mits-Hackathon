import React, { useEffect, useRef } from "react";
import landingLottie2 from "./landing-lottie2.json";
import Lottie from "lottie-web";
import HorizontalDotSeparator from "./sub-components/HorizontalDotSeparator";
import AlumniQuote from "./sub-components/AlumniQuote";
import LandingFooter from "./sub-components/LandingFooter";
import HighlightIcons from "./sub-components/HighlightIcons";
import BlobSvg from "./sub-components/BlobSvg";

export default function LandingPage() {
  // Getting a reference to the animation container.
  let animationContainer = useRef(null);
  const anim = useRef(null);

  // loading the animation once the component is mounted using useEffect.
  useEffect(() => {
    if (animationContainer.current) {
      anim.current = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: landingLottie2,
      });

      return () => anim.current?.destroy();
    }
  }, []);

  return (
    <div>
      <div className="relative landing-review pb-10" style={{}}>
        {/* NAVBAR 1 */}
        <div className="pt-8 xl2:px-20 px-10 flex justify-between items-center">
          {/* LOGO  */}
          {/* <div className="text-white font-semibold flex items-center">
          <i className="bi bi-house text-2xl"></i>
          <span className="ml-4">MY COLLEGE DASHBOARD</span>
        </div> */}
          <ul className="flex ml-auto w-fit items-center text-white font-semibold">
            <li className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1">
              FEATURES
            </li>
            <li className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1">
              ABOUT
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
        {/* REVIEW CONTENT */}
        <div className="mt-32 grid grid-cols-6 gap-4">
          <div></div>
          {/* LEFT REVIEW  */}
          <div className="col-span-2">
            <h1 className="text-white text-5xl font-bold">
              Make connection with peers easily.
            </h1>
            <p className="text-gray-300 mt-2 text-lg pr-7">
              No one cares about products. People care about ideas. It is a
              product or an idea? No. It's a brand? A good one is.
            </p>
            <button
              className="text-white bg-buttonCyan px-4 py-3 rounded-md mt-4"
              type="button"
            >
              <span className="mr-4 text-base font-semibold">
                Start connecting
              </span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div
            className="col-span-2 relative bottom-20"
            ref={animationContainer}
          ></div>
          {/* <div></div> */}
        </div>
        {/* Blob SVG  */}
        <BlobSvg />
      </div>
      {/* horizontal dot separator  */}
      <HorizontalDotSeparator />
      {/* ALUMNI QUOTE  */}
      <AlumniQuote />
      {/* horizontal dot separator  */}
      <HorizontalDotSeparator />
      {/* ALUMNI QUOTE  */}
      {/* HIGHLIGHT ICONS  */}
      <HighlightIcons />
      {/* FOOTER  */}
      <LandingFooter />
    </div>
  );
}
