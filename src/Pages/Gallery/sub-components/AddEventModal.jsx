import React from "react";

export default function AddEventModal() {
  return (
    <div
      className="modal fade"
      id="add-event-backdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "650px" }}
      >
        <div className="modal-content rounded-3xl border-0 px-20">
          <span className="ml-auto relative top-12">
            <i
              className="bi bi-x-lg text-2xl py-1 px-2 rounded-md hover:bg-themeViolet1 bg-transparentBlue2 text-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </span>
          <div className="modal-header flex justify-center pb-5 border-0">
            <div>
              <h5
                className="modal-title font-bold text-2xl "
                id="staticBackdropLabel"
              >
                EVENT
              </h5>
            </div>
          </div>
          <div className="modal-body">
            {/* NAME  */}
            <div className="input-group mb-4">
              <span
                className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-image-fill text-2xl text-white"></i>
              </span>
              <input
                type="file"
                className="form-control border-l-0 rounded-lg border-0 shadow "
                placeholder="Event Image"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            {/* title  */}
            <div className="input-group my-4">
              <span
                className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-journal text-2xl text-white"></i>
              </span>
              <input
                type="text"
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="Title"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            {/* PHONE */}
            {/* PASSWORD.  */}
            <div className="input-group my-4">
              <span
                className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-journal-text text-2xl text-white"></i>
              </span>
              <textarea
                name="event-description"
                id=""
                cols="30"
                rows="10"
                placeholder="Description"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="form-control border-l-0 rounded-lg border-0 shadow"
              ></textarea>
            </div>
            {/* SIGN UP BUTTON  */}
            <div className="flex justify-center mt-4 mb-6">
              <button
                className="rounded-lg py-2 px-8 landing-review text-white form-submit-button"
                type="submit"
              >
                UPLOAD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
