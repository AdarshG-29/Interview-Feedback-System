import { ICandidateData } from "../models/candidateData.type";
import _get from "lodash/get";
export const addCandidateData = async (payload: ICandidateData) => {
  let apiResponse: { id: string; error: "" } = { id: "", error: "" };
  try {
    const response = await fetch("https://api.example.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const res = await response.json();
    if (!res.ok) {
      apiResponse.error = _get(res, "error", "");
    }
    apiResponse.id = _get(res, "id", "");
  } catch (error) {
    apiResponse.error = _get(error, "error", "");
  }
  return apiResponse;
};
export const updateCandidateData = async (payload: ICandidateData) => {
  let apiResponse: { message: string; error: "" } = { message: "", error: "" };
  try {
    const response = await fetch("https://api.example.com/data", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const res = await response.json();
    if (!res.ok) {
      apiResponse.error = _get(res, "error", "");
    }
    apiResponse.message = _get(res, "message", "");
  } catch (error) {
    apiResponse.error = _get(error, "error", "");
  }
  return apiResponse;
};
export const deleteCandidateData = async (id: string) => {
  let apiResponse: { message: string; error: "" } = { message: "", error: "" };
  try {
    const response = await fetch(`https://api.example.com/candidate/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    if (!res.ok) {
      apiResponse.error = _get(res, "error", "");
    }
    apiResponse.message = _get(res, "message", "");
  } catch (error) {
    apiResponse.error = _get(error, "error", "");
  }
  return apiResponse;
};
export const getCandidateData = async (token: string) => {
  let apiResponse: { data: ICandidateData[]; error: "" } = {
    data: [],
    error: "",
  };
  const candidateDataReader = (res) => {
    const data: ICandidateData[] = res.map((ele) => {
      return {
        candidateName: _get(ele, "candidateName", ""),
        interviewStatus: _get(ele, "interviewStatus", false),
        interviewFeedback: _get(ele, "interviewFeedback", ""),
        rating: _get(ele, "rating", 0),
        user: _get(ele, "user", ""),
        createdAt: _get(ele, "createdAt", ""),
      };
    });
    return data;
  };
  try {
    const response = await fetch("https://api.example.com/candidates", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await response.json();
    if (!res.ok) {
      apiResponse.error = _get(res, "error", "");
    }
    apiResponse.data = candidateDataReader(res ?? []);
  } catch (error) {
    apiResponse.error = _get(error, "error", "");
  }
  return apiResponse;
};
