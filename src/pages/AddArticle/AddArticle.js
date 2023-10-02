import clsx from "clsx";
import { useEffect, useState } from "react";

import axios from "axios";
import AddTags from "~/components/AddTags/AddTags";
import AddSubject from "./AddSubject/AddSubject";
import styles from "./AddArticle.module.scss";

AddArticle.propTypes = {};

function AddArticle(props) {
  const [resData, setResData] = useState(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [tags, setTags] = useState([]);
  const [article, setArticle] = useState({
    url: "",
    title: "",
    subject: "",
    tags: [],
  });

  useEffect(() => {
    setArticle({ url: url, title: title, subject: subject, tags: tags });
  }, [url, title, subject, tags]);

  const handleAdd = async () => {
    try {
      if (url !== "" && title !== "" && subject !== "") {
      }
      const res = await axios.post(
        "http://localhost:8080/api/article",
        article
      );
      const newData = res.data;
      if (!!newData) {
        setUrl("");
        setTitle("");
        setSubject("");
        setTags([]);
      }
      setResData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(resData);
  return (
    <div className={clsx(styles.wrapper)}>
      <h1>Add new article</h1>
      <div className={clsx(styles.formField)}>
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          placeholder="https://"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <label>Subject: </label>
        <AddSubject subject={subject} setSubject={setSubject} />
      </div>

      <div className={clsx(styles.formField)}>
        <label>Tags: </label>
        <AddTags tags={tags} setTags={setTags} />
      </div>
      <button className={clsx(styles.button)} onClick={handleAdd}>
        Add
      </button>
      <div className={clsx(styles.result)}>
        {resData && (
          <>
            <h4>Article is added</h4>
            <p>URL: {resData.url}</p>
            <p>Title: {resData.title}</p>
            <p>Subject: {resData.subject}</p>
            <div className={clsx(styles.tags)}>
              <span>Tags: </span>
              {resData.tags.map((tag, index) => (
                <span className={clsx(styles.tag)} key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AddArticle;
