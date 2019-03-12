import React, { useState, useEffect } from "react";

const useFetch = (callback, url) => {
  const fetchInitialData = async () => {
    try {
      // 안드로이드 에뮬레이터는 localhost 를 10.0.2.2 로 인식함
      const response = await fetch(url);
      const responseJson = await response.json();
      callback({ type: "SET_INIT_DATA", payload: responseJson });
    } catch (e) {
      console.log("err", e);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);
};

export default useFetch;
