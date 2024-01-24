import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { Col, Form, Row } from "react-bootstrap";

ConstantInput.propTypes = { label: PropTypes.string };

function ConstantInput({
  label,
  leftLabel,
  options,
  fieldNameAsValue = 0,
  fieldNameAsTitle = "value",
  field,
  form,
  meta,
  ...props
}) {
  return (
    <Row className="mt-2 form-group">
      {!!leftLabel && (
        <Col xs="3" lg="2" className="d-flex">
          <label>{leftLabel}</label>
        </Col>
      )}
      <Col>
        <Form.Select
          className={meta.error && meta.touched ? "is-invalid" : ""}
          {...field}
          {...props}
        >
          <option value={""}>{label}</option>
          {options.map((option) => (
            <option
              key={
                typeof option === "object" ? option[fieldNameAsValue] : option
              }
              value={
                typeof option === "object" ? option[fieldNameAsValue] : option
              }
            >
              {typeof option === "object" ? option[fieldNameAsTitle] : option}
            </option>
          ))}
        </Form.Select>
        <ErrorMessage
          component={"div"}
          name={field.name}
          className="invalid-feedback text-start"
        />
      </Col>
    </Row>
  );
}

export default ConstantInput;
