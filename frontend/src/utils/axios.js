import axios from "axios";
import { config } from "./Constants";
import { useNavigate } from "react-router-dom";

const URL = config.url;

const useInterceptorAxios = () => {
  const navigate = useNavigate();

  const InterceptorClient = axios.create({
    baseURL: URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("Token"),
    },
  });

  InterceptorClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        sessionStorage.clear();
        localStorage.clear();
        navigate("/");
      }
      return Promise.reject(error);
    }
  );

  return InterceptorClient;
};

export default useInterceptorAxios;
