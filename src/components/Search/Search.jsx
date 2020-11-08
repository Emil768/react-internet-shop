import React, { useState } from "react";
import "../../components/Search/Search.scss";
function Search() {
  const tabs = [
    "Поиск по  номеру",
    "Поиск по марке",
    "Поиск по названию товара",
  ];
  const formNames = [
    "Введите номер",
    "Введите марку",
    "Введите название товара",
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [activeForm, setActiveForm] = useState(0);

  const handlerActiveItem = (e, index) => {
    e.preventDefault();
    setActiveTab(index);
    setActiveForm(index);
  };

  return (
    <section className="search page-section">
      <div className="container">
        <div className="search__inner">
          <div className="search__tabs">
            {tabs.map((tab, index) => {
              return (
                <a
                  onClick={(e) => handlerActiveItem(e, index)}
                  className={
                    activeTab === index
                      ? "search__tabs-item active"
                      : "search__tabs-item "
                  }
                  href="/#"
                  key={index}
                >
                  {tab}
                </a>
              );
            })}
          </div>
          <div className="search__content">
            {formNames.map((item, index) => {
              return (
                <div
                  className={
                    activeForm === index
                      ? "search__content-item active"
                      : "search__content-item"
                  }
                  key={index}
                >
                  <form className="search__content-form">
                    <input
                      className="search__content-input"
                      type="text"
                      placeholder={item}
                    />
                    <button className="search__content-btn" type="submit">
                      Искать
                    </button>
                  </form>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
