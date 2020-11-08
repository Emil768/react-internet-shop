import React from "react";

//slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//

import "./Banner.scss";

//img
import sliderImg from "../../img/banner.jpg";
import saleItemImg from "../../img/banner-img.png";
// import newImg from "../../img/d03508c231e6b094e70ea8cba6d34be0.jpg"
//
//components
import Slider from "react-slick";
import ArrowPrev from "../ArowsSlider/ArrowPrev";
import ArrowNext from "../ArowsSlider/ArrowNext";
//

function Banner() {
  const sliderItems = [
    sliderImg,
    sliderImg,
    sliderImg,
    sliderImg,
    sliderImg,
    sliderImg,
  ];

  const settings = {
    dots: true,
    prevArrow: (
      <ArrowPrev
        color="white"
        classArrow="banner-section__slider-btn banner-section__slider-btnPrev"
      />
    ),
    nextArrow: (
      <ArrowNext
        color="white"
        classArrow="banner-section__slider-btn banner-section__slider-btnNext"
      />
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="banner-section page-section">
      <div className="container">
        <div className="banner-section__content">
          <div className="banner-section__slider">
            <Slider {...settings}>
              {sliderItems.map((item, index) => {
                return (
                  <div key={index} className="banner-section__slider-item">
                    <img
                      className="banner-section__slider-img"
                      key={index}
                      src={item}
                      alt="slider-item"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          <a className="banner-section__item sale-item" href="/#">
            <div className="sale-item__top">
              <div className="sale-item__info">акция</div>
              <div className="sale-item__price">
                <div className="sale-item__price-new">190 000</div>
                <div className="sale-item__price-old">225 000</div>
              </div>
            </div>
            <img className="sale-item__img" src={saleItemImg} alt="sale-img" />
            <h5 className="sale-item__title">Лодочный мотор Suzuki DF9.9BRS</h5>
            <div className="sale-item__footer">
              Акция действует до <span>31.08.2020</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
