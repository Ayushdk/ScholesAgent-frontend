import axios from "axios";

const API_BASE = "https://scholesagent-backend-1.onrender.com/api";

/* ===============================
   SYMBOL LIST
================================ */
export const getSymbols = async () => {
  const res = await axios.get(`${API_BASE}/symbols/`);
  return res.data;
};

/* ===============================
   CALCULATOR API
================================ */
export const calculateOption = async (payload) => {
  const res = await axios.post(`${API_BASE}/calculate/`, payload);
  return res.data;
};

/* ===============================
   GRAPH DATA API
================================ */
export const getGraphData = async (payload) => {
  try {
    console.log("API Call - Sending request to:", `${API_BASE}/graphs/`, "with payload:", payload);
    const res = await axios.post(`${API_BASE}/graphs/`, payload);
    console.log("API Call - Response status:", res.status);
    console.log("API Call - Response data:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Call - Error:", error);
    console.error("API Call - Error response:", error.response?.data);
    console.error("API Call - Error status:", error.response?.status);
    throw error;
  }
};
