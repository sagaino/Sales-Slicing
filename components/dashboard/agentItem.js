import React from "react";
import ListAgentItem from "./listAgentItem";
import profileImage from "../../public/images/product/profil.png"

const AgentItem = () => {
  return (
    <div className="agent-section">
      <div className="agent-header">
        Top 5 Agents
      </div>
      <div>
        <ListAgentItem
          titleAgent="PT Suka Maju Jakarta"
          img={profileImage.src}
          profitPrice= "Rp 3.700.000"
          salePrice="Rp 7.230.000"
          transactionPrice="43 transactions"
        />
        <ListAgentItem
          titleAgent="Susi Susanti"
          img={profileImage.src}
          profitPrice= "Rp 3.500.000"
          salePrice="Rp 5.230.000"
          transactionPrice="37 transactions"
        />
        <ListAgentItem
          titleAgent="Toko Pulsa III Depok"
          img={profileImage.src}
          profitPrice= "Rp 2.700.000"
          salePrice="Rp 4.230.000"
          transactionPrice="38 transactions"
        />
        <ListAgentItem
          titleAgent="PT Suka Maju Bogor"
          img={profileImage.src}
          profitPrice= "Rp 2.400.000"
          salePrice="Rp 3.230.000"
          transactionPrice="40 transactions"
        />
        <ListAgentItem
          titleAgent="Anton Antoman"
          img={profileImage.src}
          profitPrice= "Rp 5.700.000"
          salePrice="Rp 6.230.000"
          transactionPrice="50 transactions"
        />
      </div>
    </div>
  );
};

export default AgentItem;
