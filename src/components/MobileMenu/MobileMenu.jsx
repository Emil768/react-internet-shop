import React from "react";
import "./MobileMenu.scss";

//img
import user from "../../img/user.svg";
import shop from "../../img/shop.svg";
import heart from "../../img/heart.svg";
import magazine from "../../img/magazine.svg";
import delivery from "../../img/delivery.svg";
import sale from "../../img/sale.svg";
//

//lib
import { Link } from "react-router-dom";

//

function MobileMenu({ state, setState }) {
  const menuItems = [
    "Квадроциклы",
    "Катера",
    "Гидроциклы",
    "Лодки",
    "Вездеходы",
    "Снегоходы",
    "Двигатели",
    "Запчасти",
  ];

  const closeMobileMenu = () => {
    setState(!state);
  };

  return (
    <div
      className={
        state ? "menu-mobile__wrapper active" : "menu-mobile__wrapper "
      }
    >
      <div className="menu-mobile__overside" onClick={closeMobileMenu}></div>
      <ul className="menu-mobile menu-mobile__list">
        <button
          className={state ? "menu__btn change" : "menu__btn "}
          onClick={closeMobileMenu}
        >
          <div className="menu__btn-line"></div>
          <div className="menu__btn-line"></div>
          <div className="menu__btn-line"></div>
        </button>
        <li className="menu-mobile__item">
          <a href="/#" className="menu-mobile__link">
            <img className="menu-mobile__img" src={user} alt="" />
            <p>Войти</p>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a href="/#" className="menu-mobile__link">
            <img className="menu-mobile__img" src={user} alt="" />
            <p>Регистрация</p>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a href="/#" className="menu-mobile__link">
            <img className="menu-mobile__img" src={heart} alt="" />
            <p>Избранное</p>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a href="/#" className="menu-mobile__link">
            <img className="menu-mobile__img" src={shop} alt="" />
            <p> Корзина</p>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a href="/#" className="menu-mobile__link">
            <img className="menu-mobile__img" src={magazine} alt="" />
            <p> Магазины</p>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a href="/#" className="menu-mobile__link">
            <img className="menu-mobile__img" src={sale} alt="" />
            <p>Акции</p>
          </a>
        </li>
        <li className="menu-mobile__item">
          <a href="/#" className="menu-mobile__link">
            <img className="menu-mobile__img" src={delivery} alt="" />
            <p>Доставка и оплата</p>
          </a>
        </li>
        {menuItems.map((item, index) => {
          return (
            <li key={index} className="menu-mobile__item ">
              <Link className="menu-mobile__link" to={`/catalog/${item}`}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MobileMenu;
