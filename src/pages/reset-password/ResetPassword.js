import FormContainer from "components/form-container";
import Loader from "components/loader";
import Message from "components/message";
import React, { useState, Fragment } from "react";
import { Form, Button, Alert, InputGroup, FormControl } from "react-bootstrap";
import AuthService from "services/AuthService";

const ResetPassword = ({ location }) => {
  const query = new URLSearchParams(location.search);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (checkPassword(password)) {
      if (confirmPassword === password) {
        resetPassword();
      } else {
        setError("Password doesn't match");
      }
    } else {
      setError("Minimum eight characters, at least one letter, one number");
    }
  };

  const resetPassword = async () => {
    setLoading(true);
    try {
      const token = query.get("token");
      console.log(token);
      await AuthService.resetPassword(token, password);
      setSuccess(true);
    } catch (e) {
      setError(e.response.data.message);
    }
    setLoading(false);
  };

  function checkPassword(str) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(str);
  }

  return (
    <Fragment>
      {!success ? (
        <FormContainer>
          <h3>Reset Password</h3>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <InputGroup controlId="password">
              <FormControl
                type={showPassword ? "password" : "text"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></FormControl>
              <InputGroup.Append>
                <InputGroup.Text>
                  <i
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                  ></i>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <br />
            <InputGroup controlId="password">
              <FormControl
                type={showConfirmPassword ? "password" : "text"}
                placeholder="Enter confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></FormControl>
              <InputGroup.Append>
                <InputGroup.Text>
                  <i
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                    className={
                      showConfirmPassword ? "fa fa-eye-slash" : "fa fa-eye"
                    }
                  ></i>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <br />
            <Button type="submit" variant="primary">
              Reset
            </Button>
          </Form>
        </FormContainer>
      ) : (
        <FormContainer>
          <Alert variant="success">
            <Alert.Heading>Password Updated!</Alert.Heading>
            <p>
              Your password has been changed successfully. Use your new password
              to log in.
            </p>
          </Alert>
        </FormContainer>
      )}
    </Fragment>
  );
};

export default ResetPassword;
