import React from "react";
import clsx from "clsx";

import styles from "./RefreshBtn.module.scss";

function RefreshBtn() {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div>
      <button
        className={clsx(styles.button, ["btn", "btn-secondary"])}
        onClick={refreshPage}
      >
        Refresh
      </button>
    </div>
  );
}

export default RefreshBtn;
