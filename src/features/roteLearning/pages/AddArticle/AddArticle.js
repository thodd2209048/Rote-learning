import clsx from "clsx";

import { Field, Form, Formik } from "formik";
import { Button, Col, Row } from "react-bootstrap";
import { useMutation, useQueryClient } from "react-query";

import GeneralInput from "~/components/GeneralInput/GeneralInput";
import InputListFromExistList from "~/features/roteLearning/components/inputs/InputFromExistList/InputListFromExistList/InputListFromExistList";
import InputOneFromExistList from "../../components/inputs/InputFromExistList/InputOneFromExistList/InputOneFromExistList";

import styles from "./AddArticle.module.scss";

import { createArticle, listSeries, listSubject, listTag } from "../../api/api";
import ConstantInput from "../../components/inputs/ConstantInput/ConstantInput";
import {
  articleRepetitions,
  articleStatuses,
  articleTypes,
} from "../../config/constants";
import { schemas } from "../../config/schemas";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";

AddArticle.propTypes = {};

function AddArticle(props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => createArticle(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });

  return (
    <div className={clsx(styles.wrapper, "container")}>
      <Row>
        <Col xs={12} lg={6} className=" offset-lg-3">
          <Row>
            <Col>
              <h1>Add new article</h1>
            </Col>
          </Row>

          <Formik
            initialValues={{
              url: "",
              title: "",
              subject: "",
              series: "",
              tags: [],
              type: "",
              status: "",
              repetition: "",
            }}
            validationSchema={schemas.addArticle}
            onSubmit={(values) => {
              mutation.mutate({ ...values });
            }}
          >
            {({ resetForm }) => (
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
            )}
          </Formik>
        </Col>
      </Row>
      <NotificationApi response={mutation} showSucceed>
        {mutation.isSuccess && (
          <>
            <p className={clsx(styles.notificationDetail)}>
              URL: {mutation.data?.data.url}
            </p>
            <p className={clsx(styles.notificationDetail)}>
              Title: {mutation.data?.data.title}
            </p>
            <p className={clsx(styles.notificationDetail)}>
              Status: {mutation.data?.data.status}
            </p>
            <p className={clsx(styles.notificationDetail)}>
              Subject: {mutation.data?.data.subject}
            </p>
            <p className={clsx(styles.notificationDetail)}>
              Series: {mutation.data?.data.series}
            </p>
            <div className={clsx(styles.tags)}>
              <span>Tags: </span>
              {mutation.data?.data.tags.map((tag, index) => (
                <span className={clsx(styles.tag)} key={index}>
                  {tag}
                </span>
              ))}
            </div>
            <p className={clsx(styles.notificationDetail)}>
              Last time read: {mutation.data?.data.lastTimeRead}
            </p>
            <p className={clsx(styles.notificationDetail)}>
              Repetition: {mutation.data?.data.repetition}
            </p>
          </>
        )}
      </NotificationApi>
    </div>
  );
}

export default AddArticle;
