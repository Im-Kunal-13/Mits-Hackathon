import React, { useState } from "react";
import Gallery from "./Pages/Gallery/Gallery";
import LandingPage from "./Pages/Landing/LandingPage";
import Notices from "./Pages/Notices/Notices";
import "stream-chat-react/dist/css/index.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import {Auth} from "./components"

// UNIVERSAL COOKIE
import Cookies from "universal-cookie";

// STREAM
import { StreamChat } from "stream-chat";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Chat from "./Pages/Chat/Chat";

// Getting the cookies.
const cookies = new Cookies();


const authToken = cookies.get("token");

const client = StreamChat.getInstance(process.env.apiKey);

// If authToken is present then it will connect to the current user and if the user is not present, then it will create it.
if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      phoneNumber: cookies.get("phoneNumber"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
    },
    authToken
  );
}

export default function App() {
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!authToken) {
    return <Auth />;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="dashboard/*"
            element={
              <Dashboard
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                setCreateType={setCreateType}
                setIsEditing={setIsEditing}
                client={client}
              />
            }
          >
            <Route
              path="chat/*"
              element={
                <Chat
                  isCreating={isCreating}
                  setIsCreating={setIsCreating}
                  setIsEditing={setIsEditing}
                  isEditing={isEditing}
                  createType={createType}
                />
              }
            />
            <Route path="gallery/*" element={<Gallery />} />
            <Route path="notices/*" element={<Notices />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </>
  );
}
