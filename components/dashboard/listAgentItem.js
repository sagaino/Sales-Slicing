import React from "react";
import DetailAgentData from "./detailAgentData";

const ListAgentItem = ({titleAgent = "", img, profitPrice = "", salePrice = "", transactionPrice = ""}) => {
  return (
    <div className="list-agent-item">
      <div className="image-agent-item">
        <img style={{borderRadius:"50px"}} src={img} alt="profile" />
      </div>
      <div className="">
        <div className="title-agent-item">{titleAgent}</div>
        <div>
          <DetailAgentData
            title="Profit"
            price={profitPrice}
          />
          <DetailAgentData
            title="Sales"
            price={salePrice}
          />
          <DetailAgentData
            title="Transaction"
            price={transactionPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default ListAgentItem;
