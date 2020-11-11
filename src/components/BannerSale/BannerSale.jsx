import React from "react";
import "./BannerSale.scss";
import bannerSaleImg from "../../img/banner-sale.png";
function BannerSale() {
  return (
    <div className="banner">
      <div className="container">
        <a href="/#" className="banner__link">
          <img src={bannerSaleImg} alt="banner-sale" />
        </a>
      </div>
    </div>
  );
}

export default BannerSale;
