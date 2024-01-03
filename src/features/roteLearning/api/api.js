import axios from "axios";

const { baseUrl } = require("~/api/api");

const apiUrl = `${baseUrl}/api/article`;

const createArticle = async (articleData) => {
  console.log(articleData);
  const res = await axios.post(`${baseUrl}/api/articles`, articleData);
  return res;
};

const listTag = async () => {
  const res = await axios.get(`${baseUrl}/api/tags`);
  return res;
};

const listSubject = async () => {
  const res = await axios.get(`${baseUrl}/api/subjects`);
  return res;
};

const listSeries = async () => {
  const res = await axios.get(`${baseUrl}/api/series`);
  return res;
};

export { createArticle, listTag, listSubject, listSeries };
