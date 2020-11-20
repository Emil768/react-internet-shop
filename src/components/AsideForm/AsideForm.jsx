import React, { useState } from "react";

import "./AsideForm.scss";
//lib
import { Checkbox, Select, Slider } from "antd";
const { Option } = Select;
//
function AsideForm() {
  const [rangeValue, setRangeValue] = useState({ min: 10000, max: 50000 });
  const [dropItem, setDropItem] = useState(true);

  const handleDropItem = () => {
    setDropItem(!dropItem);
  };

  const onChangeRange = (value) => {
    setRangeValue({
      min: value[0],
      max: value[1],
    });
  };

  return (
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
                <Checkbox style={{ cursor: "pointer" }}>В наличие</Checkbox>
              </div>
              <div className="aside-filter__content-box">
                <Checkbox style={{ cursor: "pointer" }}>Под заказ</Checkbox>
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
                <Checkbox style={{ cursor: "pointer" }}>Все</Checkbox>
              </div>
              <div className="aside-filter__content-box">
                <Checkbox style={{ cursor: "pointer" }}>Новинки</Checkbox>
              </div>
              <div className="aside-filter__content-box">
                <Checkbox style={{ cursor: "pointer" }}>Акции</Checkbox>
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
              <p className="filter__item-list__title">Мощность, л.с.</p>
              <Select
                className="filter__item-list__select"
                defaultValue="90"
                style={{ width: 68 }}
                bordered={false}
              >
                <Option className="filter__item-list__select-item" value="90">
                  90
                </Option>
                <Option className="filter__item-list__select-item" value="130">
                  130
                </Option>
                <Option className="filter__item-list__select-item" value="154">
                  154
                </Option>
                <Option className="filter__item-list__select-item" value="230">
                  230
                </Option>
                <Option className="filter__item-list__select-item" value="300">
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
                <Option className="filter__item-list__select-item" value="90">
                  90
                </Option>
                <Option className="filter__item-list__select-item" value="130">
                  130
                </Option>
                <Option className="filter__item-list__select-item" value="154">
                  154
                </Option>
                <Option className="filter__item-list__select-item" value="230">
                  230
                </Option>
                <Option className="filter__item-list__select-item" value="300">
                  300
                </Option>
              </Select>
            </div>
          </li>

          <li className="aside-filter__item-list">
            <div className="filter__item-list">
              <p className="filter__item-list__title">Макс. скорость</p>
              <Select
                className="filter__item-list__select"
                defaultValue="90"
                style={{ width: 68 }}
                bordered={false}
              >
                <Option className="filter__item-list__select-item" value="90">
                  90
                </Option>
                <Option className="filter__item-list__select-item" value="130">
                  130
                </Option>
                <Option className="filter__item-list__select-item" value="154">
                  154
                </Option>
                <Option className="filter__item-list__select-item" value="230">
                  230
                </Option>
                <Option className="filter__item-list__select-item" value="300">
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
                <Checkbox style={{ cursor: "pointer" }}>BRP</Checkbox>
              </div>
              <div className="aside-filter__content-box">
                <Checkbox style={{ cursor: "pointer" }}>Spark 2</Checkbox>
              </div>
              <div className="aside-filter__content-box">
                <Checkbox style={{ cursor: "pointer" }}>Spark 3</Checkbox>
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
                  Sea-doo Spark 2
                </Checkbox>
              </div>
              <div className="aside-filter__content-box">
                <Checkbox style={{ cursor: "pointer" }}>
                  SeaDoo Spark 90
                </Checkbox>
              </div>
              <div className="aside-filter__content-box">
                <Checkbox style={{ cursor: "pointer" }}>
                  SeaDoo GTI 155
                </Checkbox>
              </div>
              <div className="aside-filter__content-box">
                <Checkbox style={{ cursor: "pointer" }}>
                  SeaDoo GTR 230
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
                <button className="btn-checked__text active">SALE</button>
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
                <Checkbox style={{ cursor: "pointer" }}>Россия</Checkbox>
              </div>
              <div className="aside-filter__content-box">
                <Checkbox style={{ cursor: "pointer" }}>Германия</Checkbox>
              </div>
              <div className="aside-filter__content-box">
                <Checkbox style={{ cursor: "pointer" }}>Китай</Checkbox>
              </div>
              <div className="aside-filter__content-box">
                <Checkbox style={{ cursor: "pointer" }}>Китай</Checkbox>
              </div>
            </div>
            <button className="filter-more">Показать еще</button>
          </li>

          <li className="aside-filter__item-drop aside-filter__item-btn ">
            <button className="filter-btn__send" type="submit">
              Выбрать
            </button>
            <p className="filter__extra-content">Дополнительные параметры</p>
            <button className="filter-btn__reset" type="submit">
              Сбросить фильтр
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default AsideForm;
