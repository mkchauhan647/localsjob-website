import axios from "axios";

const instance = axios.create({
  baseURL: "https://localsjob.heartlandcomputer.net/api/v1",
});
export default instance;

export const fetchData = async (url: string) => {
  try {
    const response = await instance.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};
