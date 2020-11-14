import React, { useState } from "react";
import "./CatalogInner.scss";

//img
import jetSkiOrange from "../../img/jetSki-orange.png";

//

//components
import ProductItem from "../ProductItem/ProductItem";
//

//lib

import { Checkbox, Select, Slider, Button } from "antd";
const { Option } = Select;

//
function CatalogInner({ name }) {
  const [activeTab, setActiveTab] = useState(0);
  const [checked, setChecked] = useState(false);
  const [rangeValue, setRangeValue] = useState({ min: 10000, max: 50000 });
  const [dropItem, setDropItem] = useState(true);

  const [activeBtnGrid, setActiveBtnGrid] = useState(true);

  const catalogItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const tabsNames = ["Параметры", "По марке"];

  const handlerActiveTab = (e, index) => {
    e.preventDefault();
    setActiveTab(index);
  };

  const handleDropItem = () => {
    setDropItem(!dropItem);
  };

  const onChangeRange = (value) => {
    setRangeValue({
      min: value[0],
      max: value[1],
    });
  };

  const handleActiveGrid = () => {
    setActiveBtnGrid(true);
  };

  const handleActiveLine = () => {
    setActiveBtnGrid(false);
  };

  console.log(activeBtnGrid);

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="catalog__title">{name}</h2>
        <div className="catalog__filter">
          <div className="catalog__filter-categories">
            <button>Полноприводные</button>
            <button>от 5000</button>
            <button>BRP</button>
            <button>еще</button>
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
                <div className="aside-tabs__content">
                  <form action="" className="aside-filter__form">
                    <ul className="aside-filter__list">
                      <li className="aside-filter__item-drop">
                        <p
                          onClick={handleDropItem}
                          className={
                            dropItem
                              ? "aside-filter__item-title filter__item-drop"
                              : "aside-filter__item-title filter__item-drop active"
                          }
                        >
                          Наличие
                        </p>
                        <div
                          className={
                            dropItem
                              ? "aside-filter__item-content "
                              : "aside-filter__item-content hide"
                          }
                        >
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">В наличие</label>
                            </Checkbox>
                          </div>
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">Под заказ</label>
                            </Checkbox>
                          </div>
                        </div>
                      </li>
                      <li className="aside-filter__item-drop">
                        <p
                          onClick={handleDropItem}
                          className={
                            dropItem
                              ? "aside-filter__item-title filter__item-drop"
                              : "aside-filter__item-title filter__item-drop active"
                          }
                        >
                          Новинки
                        </p>
                        <div
                          className={
                            dropItem
                              ? "aside-filter__item-content "
                              : "aside-filter__item-content hide"
                          }
                        >
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">Все</label>
                            </Checkbox>
                          </div>
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">Новинки</label>
                            </Checkbox>
                          </div>
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">Акции</label>
                            </Checkbox>
                          </div>
                        </div>
                      </li>
                      <li className="aside-filter__item-drop">
                        <p
                          onClick={handleDropItem}
                          className={
                            dropItem
                              ? "aside-filter__item-title filter__item-drop"
                              : "aside-filter__item-title filter__item-drop active"
                          }
                        >
                          Цена
                        </p>
                        <div
                          className={
                            dropItem
                              ? "aside-filter__item-content "
                              : "aside-filter__item-content hide"
                          }
                        >
                          <Slider
                            range
                            defaultValue={[rangeValue.min, rangeValue.max]}
                            min={0}
                            max={100000}
                            onChange={onChangeRange}
                            railStyle={{
                              backgroundColor: "#E0E0E0",
                              height: "1px",
                            }}
                          />
                        </div>
                        <div className="aside-filter__item-info">
                          <div className="aside-filter__item-info__text">
                            от <span>{rangeValue.min}</span>
                          </div>
                          <div className="aside-filter__item-info__text">
                            до <span>{rangeValue.max}</span>
                          </div>
                        </div>
                      </li>
                      <li className="aside-filter__item-list">
                        <div className="filter__item-list">
                          <p className="filter__item-list__title">
                            Мощность, л.с.
                          </p>
                          <Select
                            className="filter__item-list__select"
                            defaultValue="90"
                            style={{ width: 68 }}
                            bordered={false}
                          >
                            <Option
                              className="filter__item-list__select-item"
                              value="90"
                            >
                              90
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="130"
                            >
                              130
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="154"
                            >
                              154
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="230"
                            >
                              230
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="300"
                            >
                              300
                            </Option>
                          </Select>
                        </div>
                      </li>
                      <li className="aside-filter__item-list">
                        <div className="filter__item-list">
                          <p className="filter__item-list__title">
                            Мощность двигателя, л.с.
                          </p>
                          <Select
                            className="filter__item-list__select"
                            defaultValue="90"
                            style={{ width: 68 }}
                            bordered={false}
                          >
                            <Option
                              className="filter__item-list__select-item"
                              value="90"
                            >
                              90
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="130"
                            >
                              130
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="154"
                            >
                              154
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="230"
                            >
                              230
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="300"
                            >
                              300
                            </Option>
                          </Select>
                        </div>
                      </li>

                      <li className="aside-filter__item-list">
                        <div className="filter__item-list">
                          <p className="filter__item-list__title">
                            Макс. скорость
                          </p>
                          <Select
                            className="filter__item-list__select"
                            defaultValue="90"
                            style={{ width: 68 }}
                            bordered={false}
                          >
                            <Option
                              className="filter__item-list__select-item"
                              value="90"
                            >
                              90
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="130"
                            >
                              130
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="154"
                            >
                              154
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="230"
                            >
                              230
                            </Option>
                            <Option
                              className="filter__item-list__select-item"
                              value="300"
                            >
                              300
                            </Option>
                          </Select>
                        </div>
                      </li>

                      <li className="aside-filter__item-drop">
                        <p
                          onClick={handleDropItem}
                          className={
                            dropItem
                              ? "aside-filter__item-title filter__item-drop"
                              : "aside-filter__item-title filter__item-drop active"
                          }
                        >
                          Бренд
                        </p>
                        <div
                          className={
                            dropItem
                              ? "aside-filter__item-content aside-filter__item-wrap "
                              : "aside-filter__item-content hide"
                          }
                        >
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">BRP</label>
                            </Checkbox>
                          </div>
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">Spark 2</label>
                            </Checkbox>
                          </div>
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">Spark 3 </label>
                            </Checkbox>
                          </div>
                        </div>
                        <button className="filter-more">Показать еще</button>
                      </li>

                      <li className="aside-filter__item-drop">
                        <p
                          onClick={handleDropItem}
                          className={
                            dropItem
                              ? "aside-filter__item-title filter__item-drop"
                              : "aside-filter__item-title filter__item-drop active"
                          }
                        >
                          Модель
                        </p>
                        <div
                          className={
                            dropItem
                              ? "aside-filter__item-content aside-filter__item-wrap "
                              : "aside-filter__item-content hide"
                          }
                        >
                          <input
                            className="filter-search"
                            type="text"
                            placeholder="Введите модель"
                          />
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">Sea-doo Spark 2</label>
                            </Checkbox>
                          </div>
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">SeaDoo Spark 90 </label>
                            </Checkbox>
                          </div>
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">SeaDoo GTI 155 </label>
                            </Checkbox>
                          </div>
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">SeaDoo GTR 230 </label>
                            </Checkbox>
                          </div>
                        </div>
                        <button className="filter-more">Показать еще</button>
                      </li>

                      <li className="aside-filter__item-drop btn-checked">
                        <p
                          onClick={handleDropItem}
                          className={
                            dropItem
                              ? "aside-filter__item-title filter__item-drop"
                              : "aside-filter__item-title filter__item-drop active"
                          }
                        >
                          Акции
                        </p>
                        <div
                          className={
                            dropItem
                              ? "aside-filter__item-content  "
                              : "aside-filter__item-content hide"
                          }
                        >
                          <div className="aside-filter__content-box">
                            <button className="btn-checked__text active">
                              SALE
                            </button>
                          </div>
                          <div className="aside-filter__content-box">
                            <button className="btn-checked__text">NEW</button>
                          </div>
                          <div className="aside-filter__content-box">
                            <button className="btn-checked__text">HIT</button>
                          </div>
                          <div className="aside-filter__content-box">
                            <button className="btn-checked__text">Дилер</button>
                          </div>
                        </div>
                        <button className="filter-more">Показать еще</button>
                      </li>

                      <li className="aside-filter__item-drop">
                        <p
                          onClick={handleDropItem}
                          className={
                            dropItem
                              ? "aside-filter__item-title filter__item-drop"
                              : "aside-filter__item-title filter__item-drop active"
                          }
                        >
                          Страны
                        </p>
                        <div
                          className={
                            dropItem
                              ? "aside-filter__item-content aside-filter__item-wrap "
                              : "aside-filter__item-content hide"
                          }
                        >
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">Россия</label>
                            </Checkbox>
                          </div>
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">Германия</label>
                            </Checkbox>
                          </div>
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">Китай </label>
                            </Checkbox>
                          </div>
                          <div className="aside-filter__content-box">
                            <Checkbox style={{ cursor: "pointer" }}>
                              <label htmlFor="">США</label>
                            </Checkbox>
                          </div>
                        </div>
                        <button className="filter-more">Показать еще</button>
                      </li>

                      <li className="aside-filter__item-drop aside-filter__item-btn ">
                        <button className="filter-btn__send" type="submit">
                          Выбрать
                        </button>
                        <p className="filter__extra-content">
                          Дополнительные параметры
                        </p>
                        <button className="filter-btn__reset" type="submit">
                          Сбросить фильтр
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
                >
                  <ProductItem
                    img={jetSkiOrange}
                    className="product-item product-item__size"
                    name="Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango"
                    price="1 049 500 ₽"
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

export default CatalogInner;
