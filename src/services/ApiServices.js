import axios from "axios";

const apiUrl = "http://localhost:8080/api/article";

const countTags = (articles) => {
  let tagCounts = {};
  articles.forEach((article) => {
    article.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  return tagCounts;
};

export async function fetchArticles() {
  try {
    const res = await axios.get(apiUrl);
    if (res.status === 200) {
      const articles = res.data;
      const tagCounts = countTags(articles);
      return { articles, tagCounts };
    }
  } catch (error) {
    throw error;
  }

  return { articles: [], tagCounts: {} };
}

export async function fetchArticlesToRecall() {
  try {
    const res = await axios.get(`${apiUrl}/shouldRead`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
}

export async function updateArticleRepetition(articleId, repetition) {
  try {
    const res = await axios.put(`${apiUrl}/updateRepetition/${articleId}`, {
      repetition: repetition,
    });
    return res.status === 200;
  } catch (error) {
    return false;
  }
}

export async function createArticle(articleData) {
  try {
    const res = await axios.post(apiUrl, articleData);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function readArticle(articleId) {
  try {
    const res = await axios.get(`${apiUrl}/${articleId}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    throw e;
  }
}

export async function updateArticle(articleId, newArticleInfo) {
  try {
    const res = await axios.put(`${apiUrl}/${articleId}`, newArticleInfo);
    return res.status === 200;
  } catch (e) {
    console.log(e);
    return false;
  }
}
