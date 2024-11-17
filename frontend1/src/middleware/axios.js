import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API_URL;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    console.log("Request error", error);
    if (error.response && error.response.status === 401) {
      try {
        const response = await axios.post(
          "/auth/refresh",
          {},
          { withCredentials: true }
        );

        if (response.status === 200) {
          const newAccessToken = response.data.token;

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAccessToken}`;

          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return axios(error.config);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error); // Hata doğru şekilde dönmeli
  }
);
