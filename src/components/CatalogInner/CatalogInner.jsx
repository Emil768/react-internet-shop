import React from "react";
import "./CatalogInner.scss";

//img
import jetSkiOrange from "../../img/jetSki-orange.png";
import basketImg from "../../img/product-basket.svg";
//

//components
import ProductItem from "../ProductItem/ProductItem";
//
function CatalogInner({ name }) {
  const catalogItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
            <select name="" id="">
              <option value="">Популярные</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <button className="catalog__filter-btngrid">
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              </svg>
            </button>
            <button className="catalog__filter-btnline">
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
          <div className="catalog__content-aside">
            <h1>Aside</h1>
          </div>
          <div className="catalog__content-list">
            {catalogItems.map((item, index) => {
              return (
                <ProductItem
                  img={jetSkiOrange}
                  className="product-item product-item__size"
                  name="Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango"
                  price="1 049 500 ₽"
                />
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
