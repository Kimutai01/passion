import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Bot = ({ setArmyHandler }) => {
  const [singleBot, setSingleBot] = useState("");
  const { id } = useParams();
  console.log(id);
  return <div></div>;
};

export default Bot;
