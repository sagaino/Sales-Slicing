import React from "react";
import maximImage from "../../public/images/product/logo-taximaxim-mobile 1.png"
import plnImage from "../../public/images/product/pln.png"
import ovoImage from "../../public/images/product/ovo.png"
import threeImage from "../../public/images/product/3.png"
import telkomselImage from "../../public/images/product/telkomsel.png"
import ListProductItem from "./listProductItem";

const ProductItem = () => {
  return (
    <div className="product-item-section">
      <div className="product-header">
        Top 5 Products
      </div>
      <div className="prod-list-item">
        <ListProductItem
          titleItem="Maxim"
          userItem="150.000"
          countTransaction="120"
          img={maximImage.src}
        />
        <ListProductItem
          titleItem="Telkomsel"
          userItem="25.000"
          countTransaction="98"
          img={telkomselImage.src}
        />
        <ListProductItem
          titleItem="Three"
          userItem="50.000"
          countTransaction="74"
          img={threeImage.src}
        />
        <ListProductItem
          titleItem="OVO"
          userItem="100.000"
          countTransaction="68"
          img={ovoImage.src}
        />
        <ListProductItem
          titleItem="PLN Postpaid"
          userItem=""
          countTransaction="120"
          img={plnImage.src}
        />
      </div>
    </div>
  );
};

export default ProductItem;
