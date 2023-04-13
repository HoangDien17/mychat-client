import { createContext } from "react";

export const AuthContext = createContext<
  { access_token: string; userId: string } | undefined
>(undefined);
