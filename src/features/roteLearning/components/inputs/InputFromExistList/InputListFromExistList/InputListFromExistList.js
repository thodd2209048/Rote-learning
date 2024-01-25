import React, { useEffect, useState } from "react";
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
  const { data, isSuccess } = useQuery({
    queryKey: [field.name],
    queryFn: () => queryFn(),
    staleTime: staleTime,
  });

  const [hint, setHint] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleSelect = (item) => {
    const newSelected = [...selected, item];
    setSelected(newSelected);
    setSuggestions(data?.data.filter((t) => newSelected.includes(t.name)));
    setHint("");
  };

  const handleDeselect = (item) => {
    const newSelected = selected.filter((i) => i !== item);
    setSelected(newSelected);
    setSuggestions(data?.data.filter((t) => newSelected.includes(t.name)));
  };

  const enterToAddItem = (e) => {
    if (e.key === "Enter") {
      setSelected((prev) => [...prev, e.target.value]);
      setHint("");
    }
  };

  useEffect(() => {
    setSuggestions(data?.data.filter((tag) => tag.name.includes(hint)));
  }, [data, hint]);

  useEffect(() => {
    const selectedTagValues = selected.map((i) => i.name);
    form.setFieldValue(field.name, selectedTagValues);
  }, [selected]);

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
          selectedItems={selected}
          handleDeselectItem={handleDeselect}
        />
        <Form.Control
          className="w-100"
          placeholder="Enter to add"
          value={hint}
          onKeyDown={enterToAddItem}
          onChange={(e) => setHint(e.target.value.toLowerCase())}
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
