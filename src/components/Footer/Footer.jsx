import React from "react";
import "./Footer.scss";
import instagramImg from "../../img/instagram.svg";
import vkImg from "../../img/VK.svg";
import facebookImg from "../../img/facebook.svg";
import youtubeImg from "../../img/youtube.svg";
function Footer() {
  const footerList = {
    info: ["О компании", " Контакты", " Акции", "Магазины"],
    shop: ["Доставка и самовывоз", "Оплата", "Возврат-обмен", "Новости"],
    social: [instagramImg, vkImg, facebookImg, youtubeImg],
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top-content">
            <div className="footer__top-item footer__top-newslatter">
              <h5 className="footer__top-title">
                Подпишитесь на нашу рассылку и узнавайте о акция быстрее
              </h5>
              <form action="" className="footer__form">
                <input
                  className="footer__form-input"
                  type="text"
                  placeholder="Введите ваш e-mail:"
                />
                <button className="footer__form-button">Отправить</button>
              </form>
            </div>
            <div className="footer__top-item">
              <h5 className="footer__top-title">Информация</h5>
              <ul className="footer-list">
                {footerList.info.map((item, index) => {
                  return (
                    <li className="footer-list__item" key={index}>
                      <a href="" className="footer-list__link">
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="footer__top-item">
              <h5 className="footer__top-title"> Интернет-магазин</h5>
              <ul className="footer-list">
                {footerList.shop.map((item, index) => {
                  return (
                    <li className="footer-list__item" key={index}>
                      <a href="" className="footer-list__link">
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="footer__top-item">
              <ul className="social-list">
                {footerList.social.map((img, index) => {
                  return (
                    <li className="social-list__item" key={index}>
                      <a href="" className="social-list__link">
                        <img src={img} alt="social-link" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <a className="footer__bottom-link" href="/#">
            Договор оферты
          </a>
          <a className="footer__bottom-link" href="/#">
            Политика обработки персональных данных
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
