import axios from "axios";

// Send cookies
axios.withCredentials = true;

// Build generic http methods which can be consumed wherever needed in application.
const defaultHeaders = { headers: { "Content-Type": "application/json" } };

const httpService = {
  get: (url, headers = defaultHeaders) => {
    return axios.get(url, headers);
  },
  post: (url, data = {}, headers = defaultHeaders) => {
    return axios.post(url, data, headers);
  },
};

export default httpService;
