import * as Yup from "yup";
import { articleRepetitions, articleStatuses, articleTypes } from "./constants";

const repetitionCondition = {
  repetition: Yup.string().oneOf(
    articleRepetitions,
    "Please select one option"
  ),
};

const addArticle = Yup.object({
  url: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  series: Yup.string().nullable(true),
  tags: Yup.array().required("Required"),
  type: Yup.string()
    .oneOf(articleTypes, "Please select one option")
    .required("Required"),
  status: Yup.string()
    .oneOf(articleStatuses, "Please select one option")
    .required("Required"),
  ...repetitionCondition,
});

const repetition = Yup.object(repetitionCondition);

const updateArticle = Yup.object({
  url: Yup.string(),
  title: Yup.string(),
  subject: Yup.string(),
  series: Yup.string().nullable(true),
  tags: Yup.array(),
  type: Yup.string().oneOf(articleTypes, "Please select one option"),
  status: Yup.string().oneOf(articleStatuses, "Please select one option"),
  repetition: Yup.string().oneOf(
    articleRepetitions,
    "Please select one option"
  ),
});

export const schemas = {
  addArticle,
  repetition,
  updateArticle,
};
