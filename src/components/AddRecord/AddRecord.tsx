import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";

const AddRecord = ({ handleOnSubmit }) => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const handleOnAdd = () => setIsAdd(true);
  const onFinish = (values) => {
    handleOnSubmit(values);
    setIsAdd(false);
  };

  const onFinishFailed = (errorInfo) => {
    setIsAdd(true);
  };

  return (
    <div>
      <Button onClick={handleOnAdd} disabled={isAdd}>
        Add a candidate
      </Button>
      <div style={{ paddingTop: "10px", width: "100%" }}>
        {isAdd && (
          <Form
            variant="filled"
            style={{ maxWidth: 1000 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Candidate Name"
              name="candidateName"
              rules={[
                { required: true, message: "Please input candidate name" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Rating" name="rating">
              <InputNumber style={{ width: "100%" }} min={0} max={5} />
            </Form.Item>

            <Form.Item label="Interview Feedback" name="interviewFeedback">
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Interview Status"
              name="interviewStatus"
              rules={[{ required: true, message: "Please select status" }]}
            >
              <Select
                options={[
                  {
                    value: true,
                    label: "Completed",
                  },
                  { value: false, label: "Pending" },
                ]}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
};

export default AddRecord;
