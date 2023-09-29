import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./AddArticle.module.scss";
import { Button } from "bootstrap";
import axios from "axios";

AddArticle.propTypes = {};

function AddArticle(props) {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [subject, setSubject] = useState(null);
  const [tags, setTags] = useState(null);
  const [tagNames, setTagNames] = useState(async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/tags/tagNames");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  const handleAdd = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/article");
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(url);
  return (
    <div className={clsx(styles.wrapper)}>
      <h1>Add new article</h1>
      <div className={clsx(styles.formField)}>
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          placeholder="https://"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className={clsx(styles.formField)}>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={clsx(styles.formField)}>
        <label>Subject: </label>
        <input
          type="text"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className={clsx(styles.formField)}>
        <label>Tags: </label>
        <input type="text" placeholder="Tags" />
      </div>
      <button className={clsx(styles.button)} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddArticle;
