import axios from "axios";

const { baseUrl } = require("~/api/api");

const listQuotes = async (term) => {
  const res = await axios.get(`${baseUrl}/api/quotes`, { params: term });
  return res;
};

const getQuoteRandomly = async () => {
  const res = await axios.get(`${baseUrl}/api/quotes/random`);
  return res;
};

const addQuote = async (quote) => {
  const res = await axios.post(`${baseUrl}/api/quotes`, quote);
  return res;
};

const updateQuote = async (id, newQuote) => {
  const res = await axios.put(`${baseUrl}/api/quotes/${id}`, newQuote);
  return res;
};

export { listQuotes, getQuoteRandomly, addQuote, updateQuote };
