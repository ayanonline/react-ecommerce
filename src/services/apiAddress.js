import axios from "axios";

const instance = axios.create({
  withCredentials: true,
});

export const getAddress = async () => {
  try {
    const res = await instance.get(
      "http://localhost:4000/api/v1/address/user-address",
    );
    return res.data.data;
  } catch (error) {
    throw error;
  }
};

export const selectAddress = async (addressId) => {
  try {
    const res = await instance({
      method: "PATCH",
      url: `http://localhost:4000/api/v1/address/${addressId}`,
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
      url: `http://localhost:4000/api/v1/address/${addressId}`,
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
      "http://localhost:4000/api/v1/address",
      Object.fromEntries(data.entries()),
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAddress = async (addressId) => {
  try {
    const res = await instance.delete(
      `http://localhost:4000/api/v1/address/${addressId}`,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
