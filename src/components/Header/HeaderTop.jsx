import React from "react";

//img
import logo from "../../img/logo.svg";
import user from "../../img/user.svg";
import shop from "../../img/shop.svg";
import heart from "../../img/heart.svg";
//
function HeaderTop() {
  let items = ["Магазины", "Акции", "Доставка и оплата"];
  return (
    <div className="header__top">
      <div className="container">
        <div className="header__top-content">
          <nav className="menu">
            <ul className="menu__list">
              {items.map((item, index) => {
                return (
                  <li key={index} className="menu__item">
                    <a className="menu__link" href="/#">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <a className="logo" href="/#">
            <img src={logo} alt="logo" />
          </a>
          <div className="header__box">
            <div className="header__adress">
              <p>Москва, ул. Науки 25</p>
            </div>
            <ul className="user-list">
              <li className="user-list__item">
                <a href="/#" className="user-list__link">
                  <img src={heart} alt="heart" />
                </a>
              </li>
              <li className="user-list__item">
                <a href="/#" className="user-list__link">
                  <img src={user} alt="user" />
                </a>
              </li>
              <li className="user-list__item basket">
                <a href="/#" className="user-list__link">
                  <img src={shop} alt="shop" />
                  <p className="basket__num">1</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
