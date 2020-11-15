import React, { useState } from "react";
import "./ProductItem.scss";
import { Link } from "react-router-dom";
//img
import basketImg from "../../img/product-basket.svg";
function ProductItem({ className, name, price, img, index, url }) {
  const [activeFavorite, setActiveFavorite] = useState(null);
  const handlerActiveFavorite = (e, index) => {
    e.preventDefault();
    setActiveFavorite(index);
  };

  return (
    <Link to={`/catalog/${url}/${name}`}>
      <div className={className}>
        <p className="product-item__hover-text">посмотреть товар</p>
        <button
          onClick={(e) => handlerActiveFavorite(e, index)}
          className={
            activeFavorite === index
              ? "product-item__favorite active"
              : "product-item__favorite"
          }
        ></button>
        <img className="product-item__img" src={img} alt="" />
        <h3 className="product-item__title ">{name}</h3>
        <p className="product-item__price">{price}</p>
        <p className="product-item__notify-text">нет в наличии</p>
        <button className="product-item__basket">
          <img src={basketImg} alt="" />
        </button>
        <span className="product-item__notify-link">
          Сообщить о поступлении
        </span>
      </div>
    </Link>
  );
}

export default ProductItem;
