import { Route, Routes } from "react-router-dom";

import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ArticlesDataContext = createContext();

function App() {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);

  const addTag = (article) => {
    article.tags.forEach((tag) => {
      setTags((prevTags) => {
        if (!prevTags[tag]) {
          return { ...prevTags, [tag]: 1 };
        } else {
          return { ...prevTags, [tag]: prevTags[tag] + 1 };
        }
      });
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8080/api/article");
        if (res.status === 200) {
          setArticles(res.data);

          res.data.forEach((article) => {
            addTag(article);
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <ArticlesDataContext.Provider value={{ articles, tags }}>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, idx) => {
            let Layout = DefaultLayout;
            let Page = route.component;
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </ArticlesDataContext.Provider>
  );
}

export default App;
