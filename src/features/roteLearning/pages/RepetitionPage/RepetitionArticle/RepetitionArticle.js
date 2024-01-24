import { Field, Form, Formik } from "formik";
import { memo } from "react";
import { useMutation, useQueryClient } from "react-query";

import clsx from "clsx";
import { updateLastTimeReadOfArticle } from "~/features/roteLearning/api/api";
import { articleRepetitions } from "~/features/roteLearning/config/constants";
import { schemas } from "~/features/roteLearning/config/schemas";
import styles from "./RepetitionArticle.module.scss";

import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "~/components/Button/Button";
import Tag from "~/components/TagComponents/Tag/Tag";
import RadioOption from "~/features/roteLearning/components/inputs/RadioInput/RadioOption/RadioOption";

RepetitionArticle.propTypes = {};

function RepetitionArticle({ className, article }) {
  const classes = clsx(styles.wrapper, className);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (value) => updateLastTimeReadOfArticle(article.id, value),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["article", article.id],
      });
    },
  });

  const navigate = useNavigate();

  return (
    <div className={clsx(classes, "my-4 row")}>
      <Col>
        <h4>
          <a
            href={article.link || article.url}
            target="_blank"
            rel="noreferrer"
          >
            {article.title}
          </a>
        </h4>
        <div className="d-flex flex-row flex-wrap">
          <span className={clsx(styles.static)}>ID: {article.id}</span>

          <span className={clsx(styles.static)}>
            {/* <img className={clsx(styles.icon)} src={images.subject} alt="" />{" "} */}
            {article.subject}
          </span>

          <span className={clsx(styles.static)}>
            last time read:{" "}
            {`${article.lastTimeRead[0]}/${article.lastTimeRead[1]}/${article.lastTimeRead[2]}`}
          </span>

          {!!article.nextTimeRead && (
            <span className={clsx(styles.static)}>
              next time read:{" "}
              {`${article.nextTimeRead[0]}/${article.nextTimeRead[1]}/${article.nextTimeRead[2]}`}
            </span>
          )}
        </div>

        <span className="d-flex flex-wrap list-unstyled gap-1">
          {article.tags?.map((tag, idx) => (
            <Tag key={idx} className={""} tagName={tag}></Tag>
          ))}
        </span>

        <div className="row d-flex flex-row mt-1 justify-content-between">
          <Formik
            initialValues={{
              repetition: article.repetition,
            }}
            validationSchema={schemas.repetition}
            onSubmit={(values) => {
              mutation.mutate({ ...values });
            }}
          >
            {({ resetForm, values }) => (
              <Form
                className={clsx(
                  styles.editArea,
                  "flex-column flex-sm-row gap-2"
                )}
              >
                {" "}
                <Field name="repetition">
                  {({ field, form, meta }) => {
                    return (
                      <div className={clsx(styles.input, " d-flex gap-1")}>
                        {articleRepetitions.map((option) => (
                          <RadioOption
                            key={option.value}
                            className={clsx(styles.inputContainer)}
                            handleClick={() => {
                              form.setFieldValue(field.name, option.value);
                            }}
                            checkedValue={field.value}
                            value={option.value}
                          >
                            <div className="px-2">
                              {option.nextPeriod !== "completed" && (
                                <FontAwesomeIcon icon={faHourglass} />
                              )}{" "}
                              {option.nextPeriod}
                            </div>
                          </RadioOption>
                        ))}
                      </div>
                    );
                  }}
                </Field>
                <div className="btnContainer">
                  {mutation.isSuccess && <span>Updated</span>}
                  <Button type="submit" callToAction className={"ms-1"}>
                    Update process
                  </Button>
                  <Button
                    className={"ms-1"}
                    onClick={() => navigate(`/article-update/${article.id}`)}
                  >
                    Edit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Col>
    </div>
  );
}

export default memo(RepetitionArticle);
