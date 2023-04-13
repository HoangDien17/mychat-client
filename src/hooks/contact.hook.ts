import { useQuery } from "react-query";
import { getContact } from "../services/contact.service";
import { IContact } from "../services/interface";

export const useGetContact = (token: string) => {
  return useQuery<IContact[], unknown>(["contact", token], () =>
    getContact(token)
  );
};
