import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ILoginCredentials } from "../../models/loginCredential.type";
import { useNavigate, useLocation } from "react-router-dom";
import { loginRequest } from "../../services/login.service.ts";

const SignInComp: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [error, setError] = useState("");
  const onFinish = async (values: ILoginCredentials) => {
    const response = await loginRequest(values);
    if (response.token) {
      localStorage.setItem("token", response.token);
      navigate("/home");
    } else setError(response.error);
  };
  const handleOnSignUp = () => {
    navigate("/sign-up");
  };
  return (
    <div>
      {!error ? (
        state && <h4 style={{ color: "green" }}>{state.message}</h4>
      ) : (
        <h4 style={{ color: "red" }}>{error}</h4>
      )}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or{" "}
          <Button type="link" onClick={handleOnSignUp}>
            Sign up!
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignInComp;
