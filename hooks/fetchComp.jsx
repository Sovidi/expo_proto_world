import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchComp = () => {
  const [data, setData] = useState([]);

  const instance = axios.create({
    baseURL: "http://192.168.0.241:3080/",
  });

  const fetchFn = async (type, data) => {
    let res;
    switch (type) {
      case "GET":
        res = await instance.get(`/select`);
        setData(res.data);
        break;

      case "POST":
        res = await instance.post(`/insert`, data);
        setData(res.data);
        break;

      case "PUT":
        res = await instance.put(`/update`, data);
        setData(res.data);
        break;

      case "DELETE":
        res = await instance.delete(`/delete?key=${data.sKey}`);
        setData(res.data);
        break;

      default:
        res = await instance.get(`/select`);
        setData(res.data);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return { data, fetchFn };
};

export default useFetchComp;
