import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ILoginCredentials } from "../../models/loginCredential.type";
import { useNavigate } from "react-router-dom";
import { signupRequest } from "../../services/login.service.ts";
const SignUpComp: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const onFinish = async (values: ILoginCredentials) => {
    const response = await signupRequest(values);
    if (response.message)
      navigate("/sign-in", { state: { message: response.message } });
    else setError(response.error);
  };
  const handleOnSignIn = () => {
    navigate("/sign-in");
  };
  return (
    <div>
      {error && <h4 style={{ color: "red" }}>{error}</h4>}
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
            Sign Up
          </Button>
          Or{" "}
          <Button type="link" onClick={handleOnSignIn}>
            Sign In!
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpComp;
