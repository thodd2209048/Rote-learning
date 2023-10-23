import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./TextInput.module.scss";

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

function TextInput({
  className,
  value,
  onChangeValue,
  label,
  placeholder = "",
  id,
}) {
  return (
    <div className={clsx(className, "row d-flex")}>
      <label htmlFor={id} className="col-2 text-start">
        {label}
      </label>
      <div className="col-10">
        <input
          className="w-100"
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TextInput;
