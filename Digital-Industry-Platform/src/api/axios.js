import axios from "axios";

const req = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_HOST,
});
req.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
req.interceptors.response.use(
  (response) => {
    if (!response?.config) return;
    const {
      config,
      status,
      config: { method, baseURL, url, data },
    } = response;
    console.groupCollapsed(
      `Call API: [${status}] [${method?.toUpperCase()}] ${baseURL}${url}`
    );
    console.groupCollapsed("Request:", data);
    console.log(config);
    console.groupEnd();
    console.groupCollapsed("Response:", response.data);
    console.log(response);
    console.groupEnd();
    console.groupEnd();
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default req;
