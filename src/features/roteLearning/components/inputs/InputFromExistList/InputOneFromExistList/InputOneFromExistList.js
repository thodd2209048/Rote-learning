import React, { memo, useEffect, useState } from "react";
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

  const handleSelect = (item) => {
    form.setFieldValue(field.name, item.name);
    setSuggestions((prev) => prev.filter((t) => t !== item));
  };

  const enterToAddItem = (e) => {
    if (e.key === "Enter") {
      form.setFieldValue(field.name, e.target.value);
    }
  };

  useEffect(() => {
    setSuggestions(data?.data.filter((tag) => tag.name.includes(field.value)));
  }, [data, field.value]);

  useEffect(() => {
    const passValue = field.value === "" ? null : field.value;
    form.setFieldValue(field.name, passValue);
  }, [field.value]);

  return (
    <div
      className={clsx(className, styles.wrapper, "mt-2 row d-flex flex-row")}
    >
      {!!label && (
        <label className={clsx(styles.label, "col-3 col-lg-2 text-start")}>
          <span>{capitalizeFirstLetter(label)}</span>
        </label>
      )}
      <div className={clsx(styles.input, "col-9  col-lg-10")}>
        <Form.Control
          className="w-100"
          placeholder="Enter to add"
          value={field.value || ""}
          onKeyDown={enterToAddItem}
          onChange={(e) =>
            form.setFieldValue(field.name, e.target.value.toLowerCase())
          }
        />
        {!!field.name && (
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

export default memo(InputOneFromExistList);
