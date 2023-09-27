import axios from "axios";
import { baseUrl } from "../utils/constrant";

const instance = axios.create({
  withCredentials: true,
});

export const getAddress = async () => {
  try {
    const res = await instance.get(`${baseUrl}/address/user-address`);
    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export const selectAddress = async (addressId) => {
  try {
    const res = await instance({
      method: "PATCH",
      url: `${baseUrl}/address/${addressId}`,
      data: { selected: true },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const updateAddress = async (addressId, formData) => {
  try {
    const res = await instance({
      method: "PATCH",
      url: `${baseUrl}/address/${addressId}`,
      data: Object.fromEntries(formData.entries()),
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createAddress = async (data) => {
  try {
    const res = await instance.post(
      `${baseUrl}/address`,
      Object.fromEntries(data.entries()),
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAddress = async (addressId) => {
  try {
    const res = await instance.delete(`${baseUrl}/address/${addressId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
