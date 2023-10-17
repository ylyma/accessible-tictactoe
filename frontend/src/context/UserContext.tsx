import React, { createContext } from "react";

type User = {
  playerName: string;
  uuid: string;
};
export const UserContext = createContext({ playerName: "", uuid: "" });
export const UserDispatchContext = createContext((user: User) => {});
