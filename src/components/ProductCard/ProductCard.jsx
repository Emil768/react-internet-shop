import React, { useState } from "react";

//lib
import { Rate } from "antd";
//

//components
import BreadCrumb from "../BreadCrumbs/BreadCrumbs";
import "./ProductCard.scss";
//

//img
import jetSkiLarge from "../../img/jetSki-large.png";

//
function ProductCard({ catalogName, productName }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabsNames = ["Характеристики", "Наличие в магазине"];

  const handlerActiveTab = (e, index) => {
    e.preventDefault();
    setActiveTab(index);
  };
  return (
    <section className="product-card">
      <BreadCrumb name={catalogName} product={productName} />
      <div className="container">
        <div className="product-card__content">
          <div className="product-card__img-box product-item__sale">
            <img src={jetSkiLarge} alt="" />
            <p className="product-card__price-old">1 200 475 ₽</p>
            <p className="product-card__price-new">1 100 475 ₽</p>
            <a className="product-card__link" href="/#">
              Нашли дешевле? Снизим цену!
            </a>
          </div>
          <div className="product-card__info">
            <h1 className="product-card__title">{productName}</h1>
            <p className="product-card__code">Код товара: 366666-2 </p>
            <div className="product-card__buttons">
              <button>
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z"
                    fill="#2F3035"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="16"
                    y="15.7708"
                    width="4"
                    height="11.7255"
                    rx="2"
                    fill="#2F3035"
                  />
                  <rect
                    x="8"
                    y="0.527588"
                    width="4"
                    height="26.9687"
                    rx="2"
                    fill="#2F3035"
                  />
                  <rect
                    y="9.90796"
                    width="4"
                    height="17.5883"
                    rx="2"
                    fill="#2F3035"
                  />
                </svg>
              </button>
              <button>
                <Rate style={{ fontSize: "24px", color: "#1C62CD" }} />
              </button>
            </div>
            <div className="tabs-wrapper">
              <div className="tabs">
                {tabsNames.map((tab, index) => {
                  return (
                    <a
                      onClick={(e) => handlerActiveTab(e, index)}
                      className={
                        activeTab === index
                          ? " aside-filter__tab active"
                          : " aside-filter__tab"
                      }
                      key={index}
                      href="/#"
                    >
                      <span>{tab}</span>
                    </a>
                  );
                })}
              </div>
              <div className="tabs-container">
                <div className="tabs-content">
                  <ul className="product-card__list">
                    <li className="product-card__item">
                      <div className="product-card__item-left">
                        Производитель
                      </div>
                      <div className="product-card__item-right">Канада</div>
                    </li>
                    <li className="product-card__item">
                      <div className="product-card__item-left">
                        Количество мест, шт:
                      </div>
                      <div className="product-card__item-right">3</div>
                    </li>
                    <li className="product-card__item">
                      <div className="product-card__item-left">
                        Мощность, л.с.
                      </div>
                      <div className="product-card__item-right">155</div>
                    </li>
                    <li className="product-card__item">
                      <div className="product-card__item-left">
                        Тип двигателя
                      </div>
                      <div className="product-card__item-right">Бензиновый</div>
                    </li>
                    <li className="product-card__item">
                      <div className="product-card__item-left">Год выпуска</div>
                      <div className="product-card__item-right"> 2018</div>
                    </li>
                  </ul>
                  <a className="product-card__more" href="/#">
                    Показать еще
                  </a>
                  <div className="product-card__btn">
                    <button>Купить</button>
                  </div>
                </div>
                <div className="tabs-content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
