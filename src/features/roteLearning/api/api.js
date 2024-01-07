import axios from "axios";

const { baseUrl } = require("~/api/api");

const listArticles = async (term) => {
  const res = await axios.get(`${baseUrl}/api/articles`, { params: term });
  return res;
};

const getArticle = async (id) => {
  const res = await axios.get(`${baseUrl}/api/articles/${id}`);
  return res;
};

const createArticle = async (articleData) => {
  const res = await axios.post(`${baseUrl}/api/articles`, articleData);
  return res;
};

const updateArticle = async (id, articleData) => {
  const res = await axios.put(`${baseUrl}/api/articles/${id}`, articleData);
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

export {
  listArticles,
  getArticle,
  createArticle,
  updateArticle,
  listTag,
  listSubject,
  listSeries,
};
