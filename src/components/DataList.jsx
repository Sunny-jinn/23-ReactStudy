import React from "react";

const DataList = ({ id, title, content, created_at }) => {
  return (
    <div className="flex data-box">
      <div className="data-id">{id}</div>
      <div className="data-title">{title}</div>
      <div className="data-content">{content}</div>
      <div className="data-date">{created_at}</div>
    </div>
  );
};

export default DataList;
