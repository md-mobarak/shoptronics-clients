// import React from "react";

import { useState } from "react";
import { useEffect } from "react";

const useData = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    const URL = "http://localhost:4000/product";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCard(data.reverse());
      });
  }, [card]);
  return card;
};

export default useData;
