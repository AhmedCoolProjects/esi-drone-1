import axios from "axios";

export const appAxios = axios.create({
  baseURL: "https://esi-drone-back.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
