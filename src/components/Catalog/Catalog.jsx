import React, { useState } from "react";
import "./Catalog.scss";

//img
import jetSkiOrange from "../../img/jetSki-orange.png";

//

//components
import ProductItem from "../ProductItem/ProductItem";
//

//lib

import { Select } from "antd";

//

//components
import AsideForm from "../AsideForm/AsideForm";
//

function Catalog({ name }) {
  const { Option } = Select;
  const [activeTab, setActiveTab] = useState(0);
  const [activeBtnGrid, setActiveBtnGrid] = useState(true);
  const [activeFilter, setActiveFilter] = useState(true);

  const catalogItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const tabsNames = ["Параметры", "По марке"];

  const handlerActiveTab = (e, index) => {
    e.preventDefault();
    setActiveTab(index);
  };

  const handleActiveGrid = () => {
    setActiveBtnGrid(true);
  };

  const handleActiveLine = () => {
    setActiveBtnGrid(false);
  };

  const handlerActiveFilter = () => {
    setActiveFilter(!activeFilter);
  };

  console.log(activeBtnGrid);

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="catalog__title">{name}</h2>
        <div className="catalog__filter">
          <div className="catalog__filter-categories">
            <div className="mobile-overflow">
              <button>Полноприводные</button>
              <button>от 5000</button>
              <button>BRP</button>
              <button>еще</button>
            </div>
          </div>
          <div className="catalog__filter-sort">
            <Select
              defaultValue="popular"
              style={{ width: 178 }}
              className="catalog__filter-select"
            >
              <Option value="jack">Jack</Option>
              <Option value="popular">По популярности</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <button
              onClick={handleActiveGrid}
              className={
                activeBtnGrid
                  ? "catalog__filter-btngrid active"
                  : "catalog__filter-btngrid"
              }
            >
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <rect
                    x="1"
                    y="1"
                    width="21"
                    height="19"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                  <rect
                    x="7"
                    y="6"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                  <rect
                    x="7"
                    y="13"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                  <rect
                    x="14"
                    y="6"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                  <rect
                    x="14"
                    y="13"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </button>
            <button
              onClick={handleActiveLine}
              className={
                activeBtnGrid
                  ? "catalog__filter-btnline"
                  : "catalog__filter-btnline active"
              }
            >
              <svg
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <rect x="6" width="19" height="3" rx="1.5" fill="#2F3035" />
                  <rect
                    x="6"
                    y="8"
                    width="19"
                    height="3"
                    rx="1.5"
                    fill="#2F3035"
                  />
                  <rect
                    x="6"
                    y="16"
                    width="19"
                    height="3"
                    rx="1.5"
                    fill="#2F3035"
                  />
                  <rect width="3" height="3" rx="1.5" fill="#2F3035" />
                  <rect y="8" width="3" height="3" rx="1.5" fill="#2F3035" />
                  <rect y="16" width="3" height="3" rx="1.5" fill="#2F3035" />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="catalog__content">
          <div className="aside__btn" onClick={handlerActiveFilter}>
            Фильтр
          </div>
          {activeFilter && (
            <div className="catalog__content-aside aside-filter">
              <div className="aside-tabs__wrapper">
                <div className="aside-filter__tabs">
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
                <div className="aside-tabs__container">
                  <AsideForm />
                </div>
              </div>
            </div>
          )}
          {/* list */}
          <div className="catalog__content-list">
            {catalogItems.map((item, index) => {
              return (
                <div
                  className={
                    activeBtnGrid
                      ? "product__item-wrapper"
                      : "product__item-wrapper--list"
                  }
                  key={index}
                >
                  <ProductItem
                    url={name}
                    img={jetSkiOrange}
                    className="product-item product-item__size"
                    name="Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango"
                    price="1 049 500 ₽"
                    index={index}
                  />
                </div>
              );
            })}
            <div className="pagination">
              <ul className="pagination-list">
                <li className="pagination-list__item active">
                  <a href="/#">1</a>
                </li>
                <li className="pagination-list__item ">
                  <a href="/#">2</a>
                </li>
                <li className="pagination-list__item">
                  <a href="/#">3</a>
                </li>
                <li className="pagination-list__item ">
                  <a href="/#">4</a>
                </li>
                <li className="pagination-list__item">
                  <a href="/#">5</a>
                </li>
                <li className="pagination-list__item">
                  <a href="/#">...</a>
                </li>
                <li className="pagination-list__item">
                  <a href="/#">11</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
