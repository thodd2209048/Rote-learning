import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import clsx from "clsx";

import styles from "./InputOneFromExistList.module.scss";
import { capitalizeFirstLetter } from "~/utils/utils";
import ShowSelected from "../ShowSelected/ShowSelected";
import HintListDisplay from "../HintListDisplay/HintListDisplay";
import { Form } from "react-bootstrap";

InputOneFromExistList.propTypes = {
  listName: PropTypes.string,
  queryFn: PropTypes.func,
};

function InputOneFromExistList({
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

  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item);
    setSuggestions((prev) => prev.filter((t) => t !== item));
  };

  const enterToAddItem = (e) => {
    if (e.key === "Enter") {
      setSelected({ name: e.target.value, count: 0 });
    }
  };

  useEffect(() => {
    setSuggestions(data?.data.filter((tag) => tag.name.includes(selected)));
  }, [data, selected]);

  useEffect(() => {
    form.setFieldValue(field.name, selected);
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
        <Form.Control
          className="w-100"
          placeholder="Enter to add"
          value={selected?.name}
          onKeyDown={enterToAddItem}
          onChange={(e) => setSelected(e.target.value.toLowerCase())}
        />
        {!!selected && (
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

export default InputOneFromExistList;
