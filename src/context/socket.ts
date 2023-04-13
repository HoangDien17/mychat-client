import { createContext } from "react";
import socketIOClient, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export const socket = socketIOClient("http://localhost:5000");
export const SocketContext = createContext<
  Socket<DefaultEventsMap, DefaultEventsMap> | undefined
>(undefined);
