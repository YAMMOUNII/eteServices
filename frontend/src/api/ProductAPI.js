import { toast } from "react-toastify";
import useInterceptorAxios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import useInterceptorAxiosFile from "../utils/axiosFile";
import { useDispatch } from "react-redux";
import { fetchAllProduct } from "../app/Slices/ProductSlice";

const ProductAPI = () => {
  const Client = useInterceptorAxios();
  const ClientFile = useInterceptorAxiosFile();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const suffix = "product";

  const CreateProduct = async (formdata) => {
    try {
      const response = await ClientFile.post(`/${suffix}/create`, formdata);
      if (response?.status === 201) {
        toast.success(response?.data?.message);
        dispatch(fetchAllProduct());
      }

      return response?.status;
    } catch (e) {
      toast.error("Something went wrong while creating a product !!");
    }
  };


  const DeleteProduct = async (id) => {
    try {
      const response = await Client.delete(`/${suffix}/delete/${id}`);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        dispatch(fetchAllProduct());
      }

      return response?.status;
    } catch (e) {
      toast.error("Something went wrong while Deleting a product !!");
    }
  };


  const GetProductById = async (id) => {
    try {
      const response = await Client.delete(`/${suffix}/getById/${id}`);
      if (response?.status === 200) {
        return response?.product;
      }


    } catch (e) {
      toast.error("Something went wrong while getting a product !!");
    }
  };

  const UpdateProduct = async (data, id) => {
    try {
      const response = await Client.put(`/${suffix}/update/${id}`, data);
      if (response?.status === 200) {
        return response?.product;
      }


    } catch (e) {
      toast.error("Something went wrong while updating a product !!");
    }
  };



  return {
    CreateProduct, DeleteProduct, GetProductById, UpdateProduct
  };
};

export default ProductAPI;
