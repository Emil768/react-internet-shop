import React, { useState } from "react";
import { Link } from "react-router-dom";
function HeaderBottom() {
  const [activeItem, setActiveItem] = useState(null);
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

  const handlerActiveItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="header__bottom">
      <div className="container">
        <div className="header__bottom-content">
          <ul className="menu-categories">
            {menuItems.map((item, index) => {
              return (
                <li
                  onClick={() => handlerActiveItem(index)}
                  key={index}
                  className="menu-categories__item "
                >
                  <Link
                    className={
                      activeItem === index
                        ? "menu-categories__link active"
                        : "menu-categories__link"
                    }
                    to={`/catalog/${item}`}
                  >
                    {item}
                  </Link>
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
