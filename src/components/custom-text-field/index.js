import { Controller } from "react-hook-form";
import { Form } from "react-bootstrap";

const CustomTextField = (props) => {
  return (
    <Form.Group
      className="mb-3"
      controlId={props.name}
      style={{ textAlign: "left" }}
    >
      <Form.Label>{props.label}</Form.Label>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue=""
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Form.Control
            onChange={onChange}
            value={value}
            ref={ref}
            isInvalid={props.errors}
            placeholder={props.placeholder}
            type={props.type}
            as={props.as}
            rows={props.rows}
          />
        )}
      />
      <Form.Control.Feedback type="invalid">
        {props.errors?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default CustomTextField;
