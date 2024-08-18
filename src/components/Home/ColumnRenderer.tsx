import React from "react";
import { Button, Rate, Select, Space } from "antd";

export const dropDownRenderer = (onChange, value) => {
  return (
    <Space wrap>
      <Select
        labelInValue={true}
        defaultValue={value}
        style={{ width: 120 }}
        onChange={onChange}
        options={[
          { value: true, label: "Completed" },
          { value: false, label: "Pending" },
        ]}
      />
    </Space>
  );
};

export const rate = (onChange, rating) => {
  return <Rate allowHalf defaultValue={rating} onChange={onChange} />;
};

export const deleteRecord = (onChange, record) => {
  const handleOnChange = () => onChange(record);
  return (
    <Space size="middle">
      <Button type="link" onClick={handleOnChange}>
        Delete
      </Button>
    </Space>
  );
};
