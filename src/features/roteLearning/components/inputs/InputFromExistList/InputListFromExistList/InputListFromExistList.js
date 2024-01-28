import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import clsx from "clsx";

import styles from "./InputListFromExistList.module.scss";
import { capitalizeFirstLetter } from "~/utils/utils";
import ShowSelected from "../ShowSelected/ShowSelected";
import HintListDisplay from "../HintListDisplay/HintListDisplay";
import { Form } from "react-bootstrap";

InputListFromExistList.propTypes = {
  listName: PropTypes.string,
  queryFn: PropTypes.func,
};

function InputListFromExistList({
  className,
  form,
  field,
  label,
  queryFn,
  staleTime = 1000 * 60 * 2,
}) {
  const inputRef = useRef();
  const { data, isSuccess } = useQuery({
    queryKey: [field.name],
    queryFn: () => queryFn(),
    staleTime: staleTime,
  });

  const [hint, setHint] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSelect = (item) => {
    if (field.value.includes(item)) return;
    const newSelected = [...field.value, item];
    console.log("newSelected", newSelected);
    form.setFieldValue(field.name, newSelected);
    setSuggestions(data?.data.filter((t) => newSelected.includes(t.name)));
    setHint("");
    inputRef.current.focus();
  };

  const handleDeselect = (item) => {
    const newSelected = field.value.filter((i) => i !== item);
    form.setFieldValue(field.name, newSelected);
    setSuggestions(data?.data.filter((t) => newSelected.includes(t.name)));
  };

  const enterToAddItem = (e) => {
    if (e.key !== "Enter") return;

    const itemValue = e.target.value;
    let item = data?.data.find((item) => item.value === itemValue);
    if (!item) {
      item = { name: itemValue, count: 1 };
      handleSelect(item);
    }

    setHint("");
  };

  useEffect(() => {
    setSuggestions(data?.data.filter((tag) => tag.name.includes(hint)));
  }, [data, hint]);

  return (
    <div
      className={clsx(className, styles.wrapper, "mt-2 row d-flex flex-row")}
    >
      {!!label && (
        <label className={clsx(styles.label, "col-3 col-lg-2 text-start")}>
          <span>{capitalizeFirstLetter(label)}</span>
        </label>
      )}
      <div className={clsx(styles.input, "col")}>
        <ShowSelected
          selectedItems={field.value}
          handleDeselectItem={handleDeselect}
        />
        <Form.Control
          className="w-100"
          placeholder="Enter to add"
          value={hint || ""}
          onKeyDown={enterToAddItem}
          onChange={(e) => setHint(e.target.value.toLowerCase())}
          ref={inputRef}
        />
        {!!hint && (
          <HintListDisplay
            className={clsx(styles.dropdown)}
            hintList={suggestions}
            handleSelectItem={handleSelect}
          />
        )}
      </div>
    </div>
  );
}

export default InputListFromExistList;
