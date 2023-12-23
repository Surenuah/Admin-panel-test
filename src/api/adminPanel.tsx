import axios from "axios";
import { UsersT } from "../types/AdminPanel.ts";

const getAllUsers = () => {
  return axios.get<UsersT[]>("data/users.json");
};

export const adminPanelApi = {
  getAllUsers,
};
