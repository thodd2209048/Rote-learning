import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./RepetitionPage.module.scss";
import axios from "axios";
import { ListMultiPages } from "~/components/ListMultiPages";
import clsx from "clsx";

RepetitionPage.propTypes = {};

function RepetitionPage({ className }) {
  const classes = clsx(className, styles.wrapper);
  const [articlesToRecall, setArticlesToReCall] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/article/shouldRead"
        );
        if (res.status === 200) {
          setArticlesToReCall(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classes}>
      <ListMultiPages list={articlesToRecall} articlePerPage={5} />
    </div>
  );
}

export default RepetitionPage;
