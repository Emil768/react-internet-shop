import React, { useState } from "react";
import "./ProductCardTabs.scss";
//lib
import { Checkbox } from "antd";
import { useEffect } from "react";
//
function ProductCardTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const cardTabs = [
    "О товаре",
    "Характеристики",
    "Отзывы",
    "Самовывоз",
    " Доставка",
    "Cервис",
    "Гарантия",
  ];
  const handlerActiveTab = (e, index) => {
    e.preventDefault();
    setActiveTab(index);
  };
  return (
    <section className="card__tabs">
      <div className="container">
        <div className="tabs-wrapper">
          <div className="tabs card__tabs-box">
            {cardTabs.map((tab, index) => {
              return (
                <a
                  key={index}
                  className={
                    activeTab === index
                      ? "tab card__tab active"
                      : "tab card__tab"
                  }
                  href="/#"
                  onClick={(e) => handlerActiveTab(e, index)}
                >
                  {tab}
                </a>
              );
            })}
          </div>
          <div className="tabs-container">
            <div className="card__tab-content tabs-content"></div>
            <div className="card__tab-content tabs-content"></div>
            <div className="card__tab-content tabs-content"></div>
            <div className="card__tab-content tabs-content">
              <form action="" className="card-form">
                <div className="card__top-line">
                  <label className="card__label-search" htmlFor="">
                    Магазин
                  </label>
                  <input className="card__input-search" type="text" />
                  <Checkbox className="card__label-pickup">
                    Забрать сегодня
                  </Checkbox>
                  <Checkbox className="card__label-pickup">
                    Забрать в течение недели
                  </Checkbox>
                </div>
                <ul className="card__list">
                  <li className="card__list-item card__list-itemtitle">
                    <div className="card__list-adress ">Адрес</div>
                    <div className="card__list-workhours ">Режим работы</div>
                    <div className="card__list-avaliable ">Доступно</div>
                    <div className="card__list-num ">Количество</div>
                  </li>
                  <li className="card__list-item">
                    <div className="card__list-adress">
                      Москва, ул. Науки 25
                    </div>
                    <div className="card__list-workhours">
                      <div className="workhours">
                        <span>пн-сб:</span>
                        <span>08:00-19:00</span>
                      </div>
                      <div className="workhours">
                        <span>вс:</span>
                        <span>09:00-17:00</span>
                      </div>
                    </div>
                    <div className="card__list-avaliable">В наличии</div>
                    <div className="card__list-num">1</div>
                    <div className="card__list-btn">
                      <button type="submit">Купить</button>
                    </div>
                  </li>

                  <li className="card__list-item">
                    <div className="card__list-adress">
                      Москва, ул. Науки 25
                    </div>
                    <div className="card__list-workhours">
                      <div className="workhours">
                        <span>пн-сб:</span>
                        <span>08:00-19:00</span>
                      </div>
                      <div className="workhours">
                        <span>вс:</span>
                        <span>09:00-17:00</span>
                      </div>
                    </div>
                    <div className="card__list-avaliable">В наличии</div>
                    <div className="card__list-num">1</div>
                    <div className="card__list-btn">
                      <button type="submit">Купить</button>
                    </div>
                  </li>

                  <li className="card__list-item">
                    <div className="card__list-adress">
                      Москва, ул. Науки 25
                    </div>
                    <div className="card__list-workhours">
                      <div className="workhours">
                        <span>пн-сб:</span>
                        <span>08:00-19:00</span>
                      </div>
                      <div className="workhours">
                        <span>вс:</span>
                        <span>09:00-17:00</span>
                      </div>
                    </div>
                    <div className="card__list-avaliable">В наличии</div>
                    <div className="card__list-num">1</div>
                    <div className="card__list-btn">
                      <button type="submit">Купить</button>
                    </div>
                  </li>

                  <li className="card__list-item">
                    <div className="card__list-adress">
                      Москва, ул. Науки 25
                    </div>
                    <div className="card__list-workhours">
                      <div className="workhours">
                        <span>пн-сб:</span>
                        <span>08:00-19:00</span>
                      </div>
                      <div className="workhours">
                        <span>вс:</span>
                        <span>09:00-17:00</span>
                      </div>
                    </div>
                    <div className="card__list-avaliable">В наличии</div>
                    <div className="card__list-num">1</div>
                    <div className="card__list-btn">
                      <button type="submit">Купить</button>
                    </div>
                  </li>
                </ul>
              </form>
            </div>
            <div className="card__tab-content tabs-content"></div>
            <div className="card__tab-content tabs-content"></div>
            <div className="card__tab-content tabs-content"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCardTabs;
