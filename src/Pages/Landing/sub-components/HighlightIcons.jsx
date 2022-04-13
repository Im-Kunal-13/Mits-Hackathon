import React from "react";

export default function HighlightIcons() {
  return (
    <div className="flex justify-evenly items-center mt-20 mb-20">
      <div className="items-center text-center">
        <i className="bi bi-bank2 text-5xl py-4 px-8 bg-transparentBlue1 hover:bg-transparentBlue2 rounded-full shadow-highlightIconHover"></i>
        <p className="mt-10 font-semibold text-lg">
          Colleges: <span className="font-normal">42</span>
        </p>
      </div>
      <div className="items-center text-center">
        <i className="bi bi-mortarboard-fill text-5xl py-4 px-8 bg-transparentBlue1 hover:bg-transparentBlue2 rounded-full shadow-highlightIconHover"></i>
        <p className="mt-10 font-semibold text-lg">
          Alumnus: <span className="font-normal">123</span>
        </p>
      </div>
      <div className="items-center text-center">
        <i className="bi bi-trophy-fill text-5xl py-4 px-8 bg-transparentBlue1 hover:bg-transparentBlue2 rounded-full shadow-highlightIconHover"></i>
        <p className="mt-10 font-semibold text-lg">
          Achievements: <span className="font-normal">84</span>
        </p>
      </div>
      <div className="items-center text-center">
        <i className="bi bi-image text-5xl py-4 px-8 bg-transparentBlue1 hover:bg-transparentBlue2 rounded-full shadow-highlightIconHover"></i>
        <p className="mt-10 font-semibold text-lg">
          Gallery: <span className="font-normal">667</span>
        </p>
      </div>
    </div>
  );
}
