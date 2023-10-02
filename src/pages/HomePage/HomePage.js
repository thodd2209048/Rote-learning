import { Categories } from "~/components/Categories";
import { RandomArticles } from "~/components/RandomArticles";
import axios from "axios";
import { useEffect, useState } from "react";

HomePage.propTypes = {};

function HomePage(props) {
  const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get("http://localhost:8080/api/article");
  //       const data = res.data;
  //       setArticles(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  console.log("article: ", articles);
  return (
    <main>
      <RandomArticles numberOfArticles={3} originData={articles} />
      <Categories />
    </main>
  );
}

export default HomePage;
