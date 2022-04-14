import React from "react";
import AddEventModal from "./sub-components/AddEventModal";

export default function Gallery() {
  return (
    <div className="px-20 py-20">
        {/* SEARCH AND ADD BUTTON  */}
      <div className="flex items-center justify-between">
        {/* SEARCH INPUT  */}
        <div className="input-group rounded-lg shadow-gallerySearchInput w-4/5">
          <span
            className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0"
            id="basic-addon1"
          >
            <i className="bi bi-search text-2xl text-white"></i>
          </span>
          <input
            type="text"
            className="form-control border-l-0 rounded-lg border-0 focus:shadow-none"
            placeholder="Search Gallery"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        {/* ADD NEW BUTTON  */}
        <span>
          <i
            className="bi bi-plus-lg text-2xl py-2 px-3 rounded-md hover:bg-themeViolet1 bg-transparentBlue2 text-white shadow-gallerySearchInput transition-all"
            data-bs-toggle="modal" data-bs-target="#add-event-backdrop"
          ></i>
        </span>
      </div>
      {/* IMAGES  */}
      <div className="grid grid-cols-3 mt-20">
        <div className="py-4 px-3">
          <img
            src={require("./assets/Orientation_program.png")}
            alt=""
            className="rounded-lg shadow-gallerySearchInput hover:scale-110 transition-all w-full h-full"
          />
        </div>
        <div className="py-4 px-3">

          <img
            src={require("./assets/Journalism_day.png")}
            alt=""
            className="rounded-lg shadow-gallerySearchInput hover:scale-110 transition-all w-full h-full"
          />
        </div>
        <div className="py-4 px-3">

          <img
            src={require("./assets/Webinar_on_safe_drug_disposal.png")}
            alt=""
            className="rounded-lg shadow-gallerySearchInput hover:scale-110 transition-all w-full h-full"
          />
        </div>
        <div className="py-4 px-3">

          <img
            src={require("./assets/online_workshop.png")}
            alt=""
            className="rounded-lg shadow-gallerySearchInput hover:scale-110 transition-all w-full h-full"
          />
        </div>
        <div className="py-4 px-3">

          <img
            src={require("./assets/FDP_on_Blockchain.png")}
            alt=""
            className="rounded-lg shadow-gallerySearchInput hover:scale-110 transition-all w-full h-full"
          />
        </div>
        <div className="py-4 px-3">

          <img
            src={require("./assets/National_Science_Day.png")}
            alt=""
            className="rounded-lg shadow-gallerySearchInput hover:scale-110 transition-all w-full h-full"
          />
        </div>
        <div className="py-4 px-3">

          <img
            src={require("./assets/Industrial_visit.png")}
            alt=""
            className="rounded-lg shadow-gallerySearchInput hover:scale-110 transition-all w-full h-full"
          />
        </div>
        <div className="py-4 px-3">

          <img
            src={require("./assets/Nartional_Workshop.png")}
            alt=""
            className="rounded-lg shadow-gallerySearchInput hover:scale-110 transition-all w-full h-full"
          />
        </div>
        <div className="py-4 px-3">

          <img
            src={require("./assets/Expert_Talk.png")}
            alt=""
            className="rounded-lg shadow-gallerySearchInput hover:scale-110 transition-all w-full h-full"
          />
        </div>
        <div className="py-4 px-3">

          <img
            src={require("./assets/workshop_on_Mixology.png")}
            alt=""
            className="rounded-lg shadow-gallerySearchInput hover:scale-110 transition-all w-full h-full"
          />
        </div>
      </div>
      {/* EVENT MODAL  */}
      {/* ADD EVENT MODAL  */}
      <AddEventModal />
    </div>
  );
}
