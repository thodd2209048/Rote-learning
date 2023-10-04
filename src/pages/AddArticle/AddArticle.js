import clsx from "clsx";
import { useEffect, useState } from "react";

import axios from "axios";
import AddSubject from "../../components/InputComponent/SubjectInput/SubjectInput";
import styles from "./AddArticle.module.scss";
import StatusInput from "~/components/InputComponent/StatusInput/StatusInput";
import UrlInput from "~/components/InputComponent/UrlInput/UrlInput";
import TitleInput from "~/components/InputComponent/TitleInput/TitleInput";
import MultiAdd from "./MultiAdd/MultiAdd";
import TagsInput from "~/components/InputComponent/TagsInput/TagsInput";

AddArticle.propTypes = {};

function AddArticle(props) {
  const [resData, setResData] = useState(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [subject, setSubject] = useState("");
  const [tags, setTags] = useState([]);
  const [article, setArticle] = useState({
    url: "",
    title: "",
    status: "",
    subject: "",
    tags: [],
  });

  useEffect(() => {
    setArticle({
      url: url,
      title: title,
      status: status,
      subject: subject,
      tags: tags,
    });
  }, [url, title, status, subject, tags]);

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
        setStatus("");
        setSubject("");
        setTags([]);
      }
      setResData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <h1>Add new article</h1>

      <div className={clsx(styles.formField)}>
        <UrlInput url={url} setUrl={setUrl} />
      </div>

      <div className={clsx(styles.formField)}>
        <TitleInput title={title} setTitle={setTitle} />
      </div>

      <div className={clsx(styles.formField)}>
        <AddSubject subject={subject} setSubject={setSubject} />
      </div>

      <div className={clsx(styles.formField)}>
        <StatusInput setStatus={setStatus} />
      </div>

      <div className={clsx(styles.formField)}>
        <TagsInput tags={tags} setTags={setTags} />
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
            <p>Status: {resData.status}</p>
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

      {/* <MultiAdd /> */}
    </div>
  );
}

export default AddArticle;
