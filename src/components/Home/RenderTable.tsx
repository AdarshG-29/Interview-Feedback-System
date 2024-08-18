import React from "react";
import { Table } from "antd";
import { ICandidateData } from "../../models/candidateData.type";
import { columnsConfig } from "./TableColumnConfig.tsx";

interface ComponentProps {
  candidateData: ICandidateData[];
  handleOnUpdate: (
    columnKey: string,
    val: string | number | boolean,
    record: ICandidateData
  ) => void;
  handleOnDelete: (record: ICandidateData) => void;
}
const RenderTable: React.FC<ComponentProps> = ({
  candidateData,
  handleOnUpdate,
  handleOnDelete,
}) => {
  return (
    <Table
      columns={columnsConfig(handleOnUpdate, handleOnDelete)}
      dataSource={candidateData ?? []}
      bordered
    />
  );
};

export default RenderTable;
