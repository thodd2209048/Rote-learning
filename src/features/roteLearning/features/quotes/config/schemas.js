import * as Yup from "yup";

const addQuote = Yup.object({
  content: Yup.string().required("Required"),
  author: Yup.string().required("Required"),
});

export const schemas = {
  addQuote,
};
