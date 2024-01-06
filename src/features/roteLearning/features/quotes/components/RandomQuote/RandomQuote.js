import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import clsx from "clsx";

import styles from "./RandomQuote.module.scss";
import { getQuoteRandomly } from "../../api/api";

RandomQuote.propTypes = {};

function RandomQuote({ className }) {
  const query = useQuery({
    queryKey: ["randomQuote"],
    queryFn: () => getQuoteRandomly(),
  });

  return (
    <div className={clsx(styles.wrapper, className, "mt-2")}>
      <h1></h1>
    </div>
  );
}

export default RandomQuote;
