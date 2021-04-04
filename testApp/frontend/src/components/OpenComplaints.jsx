import React from "react";
import axiosInstance from "../helpers/axios";
import { useQuery } from "react-query";
import Table from "./Table";
import Loading from "./Alert/Loading";
import ErrorFetch from "./Alert/ErrorFetch";

const fetchOpenComplaints = async () => {
  const token = localStorage.getItem("token");
  const district = localStorage.getItem("district");
  const { data } = await axiosInstance.get("/api/complaints/openCases", {
    "Content-Type": "application/json",
    headers: { Authorization: `Token ${token}` },
  });

  return data.filter(
    (complaint) => Number(complaint.account.slice(4)) == district
  );
};

const OpenComplaints = () => {
  const { isLoading, isError, isSuccess, data } = useQuery(
    "openComplaints",
    fetchOpenComplaints
  );
  console.log(data);
  return (
    <div className="flex items-center justify-center ">
      {isLoading && <Loading />}
      {isError && <ErrorFetch />}
      {isSuccess && <Table data={data} />}
    </div>
  );
};

export default OpenComplaints;
