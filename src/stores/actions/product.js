import axios from "../../utils/axios";

export const getProduct = (limit) => {
  return {
    type: "GET_PRODUCT",
    payload: axios.get(`/product?limit=${limit}`),
  };
};

export const addProduct = (data) => {
  return {
    type: "ADD_PRODUCT",
    payload: axios.post("/product/create", data),
  };
};

export const getProductById = (productId) => {
  return {
    type: "GET_PRODUCT_BY_ID",
    payload: axios.get(`/product/${productId}`),
  };
};

export const editProduct = (productId, data) => {
  return {
    type: "EDIT_PRODUCT",
    payload: axios.patch(`/product/update/${productId}`, data),
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: axios.delete(`/product/delete/${id}`),
  };
};

export const deleteProductImage = (productId, data) => {
  return {
    type: "DELETE_IMAGE_PRODUCT",
    payload: axios.patch(`/product/delete/image/${productId}`, data),
  };
};
