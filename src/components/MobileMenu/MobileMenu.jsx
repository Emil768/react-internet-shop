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

function MobileMenu({ state }) {
  return (
    <ul className={state ? "menu-mobile active" : "menu-mobile"}>
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
      <li className="menu-mobile__item">
        <a href="/#" className="menu-mobile__link">
          Квадроциклы
        </a>
      </li>
      <li className="menu-mobile__item">
        <a href="/#" className="menu-mobile__link">
          Катера
        </a>
      </li>
      <li className="menu-mobile__item">
        <a href="/#" className="menu-mobile__link">
          Гидроциклы
        </a>
      </li>
      <li className="menu-mobile__item">
        <a href="/#" className="menu-mobile__link">
          Лодки
        </a>
      </li>
      <li className="menu-mobile__item">
        <a href="/#" className="menu-mobile__link">
          Вездеходы
        </a>
      </li>
      <li className="menu-mobile__item">
        <a href="/#" className="menu-mobile__link">
          Снегоходы
        </a>
      </li>
      <li className="menu-mobile__item">
        <a href="/#" className="menu-mobile__link">
          Двигатели
        </a>
      </li>
      <li className="menu-mobile__item">
        <a href="/#" className="menu-mobile__link">
          Запчасти
        </a>
      </li>
    </ul>
  );
}

export default MobileMenu;
