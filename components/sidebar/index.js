import React from "react";
import MenuItem from "./menuItem";
import { BalanceIcon, ChannelIcon, DashboardIcon, LogoutIcon, ProductIcon } from "../../public/images/icon";

const SideBar = () => {
  return(
    <div className="sidebar-section">
      <div className="sidebar-header">
        SalesDash
      </div>
      <MenuItem
        title="Dashboard"
        isActive
        icon={<DashboardIcon />}
      />
      <MenuItem
        title="Transaction"
        icon={<BalanceIcon />}
      />
      <MenuItem
        title="Product"
        icon={<ProductIcon />}
      />
      <MenuItem
        title="Channel"
        isChannel
        icon={<ChannelIcon />}
      />
      <div style={{padding:"0 21px"}}>
        <div className="devider" />
      </div>

      <div style={{paddingBottom:"50px"}}>
        <MenuItem
          title="Logout"
          icon={<LogoutIcon />}
        />
      </div>
    </div>
  );
};

export default SideBar;
