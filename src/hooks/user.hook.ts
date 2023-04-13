import { useQuery } from "react-query";
import { IUser } from "../services/interface";
import { getListUser } from "../services/user.service";

export const useGetUser = (userId: string, search: string) => {
  return useQuery<IUser[], unknown>(["user", search, userId], () =>
    getListUser(userId, search)
  );
};
