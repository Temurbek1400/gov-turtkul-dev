import axiosClient from "./config";

export const postData = (url, data) => {
  const config = {
    method: "POST",
    url,
    data,
  };
  return axiosClient(config);
};

export const getData = (url) => {
  debugger
  const config = {
    method: "GET",
    url,
  };
  return axiosClient(config);
};

export const putData = (url, data) => {
  const config = {
    method: "PUT",
    url,
    data,
  };
  return axiosClient(config);
};

export const deleteData = (url) => {
  const config = {
    method: "DELETE",
    url,
  };
  return axiosClient(config);
};
