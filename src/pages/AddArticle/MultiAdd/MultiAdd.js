import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { articlesData } from "~/data/data1";

MultiAdd.propTypes = {};

function MultiAdd(props) {
  const multiObject = articlesData;

  const handleAdd = async (article) => {
    try {
      if (
        article.url !== "" &&
        article.title !== "" &&
        article.subject !== ""
      ) {
      }
      await axios.post("http://localhost:8080/api/article", article);
    } catch (error) {
      console.log(error);
    }
  };

  const multiAdd = () => {
    multiObject.forEach((o) => {
      const newArticle = {
        url: o.url || o.link,
        title: o.title,
        subject: o.subject,
        tags: o.tags,
        status: o.status === "completed" ? "completed" : "in_progress",
      };
      handleAdd(newArticle);
    });
  };
  return (
    <div>
      <button onClick={multiAdd}>Add multi</button>
    </div>
  );
}

export default MultiAdd;
