import { toast } from "react-toastify";
import useInterceptorAxios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import useInterceptorAxiosFile from "../utils/axiosFile";

const ProductAPI = () => {
  const Client = useInterceptorAxios();
  const ClientFile = useInterceptorAxiosFile();
  const navigate = useNavigate();
  const suffix = "product";

  const CreateProduct = async ({ formdata }) => {
    try {
      const response = await ClientFile.post(`/${suffix}/create`, { formdata });
      if (response?.status === 201) {
        toast.success(response?.data?.message);
      }

      return response?.status;
    } catch (e) {
      toast.error("Something went wrong while creating a product !!");
    }
  };

  return {
    CreateProduct
  };
};

export default ProductAPI;
