import React from "react";

const ListProductItem = ({img, titleItem = "", userItem = "", countTransaction = ""}) => {
  return (
    <div className="item-prod-section">
      <div className="item-prod">
        <img src={img} alt="logo" />
        <div className="title-item">
          {titleItem}
        </div>
        <div className="item-user">
          {userItem ? userItem : <div style={{height:"16px"}} />}
        </div>
        <div className="count-section">
          <div className="count-transaction">
            {countTransaction}
          </div>
          <div className="transaction">
            transactions
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductItem;
