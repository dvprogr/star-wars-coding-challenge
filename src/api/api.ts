import axios from "axios";

export const getApiFunctions = async () => {
  return await axios.get("https://swapi.py4e.com/api/");
};

export const getDataByApi = async (api: string) => {
  return await axios.get(api);
};
