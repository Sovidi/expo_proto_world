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
        res = await instance.get(`/lcm_select`);
        setData(res.data);
        break;

      case "POST":
        res = await instance.post(`/lcm_insert`, data);
        setData(res.data);
        break;

      case "PUT":
        res = await instance.put(`/lcm_update`, data);
        setData(res.data);
        break;

      case "DELETE":
        res = await instance.delete(`/lcm_delete?key=${data.key}`);
        setData(res.data);
        break;

      default:
        res = await instance.get(`/lcm_select`);
        setData(res.data);
    }
  };

  useEffect(() => {
    console.log(`글 데이터 업데이트`, data);
  }, [data]);

  return { data, fetchFn };
};

export default useFetchComp;
