import React from "react";
import axiosInstance from "../helpers/axios";
import { useQuery } from "react-query";
import Table from "./Table";
import Loading from "./Alert/Loading";
import ErrorFetch from "./Alert/ErrorFetch";

const fetchClosedComplaints = async () => {
  const token = localStorage.getItem("token");
  const district = localStorage.getItem("district");
  const { data } = await axiosInstance.get("/api/complaints/closedCases", {
    "Content-Type": "application/json",
    headers: { Authorization: `Token ${token}` },
  });

  return data.filter(
    (complaint) => Number(complaint.account.slice(4)) == district
  );
};

const ClosedComplaints = () => {
  const { isLoading, isError, isSuccess, data } = useQuery(
    "closedComplaints",
    fetchClosedComplaints
  );
  console.log(data);
  return (
    <div className="flex items-center justify-center">
      {isLoading && <Loading />}
      {isError && <ErrorFetch />}
      {isSuccess && <Table data={data} />}
    </div>
  );
};

export default ClosedComplaints;
