import axios from "axios";

export const fetchWrap = async ({
  method,
  url,
  body = {},
  params = {},
}: {
  method: "get" | "post" | "patch" | "delete";
  url: string;
  body?: {};
  params?: {};
}) => {
  try {
    const config = {
      baseURL: process.env.API_URL,
      withCredential: true,
      params,
    };
    const response =
      (method === "get" && (await axios.get(url, config))) ||
      (method === "post" && (await axios.post(url, body, config))) ||
      (method === "patch" && (await axios.patch(url, body, config))) ||
      (method === "delete" && (await axios.delete(url, config))) ||
      {};
    return response;
  } catch (error) {
    return error;
  }
};

export const GET = (url: string, params?: {}) =>
  fetchWrap({method: "get", url, params});

export const POST = (url: string, body?: {}, params?: {}) =>
  fetchWrap({method: "post", url, body});

export const PATCH = (url: string, body?: {}) =>
  fetchWrap({method: "patch", url, body});

export const DELETE = (url: string) => fetchWrap({method: "delete", url});
