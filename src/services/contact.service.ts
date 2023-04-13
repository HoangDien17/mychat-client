import axios from "axios";
import { IContact } from "./interface";

export const getContact = (token: string): Promise<IContact[]> => {
  return axios.get("http://localhost:5000/contacts", {
    headers: {
      "access-token": token,
    },
  });
};
