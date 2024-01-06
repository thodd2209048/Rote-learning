import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./UpdateBtns.module.scss";
import { ArticlesDataContext } from "~/App";
import Button from "~/components/Button/Button";
import { updateArticleRepetition } from "~/services/ApiServices";
import { images } from "~/assets/Images/images";

UpdateBtns.propTypes = {
  className: PropTypes.string,
  repetition: PropTypes.string,
  article: PropTypes.object.isRequired,
};

function UpdateBtns({ className, repetition, article }) {
  const classes = clsx(className, styles.wrapper);
  const [isUpdated, setIsUpdated] = useState(false);

  const { toggleFetchData } = useContext(ArticlesDataContext);
  const navigate = useNavigate();

  const editArticle = async () => {
    if (repetition !== null) {
      const success = await updateArticleRepetition(article.id, repetition);
      if (success) {
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
        }, 2000);
        toggleFetchData();
      }
    }
  };
  return (
    <div className="d-flex flex-row gap-1">
      {isUpdated && (
        <span>
          <img src={images.updated} alt="" />
        </span>
      )}
      <Button
        className={clsx(styles.btn)}
        callToAction={true}
        onClick={editArticle}
      >
        Updated
      </Button>
      <Button
        className={clsx(styles.btn)}
        onClick={() => navigate(`/edit?id=${article.id}`)}
      >
        Edit
      </Button>
    </div>
  );
}

export default UpdateBtns;
