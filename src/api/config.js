import axios from "axios";
export const BASE_URL = "https://turtkul.herokuapp.com";

export default axios.create({
  baseURL: BASE_URL,
  mode: "no-cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
