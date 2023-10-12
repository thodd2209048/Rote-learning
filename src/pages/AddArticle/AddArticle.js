import clsx from "clsx";
import { useEffect, useState } from "react";

import axios from "axios";
import StatusInput from "~/components/InputComponent/StatusInput/StatusInput";
import TagsInput from "~/components/InputComponent/TagsInput/TagsInput";
import TextInput from "~/components/InputComponent/TextInput/TextInput";
import RadioInput from "~/components/InputComponent/RadioInput/RadioInput";
import styles from "./AddArticle.module.scss";
import MultiAdd from "./MultiAdd/MultiAdd";
import Button from "~/components/Button/Button";

AddArticle.propTypes = {};

function AddArticle(props) {
  const [resData, setResData] = useState(null);
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

  const handleInputChange = (value, field) => {
    setArticle({
      ...article,
      [field]: value,
    });
  };

  const handleAdd = async () => {
    try {
      if (
        article.url !== "" &&
        article.title !== "" &&
        article.subject !== ""
      ) {
        const res = await axios.post(
          "http://localhost:8080/api/article",
          article
        );
        const newData = res.data;
        if (!!newData) {
          setArticle({
            url: "",
            title: "",
            subject: "",
            series: "",
            tags: [],
            type: "",
            status: "",
            repetition: "",
          });
        }
        setResData(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <h1>Add new article</h1>

      <div className={clsx(styles.formField)}>
        <TextInput
          value={article.url}
          onChangeValue={(value) => handleInputChange(value, "url")}
          label={"URL:"}
          placeholder="http://"
          id={"urlInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TextInput
          value={article.title}
          onChangeValue={(value) => handleInputChange(value, "title")}
          label={"Title:"}
          id={"titleInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TextInput
          value={article.subject}
          onChangeValue={(value) => handleInputChange(value, "subject")}
          label={"Subject:"}
          id={"subjectInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TextInput
          value={article.series}
          onChangeValue={(value) => handleInputChange(value, "series")}
          label={"Series:"}
          id={"seriesInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <TagsInput
          tags={article.tags}
          onChangeValue={(value) => handleInputChange(value, "tags")}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <RadioInput
          label={"Type:"}
          value={article.type}
          onChangeValue={(value) => handleInputChange(value, "type")}
          options={typeOptions}
          id={"typeInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <RadioInput
          label={"Status:"}
          value={article.status}
          onChangeValue={(value) => handleInputChange(value, "status")}
          options={statusOptions}
          id={"statusInput"}
        />
      </div>

      <div className={clsx(styles.formField)}>
        <RadioInput
          label={"Repetition:"}
          value={article.repetition}
          onChangeValue={(value) => handleInputChange(value, "repetition")}
          options={repetitionOptions}
          id={"repetitionInput"}
        />
      </div>

      <Button callToAction onClick={handleAdd}>
        Add
      </Button>

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

      {/* <MultiAdd /> */}
    </div>
  );
}

export default AddArticle;
