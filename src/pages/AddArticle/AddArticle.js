import clsx from "clsx";
import { useEffect, useState } from "react";

import axios from "axios";
import StatusInput from "~/components/InputComponent/StatusInput/StatusInput";
import TagsInput from "~/components/InputComponent/TagsInput/TagsInput";
import TextInput from "~/components/InputComponent/TextInput/TextInput";
import RadioInput from "~/components/InputComponent/RadioInput/RadioInput";
import styles from "./AddArticle.module.scss";
import MultiAdd from "./MultiAdd/MultiAdd";

AddArticle.propTypes = {};

function AddArticle(props) {
  const [resData, setResData] = useState(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [subject, setSubject] = useState("");
  const [series, setSeries] = useState("");
  const [tags, setTags] = useState([]);
  const [type, setType] = useState("");
  const [repetition, setRepetition] = useState("");
  const [article, setArticle] = useState({
    url: "",
    title: "",
    subject: "",
    series: "",
    tags: [],
    type: "",
    status: "",
    repetition: "",
  });
  const statusOptions = ["in_progress", "completed"];
  const repetitionOptions = ["first reading", "1", "2", "3", "4", "completed"];
  const typeOptions = ["article", "video", "note"];

  useEffect(() => {
    setArticle({
      url: url,
      title: title,
      subject: subject,
      series: series,
      tags: tags,
      type: type,
      status: status,
      repetition: repetition,
    });
  }, [url, title, status, subject, series, tags, type, repetition]);

  const handleAdd = async () => {
    try {
      if (url !== "" && title !== "" && subject !== "") {
        const res = await axios.post(
          "http://localhost:8080/api/article",
          article
        );
        const newData = res.data;
        if (!!newData) {
          setUrl("");
          setTitle("");
          setSubject("");
          setSeries("");
          setTags([]);
          setType("");
          setStatus("completed");
          setRepetition("first reading");
        }
        setResData(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("article", article);
  console.log("resData", resData);

  return (
    <div className={clsx(styles.wrapper)}>
      <h1>Add new article</h1>

      <div className={clsx(styles.formField)}>
        <TextInput
          value={url}
          setValue={setUrl}
          label={"URL:"}
          placeholder="http://"
          id={"urlInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TextInput
          value={title}
          setValue={setTitle}
          label={"Title:"}
          id={"titleInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TextInput
          value={subject}
          setValue={setSubject}
          label={"Subject:"}
          id={"subjectInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TextInput
          value={series}
          setValue={setSeries}
          label={"Series:"}
          id={"seriesInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TagsInput tags={tags} setTags={setTags} />
      </div>

      <div className={clsx(styles.formField)}>
        <RadioInput
          label={"Type:"}
          value={type}
          setValue={setType}
          options={typeOptions}
          id={"typeInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <RadioInput
          label={"Status:"}
          value={status}
          setValue={setStatus}
          options={statusOptions}
          id={"statusInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <RadioInput
          label={"Repetition:"}
          value={repetition}
          setValue={setRepetition}
          options={repetitionOptions}
          id={"repetitionInput"}
        />
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
            <p>Series: {resData.series}</p>
            <div className={clsx(styles.tags)}>
              <span>Tags: </span>
              {resData.tags.map((tag, index) => (
                <span className={clsx(styles.tag)} key={index}>
                  {tag}
                </span>
              ))}
            </div>
            <p>Repetition: {resData.repetition}</p>
          </>
        )}
      </div>

      <MultiAdd />
    </div>
  );
}

export default AddArticle;
