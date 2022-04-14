import React from "react";

export default function Gallery() {
  return (
    <div className="px-40 py-20">
      {/* SEARCH INPUT  */}
      <div className="input-group mb-4 rounded-lg shadow-gallerySearchInput">
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
    </div>
  );
}
