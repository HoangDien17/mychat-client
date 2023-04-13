import axios from "axios";
import { IUser } from "./interface";

export async function getListUser(
  currentId: string,
  keyword: string
): Promise<IUser[]> {
  const res = await axios.get<IUser[]>(
    `http://localhost:5000/user/${currentId}?keyWord=${keyword}`
  );
  return res.data;
}

export function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return axios.post("http://localhost:5000/user/login", {
    email,
    password,
  });
}

export function signUp({
  firstName,
  lastName,
  email,
  password,
}: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) {
  return axios.post("http://localhost:5000/user/register", {
    email,
    password,
    firstName,
    lastName,
  });
}
