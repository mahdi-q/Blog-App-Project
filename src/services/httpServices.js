const { default: axios } = require("axios");

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err),
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });

        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(err);
  },
);

const http = {
  get: app.get,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
  post: app.post,
};

export default http;
