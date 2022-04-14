import React from "react";
import { Outlet } from "react-router-dom";
import { Chat } from "stream-chat-react";
import { ChannelListContainer } from "../../components";

export default function Dashboard({
  isCreating,
  setIsCreating,
  setCreateType,
  setIsEditing,
  client,
}) {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
        <Outlet />
      </Chat>
    </div>
  );
}
