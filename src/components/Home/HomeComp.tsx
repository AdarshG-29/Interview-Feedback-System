import React, { useEffect, useState } from "react";
import {
  addCandidateData,
  deleteCandidateData,
  getCandidateData,
  updateCandidateData,
} from "../../services/candidateFeedback.service.ts";
import { ICandidateData } from "../../models/candidateData.type";
import RenderTable from "./RenderTable.tsx";
import AddRecord from "../AddRecord/AddRecord.tsx";
import "./homeComp.css";

const HomeComp: React.FC = () => {
  const mockData: ICandidateData[] = [
    {
      id: "dskfjkdlsfjdjfkdsljf",
      candidateName: "Yash Gupta",
      interviewStatus: true,
      interviewFeedback: "Very poor performance",
      rating: 6,
      user: "yash",
      createdAt: "today",
    },
    {
      id: "dskfjkdlsfjdjfdsljf",
      candidateName: "Yash Gupta",
      interviewStatus: true,
      interviewFeedback: "Very poor performance",
      rating: 6,
      user: "yash",
      createdAt: "today",
    },
    {
      id: "dskfjklsfjdjfkdsljf",
      candidateName: "Yash Gupta",
      interviewStatus: true,
      interviewFeedback: "Very poor performance",
      rating: 6,
      user: "yash",
      createdAt: "today",
    },
    {
      id: "dkfjkdlsfjdjfkdsljf",
      candidateName: "Yash Gupta",
      interviewStatus: true,
      interviewFeedback: "Very poor performance",
      rating: 6,
      user: "yash",
      createdAt: "today",
    },
  ];
  const [candidateData, setCandidateData] =
    useState<ICandidateData[]>(mockData);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const handleOnGetCandidateData = async (token: string | null) => {
    let response;
    if (token) {
      response = await getCandidateData(token);
      if (!response.error) {
        setCandidateData(response.data);
        setIsUpdate(false);
      }
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    handleOnGetCandidateData(token);
  }, [isUpdate]);

  const handleOnUpdate = async (
    columnKey: string,
    val: string | number | boolean,
    record: ICandidateData
  ) => {
    const updateRecord = {
      ...record,
      [columnKey]: val,
    };
    const response = await updateCandidateData(updateRecord);
    if (!response.error) setIsUpdate(true);
  };
  const handleOnDelete = async (record: ICandidateData) => {
    const response = await deleteCandidateData(record.id ?? "");
    if (!response.error) setIsUpdate(true);
  };
  const handleOnAdd = async (val) => {
    const response = await addCandidateData(val);
    if (!response.error) setIsUpdate(true);
  };
  return (
    <div className="home-comp">
      <AddRecord handleOnSubmit={handleOnAdd} />
      <RenderTable
        candidateData={candidateData}
        handleOnDelete={handleOnDelete}
        handleOnUpdate={handleOnUpdate}
      />
    </div>
  );
};

export default HomeComp;
