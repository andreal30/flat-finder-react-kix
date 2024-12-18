import axiosInstance from "../utils/axios";

export const validateUniqueApi = async (field, value) => {
  return await axiosInstance.post("/users/validate-unique", { field, value });
};

export const uploadProfileImageApi = async (formData) => {
  return await axiosInstance.post(`/users/image`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteProfileImageApi = async (imageUrl) => {
  return await axiosInstance.delete(`/users/image`, { data: { imageUrl } });
};

export const updateUserProfileApi = async (userId, updatedData) => {
  return await axiosInstance.patch(`/users/${userId}`, updatedData);
};

export const deleteUserApi = async (userId) => {
  return await axiosInstance.delete(`/users/${userId}`);
};

export const getAllUsersApi = async () => {
  return await axiosInstance.get(`/users`);
};

export const getUserByIdApi = async (userId) => {
  try {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user by ID:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const allowAdminApi = async (userId) => {
  return await axiosInstance.patch(`/users/admin/${userId}`);
};

export const denyAdminApi = async (userId) => {
  return await axiosInstance.delete(`/users/admin/${userId}`);
};

export const addFlatFavouriteApi = async (flatId) => {
  return await axiosInstance.post(`/users/favourite-flat/${flatId}`);
};

export const removeFlatFavouriteApi = async (flatId) => {
  return await axiosInstance.delete(`/users/favourite-flat/${flatId}`);
};
