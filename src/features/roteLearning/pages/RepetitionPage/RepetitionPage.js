import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { format } from "date-fns";
import clsx from "clsx";

import PageLayout from "~/layouts/PageLayout/PageLayout";

import { listArticles } from "../../api/api";
import styles from "./RepetitionPage.module.scss";
import { Col, Row } from "react-bootstrap";
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
    </div>
  );
}

export default RepetitionPage;
