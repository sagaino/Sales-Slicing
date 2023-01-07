import React from "react";
import { ArrowIcon, ThreeDot } from "../../public/images/icon";
import profileImage from "../../public/images/product/profil.png"

const Profile = () => {
  return (
    <div className="profile-section">
      <div className="profile-upper">
        <div className="image-profile">
          <img style={{borderRadius:"50px"}} src={profileImage.src} alt="image-profile" />
        </div>
        <div className="text-profile">
          <div className="name-profile">
            Budi Budiman
          </div>
          <div className="company-profile">
            Owner at PT Suka Maju
          </div>
        </div>
        <div className="arrow-profile">
          <ArrowIcon />
        </div>
      </div>
      <div className="profile-bottom">
        <div className="profile-bottom-header">
          <div className="text-balance">
            Total balance
          </div>
        </div>
        <div className="three-dot">
          <ThreeDot />
        </div>
        <div className="price-balance">
          Rp 1.580.000.000
        </div>
        <div className="button-profile">
          Top Up
        </div>
      </div>
    </div>
  );
};

export default Profile;
