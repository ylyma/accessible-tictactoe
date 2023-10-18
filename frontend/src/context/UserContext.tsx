import React, { createContext } from "react";

type User = {
  playerName: string;
  uuid: string;
  symbol: string;
};
export const UserContext = createContext({
  playerName: "",
  uuid: "",
  symbol: "",
});
export const UserDispatchContext = createContext((user: User) => {});
