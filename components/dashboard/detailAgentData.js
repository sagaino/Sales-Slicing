import React from "react";

const DetailAgentData = ({title = "", price = ""}) => {
  return(
    <div className="detail-agent-section">
      <div className="detail-title">{title}</div>
      <div className="detail-price">{price}</div>
    </div>
  );
};

export default DetailAgentData;
