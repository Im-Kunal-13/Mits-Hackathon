import React from "react";
import AddNoticeModal from "./sub-components/AddNoticeModal";

export default function Notices() {
  return (
    <div className="px-20 pt-20 pb-14">
      {/* SEARCH AND ADD BUTTON  */}
      <div className="flex items-center justify-between sticky-top pt-6">
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
            placeholder="Search Notices"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        {/* ADD NEW BUTTON  */}
        <span>
          <i
            className="bi bi-plus-lg text-2xl py-2 px-3 rounded-md hover:bg-themeViolet1 bg-transparentBlue2 text-white shadow-gallerySearchInput transition-all"
            data-bs-toggle="modal"
            data-bs-target="#add-event-backdrop"
          ></i>
        </span>
      </div>
      {/* notices  */}
      <div className="grid grid-cols-3 mt-20">
        <div className="py-4 px-3 ">
          <div className="hover:scale-110 rounded-lg shadow-gallerySearchInput transition-all py-4 px-3">
            {/* HEADER  */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Robert-Pattinson-eyes.jpg"
                  alt=""
                  className="rounded-full h-14 w-14 object-cover"
                />
                <div className="ml-4">
                  {/* NAME  */}
                  <p className="font-semibold text-base">ROBERT PATTINSON</p>
                  {/* DATE */}
                  <p className="text-sm">14 Apr</p>
                </div>
              </div>
              <i className="bi bi-three-dots-vertical text-2xl"></i>
            </div>
            {/* DESCRIPTION  */}
            <div className="px-3 mt-3">
              <p>Dear All,</p>
              <p>Greeting!!</p>
              <p className="mt-3">
                We have an immense pleasure to announce that IES College of
                Technology, Bhopal is organizing a 2- day Inter College
                Tech-Fest (INFORIA 2K22), to provide you a platform to showcase
                your talent and skills.
              </p>
              <p className="mt-3">Event Date: 12th and 13th April 2022.</p>
              <p className="mt-3">
                Kindly fill the Google form below for registration for various
                events.
              </p>
              <p>Looking forward for your participation.</p>
              <p className="mt-5">Regards,</p>
              <p>INFORIA Organizing Committee</p>
              <p className="mt-3">
                Link {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
              <p className="mt-3">
                Attachm {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 px-3 ">
          <div className="hover:scale-110 rounded-lg shadow-gallerySearchInput transition-all py-4 px-3">
            {/* HEADER  */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Robert-Pattinson-eyes.jpg"
                  alt=""
                  className="rounded-full h-14 w-14 object-cover"
                />
                <div className="ml-4">
                  {/* NAME  */}
                  <p className="font-semibold text-base">ROBERT PATTINSON</p>
                  {/* DATE */}
                  <p className="text-sm">14 Apr</p>
                </div>
              </div>
              <i className="bi bi-three-dots-vertical text-2xl"></i>
            </div>
            {/* DESCRIPTION  */}
            <div className="px-3 mt-3">
              <p>Dear All,</p>
              <p>Greeting!!</p>
              <p className="mt-3">
                We have an immense pleasure to announce that IES College of
                Technology, Bhopal is organizing a 2- day Inter College
                Tech-Fest (INFORIA 2K22), to provide you a platform to showcase
                your talent and skills.
              </p>
              <p className="mt-3">Event Date: 12th and 13th April 2022.</p>
              <p className="mt-3">
                Kindly fill the Google form below for registration for various
                events.
              </p>
              <p>Looking forward for your participation.</p>
              <p className="mt-5">Regards,</p>
              <p>INFORIA Organizing Committee</p>
              <p className="mt-3">
                Link {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
              <p className="mt-3">
                Attachm {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 px-3 ">
          <div className="hover:scale-110 rounded-lg shadow-gallerySearchInput transition-all py-4 px-3">
            {/* HEADER  */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Robert-Pattinson-eyes.jpg"
                  alt=""
                  className="rounded-full h-14 w-14 object-cover"
                />
                <div className="ml-4">
                  {/* NAME  */}
                  <p className="font-semibold text-base">ROBERT PATTINSON</p>
                  {/* DATE */}
                  <p className="text-sm">14 Apr</p>
                </div>
              </div>
              <i className="bi bi-three-dots-vertical text-2xl"></i>
            </div>
            {/* DESCRIPTION  */}
            <div className="px-3 mt-3">
              <p>Dear All,</p>
              <p>Greeting!!</p>
              <p className="mt-3">
                We have an immense pleasure to announce that IES College of
                Technology, Bhopal is organizing a 2- day Inter College
                Tech-Fest (INFORIA 2K22), to provide you a platform to showcase
                your talent and skills.
              </p>
              <p className="mt-3">Event Date: 12th and 13th April 2022.</p>
              <p className="mt-3">
                Kindly fill the Google form below for registration for various
                events.
              </p>
              <p>Looking forward for your participation.</p>
              <p className="mt-5">Regards,</p>
              <p>INFORIA Organizing Committee</p>
              <p className="mt-3">
                Link {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
              <p className="mt-3">
                Attachm {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 px-3 ">
          <div className="hover:scale-110 rounded-lg shadow-gallerySearchInput transition-all py-4 px-3">
            {/* HEADER  */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Robert-Pattinson-eyes.jpg"
                  alt=""
                  className="rounded-full h-14 w-14 object-cover"
                />
                <div className="ml-4">
                  {/* NAME  */}
                  <p className="font-semibold text-base">ROBERT PATTINSON</p>
                  {/* DATE */}
                  <p className="text-sm">14 Apr</p>
                </div>
              </div>
              <i className="bi bi-three-dots-vertical text-2xl"></i>
            </div>
            {/* DESCRIPTION  */}
            <div className="px-3 mt-3">
              <p>Dear All,</p>
              <p>Greeting!!</p>
              <p className="mt-3">
                We have an immense pleasure to announce that IES College of
                Technology, Bhopal is organizing a 2- day Inter College
                Tech-Fest (INFORIA 2K22), to provide you a platform to showcase
                your talent and skills.
              </p>
              <p className="mt-3">Event Date: 12th and 13th April 2022.</p>
              <p className="mt-3">
                Kindly fill the Google form below for registration for various
                events.
              </p>
              <p>Looking forward for your participation.</p>
              <p className="mt-5">Regards,</p>
              <p>INFORIA Organizing Committee</p>
              <p className="mt-3">
                Link {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
              <p className="mt-3">
                Attachm {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 px-3 ">
          <div className="hover:scale-110 rounded-lg shadow-gallerySearchInput transition-all py-4 px-3">
            {/* HEADER  */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Robert-Pattinson-eyes.jpg"
                  alt=""
                  className="rounded-full h-14 w-14 object-cover"
                />
                <div className="ml-4">
                  {/* NAME  */}
                  <p className="font-semibold text-base">ROBERT PATTINSON</p>
                  {/* DATE */}
                  <p className="text-sm">14 Apr</p>
                </div>
              </div>
              <i className="bi bi-three-dots-vertical text-2xl"></i>
            </div>
            {/* DESCRIPTION  */}
            <div className="px-3 mt-3">
              <p>Dear All,</p>
              <p>Greeting!!</p>
              <p className="mt-3">
                We have an immense pleasure to announce that IES College of
                Technology, Bhopal is organizing a 2- day Inter College
                Tech-Fest (INFORIA 2K22), to provide you a platform to showcase
                your talent and skills.
              </p>
              <p className="mt-3">Event Date: 12th and 13th April 2022.</p>
              <p className="mt-3">
                Kindly fill the Google form below for registration for various
                events.
              </p>
              <p>Looking forward for your participation.</p>
              <p className="mt-5">Regards,</p>
              <p>INFORIA Organizing Committee</p>
              <p className="mt-3">
                Link {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
              <p className="mt-3">
                Attachm {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 px-3 ">
          <div className="hover:scale-110 rounded-lg shadow-gallerySearchInput transition-all py-4 px-3">
            {/* HEADER  */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Robert-Pattinson-eyes.jpg"
                  alt=""
                  className="rounded-full h-14 w-14 object-cover"
                />
                <div className="ml-4">
                  {/* NAME  */}
                  <p className="font-semibold text-base">ROBERT PATTINSON</p>
                  {/* DATE */}
                  <p className="text-sm">14 Apr</p>
                </div>
              </div>
              <i className="bi bi-three-dots-vertical text-2xl"></i>
            </div>
            {/* DESCRIPTION  */}
            <div className="px-3 mt-3">
              <p>Dear All,</p>
              <p>Greeting!!</p>
              <p className="mt-3">
                We have an immense pleasure to announce that IES College of
                Technology, Bhopal is organizing a 2- day Inter College
                Tech-Fest (INFORIA 2K22), to provide you a platform to showcase
                your talent and skills.
              </p>
              <p className="mt-3">Event Date: 12th and 13th April 2022.</p>
              <p className="mt-3">
                Kindly fill the Google form below for registration for various
                events.
              </p>
              <p>Looking forward for your participation.</p>
              <p className="mt-5">Regards,</p>
              <p>INFORIA Organizing Committee</p>
              <p className="mt-3">
                Link {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
              <p className="mt-3">
                Attachm {"->"}{" "}
                <a href="" className="text-themeBlue1">
                  https://forms.gle/eJoxv7YJQsA9Zgo57
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* NOTICE MODAL  */}
      {/* ADD EVENT MODAL  */}
      <AddNoticeModal />
    </div>
  );
}
