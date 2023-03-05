import axios from "axios";

const BASE_URL = "";

const api = axios.create({
  baseURL: BASE_URL,
});

//generate otp security
const SECURITY_KEY = "12345";

export { api, SECURITY_KEY };
