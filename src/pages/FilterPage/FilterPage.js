import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./FilterPage.module.scss";
import clsx from "clsx";
import TextInput from "~/components/InputComponent/TextInput/TextInput";
import RadioInput from "~/components/InputComponent/RadioInput/RadioInput";

FilterPage.propTypes = {};

function FilterPage(className) {
  const classes = clsx(className, styles.wrapper);
  const [resData, setResData] = useState();
  const [filterInputs, setFilterInputs] = useState({
    url: "",
    title: "",
    subject: "",
    series: "",
    tags: [],
    type: "",
    status: "",
    repetition: "",
  });

  const handleFilter = () => {};

  const handleInputChange = (e, field) => {
    setFilterInputs({
      ...filterInputs,
      [field]: e.target.value,
    });
  };

  return (
    <div className={classes}>
      <div className={clsx(styles.inputs)}>
        <div>
          <TextInput
            value={filterInputs.title}
            onChangeValue={(e) => handleInputChange(e, "title")}
            label={"Title"}
          />
        </div>
      </div>
      <div className={clsx(styles.results)}></div>
      <div className={clsx(styles.buttons)}>
        <button onClick={handleFilter}>Filter</button>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default FilterPage;
