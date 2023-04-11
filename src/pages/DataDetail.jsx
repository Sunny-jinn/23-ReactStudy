import React from "react";
import { useParams } from "react-router-dom";
import { DUMMY } from "../store";

const DataDetail = () => {
  const 아무변수 = useParams();

  const tempList = DUMMY.filter(
    (아이템) => 아이템.id === Number(아무변수.id)
  )[0];
  console.log(tempList);

  return (
    <div className="kkk">
      <input className="hihi" type="text" name="" id="" />
      <div className="zzz">검색</div>
    </div>
  );
};

export default DataDetail;
