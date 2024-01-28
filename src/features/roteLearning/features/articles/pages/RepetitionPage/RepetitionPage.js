import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { format } from "date-fns";
import clsx from "clsx";
import { Col, Row } from "react-bootstrap";

import styles from "./RepetitionPage.module.scss";
import { listArticles } from "~/features/roteLearning/api/api";
import PageLayout from "~/layouts/PageLayout/PageLayout";
import RepetitionArticle from "./RepetitionArticle/RepetitionArticle";
import Paginate from "~/components/ui/Paginate/Paginate";

RepetitionPage.propTypes = {
  className: PropTypes.string,
};

function RepetitionPage({ className }) {
  const classes = clsx(styles.wrapper, className);
  const [page, setPage] = useState(0);
  const { data, isSuccess } = useQuery({
    queryKey: ["repetitionArticle", page],
    queryFn: () =>
      listArticles({
        date: format(new Date(), "yyyy-MM-dd"),
        page: page,
        size: 10,
      }),
  });

  const articles = data?.data.content;

  return (
    <div className={classes}>
      <PageLayout title="Repetition">
        <Row className="justify-content-md-center">
          <Col xs={12} lg={6}>
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
      {articles?.length === 0 && (
        <p>You have finished reading all of the spaced repetitions!</p>
      )}
    </div>
  );
}

export default RepetitionPage;
