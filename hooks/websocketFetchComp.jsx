import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useWebsocketFetchComp = () => {
  const [chatData, setChatData] = useState([]);

  const socket = io(`http://192.168.0.241:3090/`);

  useEffect(() => {
    socket.on("connect", async (e) => {
      console.log("socket.io 연결");
    });

    socket.on("chatData", async (e) => {
      let data = JSON.parse(e);
      setChatData((item) => data);
    });

    socket.on("submitMessage", async (e) => {
      let data = JSON.parse(e);
      setChatData((item) => data);
    });

    socket.on("disconnect", async () => {
      console.log("ws 연결끊김");
    });
  }, []);

  useEffect(() => {
    console.log("채팅 데이터 업데이트:", chatData);
  }, [chatData]);

  return { chatData, socket };
};

export default useWebsocketFetchComp;
