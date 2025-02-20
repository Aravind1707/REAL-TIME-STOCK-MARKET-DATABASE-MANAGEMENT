import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const fetchStocks = async () => {
    const response = await axios.get(`${API_URL}/stocks`);
    return response.data;
};

export const buyStock = async (userId, stockId, quantity) => {
    return axios.post(`${API_URL}/transactions/buy`, { userId, stockId, quantity });
};
