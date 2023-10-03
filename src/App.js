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

  useEffect(() => {
    let tagCounts = {};
    const countTag = (article) => {
      article.tags.forEach((tag) => {
        if (tagCounts[tag] === undefined) {
          tagCounts[tag] = 1;
        } else {
          tagCounts[tag]++;
        }
      });
    };

    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8080/api/article");
        if (res.status === 200) {
          setArticles(res.data);
          res.data.forEach((article) => {
            countTag(article);
          });
          setTags(tagCounts);
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
