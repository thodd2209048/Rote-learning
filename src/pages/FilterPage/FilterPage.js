import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./FilterPage.module.scss";
import TextInput from "~/components/InputComponent/TextInput/TextInput";
import RadioInput from "~/components/InputComponent/RadioInput/RadioInput";
import { ArticlesDataContext } from "~/App";
import Button from "~/components/Button/Button";
import { ArticleShow } from "~/components/ArticleShow";
import TagsInput from "~/components/InputComponent/TagsInput/TagsInput";
import { ListMultiPages } from "~/components/ListMultiPages";

FilterPage.propTypes = {};

function FilterPage(className) {
  const classes = clsx(className, styles.wrapper, "container");
  const emptyFilterInput = {
    title: "",
    subject: "",
    series: "",
    tags: [],
    type: "",
    status: "",
    repetition: "",
  };
  const [filteredArticle, setFilteredArticle] = useState([]);
  const [isDesc, setIsDesc] = useState(false);
  const [filterInputs, setFilterInputs] = useState(emptyFilterInput);

  const { typeOptions, statusOptions, repetitionOptions, articles } =
    useContext(ArticlesDataContext);

  const toggleDesc = () => {
    setIsDesc(isDesc === true ? false : true);
    handleFilter();
  };

  const handleFilter = () => {
    setFilteredArticle(
      articles
        .filter((article) => {
          const titleFilter =
            !filterInputs.title || article.title.includes(filterInputs.title);
          const subjectFilter =
            !filterInputs.subject ||
            article.subject.includes(filterInputs.subject);
          const seriesFilter =
            !filterInputs.series ||
            article.series.includes(filterInputs.series);
          const typeFilter =
            !filterInputs.type ||
            (article.type !== null && article.type.includes(filterInputs.type));
          const statusFilter =
            !filterInputs.status ||
            (article.status !== null &&
              article.status.includes(filterInputs.status));
          const repetitionFilter =
            !filterInputs.repetition ||
            (article.repetition !== null &&
              article.repetition.includes(filterInputs.repetition));
          const tagFilter =
            !filterInputs.tags ||
            (article.tags.length > 0 &&
              filterInputs.tags.every((tag) => article.tags.includes(tag)));

          return (
            subjectFilter &&
            titleFilter &&
            seriesFilter &&
            typeFilter &&
            statusFilter &&
            repetitionFilter &&
            tagFilter
          );
        })
        .sort((a, b) => {
          return isDesc
            ? a.createdAt.localeCompare(b.createdAt)
            : b.createdAt.localeCompare(a.createdAt);
        })
    );
  };

  const handleClear = () => {
    setFilterInputs(emptyFilterInput);
    setFilteredArticle([]);
  };

  const handleInputChange = (value, field) => {
    setFilterInputs({
      ...filterInputs,
      [field]: value,
    });
  };

  return (
    <div className={classes}>
      <div className={clsx(styles.inputs)}>
        <div className={clsx(styles.inputsRow)}>
          <TextInput
            value={filterInputs.title}
            onChangeValue={(value) => handleInputChange(value, "title")}
            label={"Title"}
          />
          <RadioInput
            value={filterInputs.type}
            onChangeValue={(value) => handleInputChange(value, "type")}
            label={"Type"}
            options={typeOptions}
            id="typeFilter"
          />
        </div>
        <div className={clsx(styles.inputsRow)}>
          <TextInput
            value={filterInputs.subject}
            onChangeValue={(value) => handleInputChange(value, "subject")}
            label={"Subject"}
          />
          <RadioInput
            value={filterInputs.status}
            onChangeValue={(value) => handleInputChange(value, "status")}
            label={"Status"}
            options={statusOptions}
            id="statusFilter"
          />
        </div>
        <div className={clsx(styles.inputsRow)}>
          <TextInput
            value={filterInputs.series}
            onChangeValue={(value) => handleInputChange(value, "series")}
            label={"Series"}
          />
          <RadioInput
            value={filterInputs.repetition}
            onChangeValue={(value) => handleInputChange(value, "repetition")}
            label={"Repetition"}
            options={repetitionOptions}
            id="repetitionFilter"
          />
        </div>
        <div className={clsx(styles.inputsRow)}>
          <TagsInput
            tags={filterInputs.tags}
            className={clsx(styles.tagFilter)}
            onChangeValue={(value) => handleInputChange(value, "tags")}
            // label={"Tag"}
          />
          <span>Sort by createdAt:</span>
          <Button
            className={clsx(styles.createdAtSortBtn)}
            onClick={toggleDesc}
          >
            {isDesc ? "Des" : "Asc"}
          </Button>
        </div>
      </div>
      <div className={clsx(styles.buttons)}>
        <Button onClick={handleFilter} callToAction>
          Filter
        </Button>
        <Button onClick={handleClear}>Clear</Button>
      </div>
      <div className={clsx(styles.results)}>
        <ListMultiPages list={filteredArticle} articlePerPage={10} />
      </div>
    </div>
  );
}

export default FilterPage;
