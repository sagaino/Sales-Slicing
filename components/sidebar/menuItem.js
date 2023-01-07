import React, { useState } from "react";
import { ArrowIcon } from "../../public/images/icon";

const MenuItem = ({title = "", icon, isActive = false, isChannel = false}) => {
  const [itemActive, setItemActive] = useState(true);

  return (
    <div>
      <div className="menu-item-section" onClick={() => isChannel && setItemActive(e => !e)}>
        <div className="icon-item">
          {icon}
        </div>
        <div
          className={("menu-item-title" + (isActive ? " active" : " no-active"))}
        >{title}</div>
        {
          isChannel &&
          <div className="arrow-section" style={{transform: itemActive === false && 'rotate(180deg)'}}>
            <ArrowIcon />
          </div>
        }
        <div className="nodul-section">
          <div className={(isActive && "nodul")}></div>
        </div>
      </div>
      {
        isChannel && itemActive &&
        <div className="channel-item-section">
          <div className="channel-item">Agent</div>
          <div className="channel-item">Balance</div>
          <div className="channel-item">Transaction</div>
        </div>
      }
    </div>
  );
};

export default MenuItem;
