import axios from "axios";
import { server } from "@/server";

const apiClient = axios.create({
    baseURL: server,
});

export default apiClient