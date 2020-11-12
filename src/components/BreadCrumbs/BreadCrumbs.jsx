import React from "react";
import "./BreadCrumbs.scss";
//lib
import { Link } from "react-router-dom";
function BreadCrumbs({ name }) {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__list-item">
            <Link className="breadcrumbs__list-link" to={`/`}>
              Главная
            </Link>
          </li>
          <li className="breadcrumbs__list-item">
            <Link className="breadcrumbs__list-link" to={`/catalog/${name}`}>
              {name}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BreadCrumbs;
