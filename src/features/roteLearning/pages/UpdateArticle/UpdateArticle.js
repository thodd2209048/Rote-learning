import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Col, Row } from "react-bootstrap";

import styles from "./UpdateArticle.module.scss";
import {
  getArticle,
  listSeries,
  listSubject,
  listTag,
  updateArticle,
} from "../../api/api";
import { schemas } from "../../config/schemas";

import PageLayout from "~/layouts/PageLayout/PageLayout";
import GeneralInput from "~/components/GeneralInput/GeneralInput";
import InputOneFromExistList from "../../components/inputs/InputFromExistList/InputOneFromExistList/InputOneFromExistList";
import InputListFromExistList from "../../components/inputs/InputFromExistList/InputListFromExistList/InputListFromExistList";
import ConstantInput from "../../components/inputs/ConstantInput/ConstantInput";
import {
  articleRepetitions,
  articleStatuses,
  articleTypes,
} from "../../config/constants";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import Tag from "~/components/TagComponents/Tag/Tag";

UpdateArticle.propTypes = {
  className: PropTypes.string,
};

function UpdateArticle({ className }) {
  let { id } = useParams();
  const queryClient = useQueryClient();
  const { data, isSuccess } = useQuery({
    queryKey: ["article", id],
    queryFn: () => getArticle(id),
    staleTime: 1000 * 60 * 1,
  });

  const mutation = useMutation({
    mutationFn: (values) => {
      updateArticle(id, values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["article", id],
      });
    },
  });

  return (
    <div className={clsx(styles.wrapper, className)}>
      <PageLayout title={`Update article with ID: ${id}`}>
        <Row>
          <Col>
            <Formik
              initialValues={{
                url: data?.data.url,
                title: data?.data.title,
                subject: data?.data.subject,
                series: data?.data.series,
                tags: data?.data.tags,
                type: data?.data.type,
                status: data?.data.status,
                repetition: data?.data.repetition,
              }}
              validationSchema={schemas.updateArticle}
              onSubmit={(values) => {
                mutation.mutate(values);
              }}
              enableReinitialize
            >
              {({ resetForm, values }) => {
                return (
                  <Form className="row">
                    <div className="col">
                      <Field name="url">
                        {({ field, form, meta }) => (
                          <>
                            <GeneralInput
                              label="Url"
                              type="text"
                              field={field}
                              form={form}
                              meta={meta}
                            />
                          </>
                        )}
                      </Field>
                      <Field name="title">
                        {({ field, form, meta }) => (
                          <>
                            <GeneralInput
                              label="Title"
                              type="text"
                              field={field}
                              form={form}
                              meta={meta}
                            />
                          </>
                        )}
                      </Field>
                      <Field name="subject">
                        {({ field, form, meta }) => (
                          <>
                            <InputOneFromExistList
                              form={form}
                              field={field}
                              label="Subject"
                              queryFn={() => listSubject()}
                            />
                          </>
                        )}
                      </Field>
                      <Field name="series">
                        {({ field, form, meta }) => (
                          <>
                            <InputOneFromExistList
                              form={form}
                              field={field}
                              label="Series"
                              queryFn={() => listSeries()}
                            />
                          </>
                        )}
                      </Field>
                      <Field name="tags">
                        {({ field, form, meta }) => (
                          <>
                            <InputListFromExistList
                              form={form}
                              field={field}
                              label="Tags"
                              queryFn={() => listTag()}
                            />
                          </>
                        )}
                      </Field>
                      <Field name="type">
                        {({ field, form, meta }) => (
                          <>
                            <ConstantInput
                              label="Select a type"
                              leftLabel="Type"
                              options={articleTypes}
                              form={form}
                              field={field}
                              meta={meta}
                            />
                          </>
                        )}
                      </Field>
                      <Field name="status">
                        {({ field, form, meta }) => (
                          <>
                            <ConstantInput
                              label="Select a status"
                              leftLabel="Status"
                              options={articleStatuses}
                              form={form}
                              field={field}
                              meta={meta}
                            />
                          </>
                        )}
                      </Field>
                      <Field name="repetition">
                        {({ field, form, meta }) => (
                          <>
                            <ConstantInput
                              label="Select a step"
                              leftLabel="Repetition"
                              options={articleRepetitions}
                              fieldNameAsValue="value"
                              fieldNameAsTitle="nextPeriod"
                              form={form}
                              field={field}
                              meta={meta}
                            />
                          </>
                        )}
                      </Field>
                    </div>
                    <div className="row mt-3">
                      <div className="col">
                        <button
                          className="btn btn-primary me-3"
                          type="submit"
                          disabled={mutation.isPending}
                        >
                          Submit
                        </button>
                        <button
                          className="btn btn-outline-secondary"
                          type="reset"
                          onClick={() => resetForm()}
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <NotificationApi response={mutation}>
              <p>{mutation.data?.data.url}</p>
              <p>{mutation.data?.data.title}</p>
              <p>{mutation.data?.data.subject}</p>
              <p>{mutation.data?.data.series}</p>
              {mutation.data?.data.tags.map((tag) => (
                <Tag key={tag.name} tagName={tag.name} />
              ))}
              <p>{mutation.data?.data.status}</p>
              <p>{mutation.data?.data.repetition}</p>
            </NotificationApi>
          </Col>
        </Row>
      </PageLayout>
    </div>
  );
}

export default UpdateArticle;
