import React, { useEffect } from "react";
//components
import ProductCardInner from "../components/ProductCard/ProductCard";
import ProductCardTabs from "../components/ProductCardTabs/ProductCardTabs";
import Products from "../components/Products/Products";
//
function ProductCard(props) {
  const catalogName = props.match.params.name;
  const productName = props.match.params.product;

  return (
    <>
      <ProductCardInner catalogName={catalogName} productName={productName} />
      <ProductCardTabs />
      <Products title="С этим товаром покупают" hideButton={false} />
    </>
  );
}

export default ProductCard;
