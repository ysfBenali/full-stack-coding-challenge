import React from "react";
import axiosInstance from "../helpers/axios";
import { useQuery } from "react-query";
import TopTable from "./TopTable";
import Loading from "./Alert/Loading";
import ErrorFetch from "./Alert/ErrorFetch";

const getTopThree = (data, district) => {
  let account = Object.keys(data).filter(
    (key) => Number(key.slice(4)) == district
  )[0];
  let lastMax = data[account].slice(0, 3).slice(-1)[0][1];

  return data[account].filter((d) => d[1] >= lastMax);
};

const fetchOpenComplaints = async () => {
  const token = localStorage.getItem("token");
  const district = localStorage.getItem("district");
  const { data } = await axiosInstance.get("/api/complaints/topComplaints", {
    "Content-Type": "application/json",
    headers: { Authorization: `Token ${token}` },
  });

  return getTopThree(data, district);
};

const TopComplaints = () => {
  const { isLoading, isError, isSuccess, data } = useQuery(
    "openComplaints",
    fetchOpenComplaints
  );

  return (
    <div className="flex items-center justify-center">
      {isLoading && <Loading />}
      {isError && <ErrorFetch />}
      {isSuccess && <TopTable data={data} />}
    </div>
  );
};
export default TopComplaints;
