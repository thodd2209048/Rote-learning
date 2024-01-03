import * as Yup from "yup";
import { articleRepetitions, articleStatuses } from "./constants";

const addArticle = Yup.object({
  url: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  series: Yup.string(),
  tags: Yup.array().required("Required"),
  status: Yup.string()
    .oneOf(articleStatuses, "Please select one option")
    .required("Required"),
  repetition: Yup.string().oneOf(
    articleRepetitions,
    "Please select one option"
  ),
});

export const schemas = {
  addArticle,
};
