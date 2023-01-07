import React from "react";

const TransactionItem = ({title = "", price = "", iconRating, rating = "", colorRating = ""}) => {
  return (
    <div className="transaction-item-section">
      <div className="item-trans">
        <div className="item-title">
          {title}
        </div>
        <div className="item-price">
          {price}
        </div>
        <div className="item-rating">
          <div className="icon-rating">{iconRating}</div>
          <div style={{color: colorRating}}>
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
