import React from "react";

function HeaderBottom() {
  let menuItems = [
    "Квадроциклы",
    "Катера",
    "Гидроциклы",
    "Лодки",
    "Вездеходы",
    "Снегоходы",
    "Двигатели",
    "Запчасти",
  ];
  return (
    <div className="header__bottom">
      <div className="container">
        <div className="header__bottom-content">
          <ul className="menu-categories">
            {menuItems.map((item, index) => {
              return (
                <li key={index} className="menu-categories__item">
                  <a className="menu-categories__link" href="/#">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
