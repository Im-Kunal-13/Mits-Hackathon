import React from "react";
import { ChannelContainer } from "../../components";

export default function Chat({
  isCreating,
  setIsCreating,
  setIsEditing,
  isEditing,
  createType,
}) {
  return (
    <ChannelContainer
      isCreating={isCreating}
      setIsCreating={setIsCreating}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      createType={createType}
    />
  );
}
