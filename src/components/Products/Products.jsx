import React, { useState } from "react";
import "../../components/Products/Products.scss";

//img
import productImg from "../../img/product-1.png";
import productImg2 from "../../img/product-2.png";
import productImg3 from "../../img/product-3.png";
import productImg4 from "../../img/product-4.png";
import basketImg from "../../img/product-basket.svg";
//

//slider
import Slider from "react-slick";
import ArrowPrev from "../ArowsSlider/ArrowPrev";
import ArrowNext from "../ArowsSlider/ArrowNext";
//

function Products() {
  const [activeFavorite, setActiveFavorite] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  // const [activeProduct, setActiveProduct] = useState(0);

  const tabsNames = [
    "запчасти",
    "моторы",
    "шины ",
    "электроника",
    "инструменты",
    "аксессуары ",
  ];

  const productItems = [
    {
      img: productImg,
      name: "Водонепроницаемый Рюкзак",
      price: "9 800 ₽",
      class: "product-item",
    },
    {
      img: productImg2,
      name: "Спасательный жилет BRP Men's Airflow PFD",
      price: "6 900 ₽",
      class: "product-item",
    },
    {
      img: productImg3,
      name: "BRP Audio-Premium System",
      price: "68 000 ₽",
      class: "product-item",
    },
    {
      img: productImg4,
      name: "Спасательное снаряжение",
      class: "product-item product-item__not-avaliable",
    },
    {
      img: productImg4,
      name: "Спасательное снаряжение",
      class: "product-item product-item__not-avaliable",
    },
  ];

  const settings = {
    prevArrow: (
      <ArrowPrev
        color="black"
        classArrow
        classArrow="product-slider__slider-btn product-slider__slider-btnPrev"
      />
    ),
    nextArrow: (
      <ArrowNext
        color="black"
        classArrow="product-slider__slider-btn product-slider__slider-btnNext"
      />
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const handlerActiveFavorite = (e, index) => {
    e.preventDefault();
    setActiveFavorite(index);
  };

  const handlerActiveTab = (e, index) => {
    e.preventDefault();
    setActiveTab(index);
  };

  return (
    <section className="products page-section">
      <div className="container">
        <div className="products__inner">
          <h1 className="product__title">Популярные товары</h1>
          <div className="tabs-wrapper">
            <div className="products__tabs">
              {tabsNames.map((tab, index) => {
                return (
                  <a
                    onClick={(e) => handlerActiveTab(e, index)}
                    className={
                      activeTab === index
                        ? "products__tab active"
                        : "products__tab"
                    }
                    key={index}
                    href="/#"
                  >
                    {tab}
                  </a>
                );
              })}
            </div>
            <div className="tabs-container products__container">
              {tabsNames.map((item, index) => {
                return (
                  <div
                    className={
                      activeTab === index
                        ? "tabs-content products__content tabs-content--active"
                        : "tabs-content products__content"
                    }
                    key={index}
                  >
                    <div className="product-slider">
                      {/* slider__item */}
                      <Slider {...settings}>
                        {productItems.map((item, index) => {
                          return (
                            <div className="product-slider__item" key={index}>
                              <div className={item.class}>
                                <p className="product-item__hover-text">
                                  посмотреть товар
                                </p>
                                <button
                                  onClick={(e) =>
                                    handlerActiveFavorite(e, index)
                                  }
                                  className={
                                    activeFavorite === index
                                      ? "product-item__favorite active"
                                      : "product-item__favorite"
                                  }
                                ></button>
                                <a href="/#"></a>
                                <img
                                  className="product-item__img"
                                  src={item.img}
                                  alt=""
                                />
                                <h3 className="product-item__title">
                                  {item.name}
                                </h3>
                                <p className="product-item__price">
                                  {item.price}
                                </p>
                                <p className="product-item__notify-text">
                                  нет в наличии
                                </p>
                                <button className="product-item__basket">
                                  <img src={basketImg} alt="" />
                                </button>
                                <a
                                  className="product-item__notify-link"
                                  href="/#"
                                >
                                  Сообщить о поступлении
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                    {/* end */}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product__more">
            <a className="product__more-link" href="/#">
              Показать еще
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
