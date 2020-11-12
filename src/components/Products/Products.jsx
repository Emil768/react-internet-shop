import React, { useState } from "react";
import "../../components/Products/Products.scss";

//img
import productImg from "../../img/product-1.png";
import productImg2 from "../../img/product-2.png";
import productImg3 from "../../img/product-3.png";
import productImg4 from "../../img/product-4.png";

//

//slider
import Slider from "react-slick";
import ArrowPrev from "../ArowsSlider/ArrowPrev";
import ArrowNext from "../ArowsSlider/ArrowNext";
import ProductItem from "../ProductItem/ProductItem.jsx";
//

function Products({ title, hideButton }) {
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
      className: "product-item",
    },
    {
      img: productImg2,
      name: "Спасательный жилет BRP Men's Airflow PFD",
      price: "6 900 ₽",
      className: "product-item",
    },
    {
      img: productImg3,
      name: "BRP Audio-Premium System",
      price: "68 000 ₽",
      className: "product-item",
    },
    {
      img: productImg4,
      name: "Спасательное снаряжение",
      className: "product-item product-item__not-avaliable",
    },
    {
      img: productImg4,
      name: "Спасательное снаряжение",
      className: "product-item product-item__not-avaliable",
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

  const handlerActiveTab = (e, index) => {
    e.preventDefault();
    setActiveTab(index);
  };

  return (
    <section className="products page-section">
      <div className="container">
        <div className="products__inner">
          <h1 className="product__title">{title}</h1>
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
                          return <ProductItem key={index} {...item} />;
                        })}
                      </Slider>
                    </div>
                    {/* end */}
                  </div>
                );
              })}
            </div>
          </div>
          {hideButton ? (
            <div className="product__more">
              <a className="product__more-link" href="/#">
                Показать еще
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Products;
