import React, { useState } from 'react'
import "../../components/Products/Products.scss";


//img
import productImg from "../../img/product-1.png";
import basketImg from "../../img/product-basket.svg";
//

function Products() {
    let tabsNames = ["запчасти","моторы","шины ","электроника","инструменты","аксессуары "];
    let [activeFavorite,setActiveFavorite] = useState(false);

    let handlerActiveFavorite = (e) =>{
        e.preventDefault();
        setActiveFavorite(!activeFavorite)
    }
    return (
        <section className="products page-section">
            <div className="container">
                <div className="products__inner">
                    <div className="tabs-wrapper">
                        <div className="products__tabs">
                            {
                                tabsNames.map((tab,index)=>{
                                    return(
                                        <a className="products__tab" key={index} href="/#">{tab}</a>
                                    )
                                })
                            }
                        </div>
                        <div className="products__container">
                            <div className="products__content">
                                <div className="product-slider">
                                    <div className="product-slider__item">
                                        <a className="product-item" href="/#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <button onClick={(e)=>handlerActiveFavorite(e)} className={activeFavorite?"product-item__favorite active":"product-item__favorite"}></button>
                                            <a href="/#"></a>
                                            <img className="product-item__img" src={productImg} alt=""/>
                                            <h3 className="product-item__title">Водонепроницаемый Рюкзак</h3>
                                            <p className="product-item__price">9 800 ₽</p>
                                            <button className="product-item__basket" >
                                                <img src={basketImg} alt=""/>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
