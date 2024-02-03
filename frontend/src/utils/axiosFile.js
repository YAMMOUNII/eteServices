import axios from "axios";
import { config } from "./Constants";
import { useNavigate } from "react-router-dom";

const URL = config.url;

const useInterceptorAxiosFile = () => {
  const navigate = useNavigate();

  const InterceptorClientFile = axios.create({
    baseURL: URL,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: sessionStorage.getItem("Token"),
    },
  });

  InterceptorClientFile.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        ;
        sessionStorage.clear(); localStorage.clear(); navigate("/")
      }
      return Promise.reject(error);
    }
  );

  return InterceptorClientFile;
};

export default useInterceptorAxiosFile;