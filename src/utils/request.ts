import axios from "axios";

const requestInstance = axios.create({
  baseURL: "https://I94wc2001h.execute-api.ap.southeast-2.amazonaws.com",
  // baseURL: "https://mock.execute-api.ap.southeast-2.amazonaws.com",
});

export function get(url: string, config = {}) {
  return requestInstance.get(url, config);
}

export function post(url: string, config = {}) {
  return requestInstance.post(url, config);
}
