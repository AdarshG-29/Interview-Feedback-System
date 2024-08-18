import { TableProps } from "antd";
import { ICandidateData } from "../../models/candidateData.type";
import React from "react";
import { deleteRecord, dropDownRenderer, rate } from "./ColumnRenderer.tsx";

export const columnsConfig = (
  handleOnUpdate: (
    columnKey: string,
    val: string | number | boolean,
    record: ICandidateData
  ) => void,
  handleOnDelete: (record: ICandidateData) => void
): TableProps<ICandidateData>["columns"] => {
  return [
    {
      title: "Name",
      dataIndex: "candidateName",
      key: "candidateName",
      render: (candidateName: string) => <p>{candidateName}</p>,
    },
    {
      title: "Interview Status",
      dataIndex: "interviewStatus",
      key: "interviewStatus",
      render: (interviewStatus: boolean, record) => {
        const handleOnChange = (val) => {
          handleOnUpdate("interviewStatus", val.value, record);
        };
        return dropDownRenderer(handleOnChange, interviewStatus);
      },
    },
    {
      title: "Interview Feedback",
      dataIndex: "interviewFeedback",
      key: "interviewFeedback",
      render: (interviewFeedback: string) => <p>{interviewFeedback}</p>,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating: number, record) => {
        const handleOnChange = (val) => {
          handleOnUpdate("rating", val, record);
        };
        return rate(handleOnChange, rating);
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return deleteRecord(handleOnDelete, record);
      },
    },
  ];
};
