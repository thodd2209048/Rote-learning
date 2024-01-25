import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useQuery } from "react-query";
import { format } from "date-fns";
import { Col, Row } from "react-bootstrap";

import styles from "./ListArticles.module.scss";
import { listArticles } from "~/features/roteLearning/api/api";
import PageLayout from "~/layouts/PageLayout/PageLayout";
import RepetitionArticle from "../RepetitionPage/RepetitionArticle/RepetitionArticle";
import Paginate from "~/components/ui/Paginate/Paginate";

ListArticles.propTypes = {
  className: PropTypes.string,
};

function ListArticles({ className }) {
  const classes = clsx(styles.wrapper, className);
  const [page, setPage] = useState(0);
  const { data, isSuccess } = useQuery({
    queryKey: ["articles", page],
    queryFn: () =>
      listArticles({
        page: page,
        size: 10,
      }),
  });

  const articles = data?.data.content;
  return (
    <div className={classes}>
      <PageLayout title="Articles">
        <Row className="justify-content-md-center">
          <Col xs={12} lg={8}>
            {isSuccess &&
              articles.map((article) => (
                <RepetitionArticle article={article} key={article.id} />
              ))}
          </Col>
        </Row>
        <Row>
          <Paginate
            pageCount={data?.data.totalPages}
            handlePageClick={(e) => setPage(e.selected)}
          />
        </Row>
      </PageLayout>
    </div>
  );
}

export default ListArticles;
