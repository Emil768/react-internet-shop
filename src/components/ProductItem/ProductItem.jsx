import React, { useState } from "react";
import "./ProductItem.scss";
//img
import basketImg from "../../img/product-basket.svg";
function ProductItem({ className, name, price, img, key }) {
  const [activeFavorite, setActiveFavorite] = useState(null);
  const handlerActiveFavorite = (e, key) => {
    e.preventDefault();
    setActiveFavorite(key);
  };

  return (
    <div className="product-slider__item">
      <div className={className}>
        <p className="product-item__hover-text">посмотреть товар</p>
        <button
          onClick={(e) => handlerActiveFavorite(e, key)}
          className={
            activeFavorite === key
              ? "product-item__favorite active"
              : "product-item__favorite"
          }
        ></button>
        <a href="/#"></a>
        <img className="product-item__img" src={img} alt="" />
        <h3 className="product-item__title">{name}</h3>
        <p className="product-item__price">{price}</p>
        <p className="product-item__notify-text">нет в наличии</p>
        <button className="product-item__basket">
          <img src={basketImg} alt="" />
        </button>
        <a className="product-item__notify-link" href="/#">
          Сообщить о поступлении
        </a>
      </div>
    </div>
  );
}

export default ProductItem;
