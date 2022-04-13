import React, { useEffect, useRef } from "react";
import landingLottie2 from "./landing-lottie2.json";
import Lottie from "lottie-web";
import HorizontalDotSeparator from "./sub-components/HorizontalDotSeparator";
import AlumniQuote from "./sub-components/AlumniQuote";
import LandingFooter from "./sub-components/LandingFooter";
import HighlightIcons from "./sub-components/HighlightIcons";
import BlobSvg from "./sub-components/BlobSvg";
import StaffSignupModal from "./sub-components/StaffSignupModal";
import StudentSignupModal from "./sub-components/StudentSignupModel";
import AlumniSignupModal from "./sub-components/AlumniSignupModal";
import AdminLoginModal from "./sub-components/AdminLoginModal";
import AlumniLoginModal from "./sub-components/AlumniLoginModal";
import StudentLoginModal from "./sub-components/StudentLoginModal";
import StaffLoginModal from "./sub-components/StaffLoginModal";

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
            <li className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1 hover:shadow-md shadow-white">
              FEATURES
            </li>
            <li className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1 hover:shadow-md shadow-white">
              ABOUT
            </li>
            <li className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1 hover:shadow-md shadow-white">
              REVIEWS
            </li>
            <li className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1 hover:shadow-md shadow-white">
              <span className="mr-2">MORE</span>
              <i className="bi bi-chevron-down font-semibold"></i>
            </li>
            {/* VERTICAL LINE  */}
            <div
              className="w-0 h-4 bg-white rounded-lg mx-7"
              style={{ width: "2px" }}
            ></div>

            <li className="dropdown">
              <button
                className="mx-1 px-4 py-1 rounded-sm hover:bg-transparentWhite1 hover:shadow-md shadow-white"
                type="button"
                id="login-dropdown-button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                LOGIN
              </button>
              <ul
                className="dropdown-menu mt-2 shadow shadow-black pl-5"
                aria-labelledby="login-dropdown-button"
              >
                <li className="flex items-center mb-3 mt-2 cursor-pointer" data-bs-toggle="modal" data-bs-target="#login-admin-backdrop">
                  <i className="bi bi-person-check-fill text-base bg-transparentBlue1 py-1 px-2 rounded-full shadow-highlightIconHover"></i>
                  <span className="ml-5 font-normal">
                    ADMIN
                  </span>
                </li>
                <li className="flex items-center my-3 cursor-pointer" data-bs-toggle="modal" data-bs-target="#login-alumni-backdrop">
                  <i className="bi bi-mortarboard-fill text-base bg-transparentBlue1 py-1 px-2 rounded-full shadow-highlightIconHover"></i>
                  <span className="ml-5 font-normal">
                    ALUMNI
                  </span>
                </li>
                <li className="flex items-center my-3 cursor-pointer" data-bs-toggle="modal" data-bs-target="#login-staff-backdrop">
                  <i className="bi bi-person-rolodex text-base bg-transparentBlue1 py-1 px-2 rounded-full shadow-highlightIconHover"></i>
                  <span className="ml-5 font-normal">
                    STAFF
                  </span>
                </li>
                <li className="flex items-center mt-3 mb-2 cursor-pointer" data-bs-toggle="modal" data-bs-target="#login-student-backdrop">
                  <i className="bi bi-person-fill text-base bg-transparentBlue1 py-1 px-2 rounded-full shadow-highlightIconHover"></i>
                  <span className="ml-5 font-normal">
                    STUDENT
                  </span>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <button
                className="mx-1 px-4 py-1 bg-transparentBlack1 hover:bg-transparentBlack2 rounded-sm hover:shadow-md shadow-white"
                type="button"
                id="signup-dropdown-button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SIGNUP
              </button>
              <ul
                className="dropdown-menu mt-2 shadow shadow-black pl-5"
                aria-labelledby="signup-dropdown-button"
              >
                <li className="flex items-center mt-2 mb-3 cursor-pointer" data-bs-toggle="modal" data-bs-target="#signup-alumni-backdrop">
                  <i className="bi bi-mortarboard-fill text-base bg-transparentBlue1 py-1 px-2 rounded-full shadow-highlightIconHover"></i>
                  <span className="ml-5 font-normal">
                    ALUMNI
                  </span>
                </li>
                <li className="flex items-center my-3 cursor-pointer" data-bs-toggle="modal" data-bs-target="#signup-staff-backdrop">
                  <i className="bi bi-person-rolodex text-base bg-transparentBlue1 py-1 px-2 rounded-full shadow-highlightIconHover"></i>
                  <span className="ml-5 font-normal">
                    STAFF
                  </span>
                </li>
                <li className="flex items-center mt-3 mb-2 cursor-pointer" data-bs-toggle="modal" data-bs-target="#signup-student-backdrop">
                  <i className="bi bi-person-fill text-base bg-transparentBlue1 py-1 px-2 rounded-full shadow-highlightIconHover"></i>
                  <span className="ml-5 font-normal">
                    STUDENT
                  </span>
                </li>
              </ul>
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
              className="text-white bg-buttonCyan px-4 py-3 rounded-md mt-4 hover:shadow-md shadow-white"
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
      {/* <!-- Modal --> */}
      <AlumniSignupModal />
      <StaffSignupModal />
      <StudentSignupModal />
      <AdminLoginModal />
      <AlumniLoginModal />
      <StaffLoginModal />
      <StudentLoginModal />
      {/* <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
