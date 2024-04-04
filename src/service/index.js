import axios from "config/api/axios";

const base_url = "http://localhost:5000/api/v1";
export const getAllCategory = () => {
  const request = axios.get(`${base_url}/category`);
  const data = request.data;
  return data;
};
export const getAllSubCategory = async () => {
  const request = await axios.get(`${base_url}/subcategory`);
  const data = request.data.data;
  console.log(data);
  return data;
};