import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useMutation, useQueryClient } from "react-query";
import { Field, Form, Formik } from "formik";

import styles from "./AddQuote.module.scss";
import { addQuote } from "../../api/api";

import PageLayout from "~/layouts/PageLayout/PageLayout";
import { schemas } from "../../config/schemas";
import GeneralInput from "~/components/GeneralInput/GeneralInput";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";

AddQuote.propTypes = {};

function AddQuote({ className }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (value) => addQuote(value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quotes"] });
    },
  });
  return (
    <PageLayout
      title="Add new quote"
      className={clsx(styles.wrapper, className)}
    >
      <Formik
        initialValues={{
          content: "",
          author: "",
        }}
        validationSchema={schemas.addQuote}
        onSubmit={(values) => {
          mutation.mutate({ ...values });
        }}
      >
        {({ resetForm }) => (
          <Form className="row">
            <div className="col">
              <Field name="content">
                {({ field, form, meta }) => (
                  <>
                    <GeneralInput
                      label="Content"
                      type="text"
                      field={field}
                      form={form}
                      meta={meta}
                    />
                  </>
                )}
              </Field>
              <Field name="author">
                {({ field, form, meta }) => (
                  <>
                    <GeneralInput
                      label="Author"
                      type="text"
                      field={field}
                      form={form}
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
      <NotificationApi response={mutation} showSucceed>
        {mutation.isSuccess && (
          <>
            <p className={clsx(styles.notificationDetail)}>
              Content: {mutation.data.data.content}
            </p>
            <p className={clsx(styles.notificationDetail)}>
              Author: {mutation.data.data.author}
            </p>
          </>
        )}
      </NotificationApi>
    </PageLayout>
  );
}

export default AddQuote;
