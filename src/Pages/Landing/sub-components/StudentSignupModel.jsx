import React from "react";

export default function StudentSignupModal() {
  return (
    <div
      className="modal fade"
      id="signup-student-backdrop"
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
          <div className="modal-header flex justify-center pb-2 border-0">
            <div>
              <h5
                className="modal-title font-bold text-2xl "
                id="staticBackdropLabel"
              >
                Sign Up
              </h5>
            </div>
            {/* <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button> */}
          </div>
          {/* NAME  */}
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
            {/* INSTITUTE */}
            <div className="input-group my-4">
              <span
                className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-bank2 text-2xl text-white"></i>
              </span>
              <input
                type="text"
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="College"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            {/* ROLE.  */}
            <div className="input-group my-4">
              <span
                className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-person-workspace text-2xl text-white"></i>
              </span>
              <input
                type="text"
                className="form-control border-l-0 rounded-lg border-0 shadow bg-white"
                placeholder="Role"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="Student"
                readOnly
              />
            </div>
            {/* ENROLLMENT NO.  */}
            <div className="input-group my-4">
              <span
                className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-person-lines-fill text-2xl text-white"></i>
              </span>
              <input
                type="text"
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="Enrollment No"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            {/* JOINING YEAR.  */}
            <div className="input-group my-4">
              <span
                className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-person-plus-fill text-2xl text-white"></i>
              </span>
              <input
                type="date"
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="Joining Year"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            {/* PASSOUT YEAR.  */}
            <div className="input-group my-4">
              <span
                className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-mortarboard-fill text-2xl text-white"></i>
              </span>
              <input
                type="date"
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="Passout Year"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            {/* PASSWORD.  */}
            <div className="input-group my-4">
              <span
                className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-key-fill text-2xl text-white"></i>
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
            {/* CONFIRM PASSWORD.  */}
            <div className="input-group my-4">
              <span
                className="input-group-text bg-themeViolet1 border-r-0 rounded-lg border-0 shadow"
                id="basic-addon1"
              >
                <i className="bi bi-key-fill text-2xl text-white"></i>
              </span>
              <input
                type="password"
                className="form-control border-l-0 rounded-lg border-0 shadow"
                placeholder="Confirm Password"
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
                CREATE ACCOUNT
              </button>
            </div>
            {/* ALREADY HAVE AN ACCOUNT  */}
            <div className="form-check flex justify-center items-center my-4 p-0">
              <label
                className="form-check-label text-xs mt-1"
                htmlFor="flexCheckDefault"
              >
                Already have an account?{" "}
                <span className="text-themeViolet1 cursor-pointer">
                  Sign In
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
