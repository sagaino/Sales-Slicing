import React from "react";
import { ArrowFlatIcon, ArrowHighIcon, ArrowLowIcon } from "../../public/images/icon";
import AgentItem from "./agentItem";
import ChartItem from "./chartItem";
import ProductItem from "./productItem";
import TransactionItem from "./trasactionItem";

const Dashboard = () => {
  return (
    <div className="dashboard-section">
      <div>
        <div className="dashboard-header">
          Dashboard
        </div>
        <div className="dashboard-subheader">
          Today’s date: Sun, 10 April 2022
        </div>
      </div>

      <div className="dashboard-trasaction">
        <TransactionItem
          title="Profit"
          price="Rp 11.500.000"
          iconRating={<ArrowLowIcon />}
          colorRating="#E94948"
          rating="0.3% compared to 7 days ago"
        />
        <TransactionItem
          title="Sales"
          price="Rp 56.000.000"
          iconRating={<ArrowHighIcon />}
          colorRating="#36D189"
          rating="0.5% compared to 7 days ago"
        />
        <TransactionItem
          title="Transaction"
          price="1.090 transactions"
          iconRating={<ArrowFlatIcon />}
          colorRating="#FFDC7D"
          rating="same as 7 days ago"
        />
      </div>

      <div className="dashboard-body">
        <div>
         <ChartItem />
         <ProductItem />
        </div>
        <div>
          <AgentItem />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
