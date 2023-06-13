import axios from "axios";
import Nprogress from "nprogress";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_APP_API_URL + "/api/v1/admin";

const httpClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

// httpClient.get("/general-settings/countries")
// .then((response) => {
//   console.log(response.data);
// })
// .catch((error) => {
//   console.error(error);
// });

httpClient.interceptors.request.use(
  async (config) => {
    Nprogress.start();
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    // console.log(config.url)
    return config;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  async (response) => {
    Nprogress.done();
    // console.log(response.response);
    return response;
  },
  (error) => {
    Nprogress.done();
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      // eslint-disable-next-line no-restricted-globals
      location.href = "/login";
    }

    toast.warning(error?.response?.data?.message);

    return Promise.reject(error);
  }
);

export default httpClient;
