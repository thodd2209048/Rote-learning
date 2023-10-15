import { Route, Routes } from "react-router-dom";

import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { fetchArticles } from "./services/ApiServices";

export const ArticlesDataContext = createContext();

function App() {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [triggerFetchData, setTriggerFetchData] = useState(false);

  const toggleFetchData = () => {
    setTriggerFetchData(triggerFetchData ? false : true);
  };

  const statusOptions = ["in_progress", "completed"];
  const repetitionOptions = ["first reading", "1", "2", "3", "4", "completed"];
  const typeOptions = ["article", "video", "note"];

  useEffect(() => {
    async function fetchData() {
      const { articles, tagCounts } = await fetchArticles();
      setArticles(articles);
      setTags(tagCounts);
    }
    fetchData();
  }, [triggerFetchData]);

  return (
    <ArticlesDataContext.Provider
      value={{
        articles,
        tags,
        triggerFetchData,
        toggleFetchData,
        statusOptions,
        repetitionOptions,
        typeOptions,
      }}
    >
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
