import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Assuming you are using Next.js API routes
});

export default api;
