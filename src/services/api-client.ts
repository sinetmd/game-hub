import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ac22c67521b24767a9b8127945b0ce1f",
  },
});
