import axios from "axios";

const instance = axios.create({
  baseURL: "https://localsjob.heartlandcomputer.net/api/v1",
});
export default instance;
