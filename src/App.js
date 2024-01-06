import { Route, Routes } from "react-router-dom";

import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";
import { createContext, useEffect, useState } from "react";

export const ArticlesDataContext = createContext();

function App() {
  return (
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
  );
}

export default App;
