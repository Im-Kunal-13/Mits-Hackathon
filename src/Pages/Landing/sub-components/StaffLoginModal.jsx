import React from "react";

export default function StaffLoginModal() {
  return (
    <div
      className="modal fade"
      id="login-staff-backdrop"
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
                Sign In
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
                <i className="bi bi-person-circle text-2xl text-white"></i>
              </span>
              <input
                type="text"
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            {/* EMAIL  */}
            <div className="input-group my-4">
              <span
                className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-envelope-open-fill text-2xl text-white"></i>
              </span>
              <input
                type="email"
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="Email"
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
                <i className="bi bi-key-fill text-xl text-white"></i>
              </span>
              <input
                type="password"
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="input-group-text bg-themeViolet1 border-l-0 rounded-lg border-0 shadow">
                <i className="bi bi-eye-fill text-lg text-white"></i>
              </span>
            </div>
            {/* TERMS & CONDITIONS  */}
            <div className="form-check flex justify-center items-center mt-4">
              <input
                className="form-check-input mr-2 terms-checkbox"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label text-xs mt-1"
                htmlFor="flexCheckDefault"
              >
                I have read and agreed to{" "}
                <span className="text-themeViolet1 cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>
            {/* SIGN UP BUTTON  */}
            <div className="flex justify-center mt-4">
              <button
                className="rounded-lg py-2 px-8 landing-review text-white form-submit-button"
                type="submit"
              >
                SIGN IN
              </button>
            </div>
            {/* ALREADY HAVE AN ACCOUNT  */}
            <div className="form-check flex justify-center items-center my-4 p-0">
              <label
                className="form-check-label text-xs mt-1"
                htmlFor="flexCheckDefault"
              >
                Don't have an account yet?{" "}
                <span className="text-themeViolet1 cursor-pointer">
                  Sign Up
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
