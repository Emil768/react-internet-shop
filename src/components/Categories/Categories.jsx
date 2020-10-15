import React from 'react';
import "../../components/Categories/Categories.scss"
import ATVs from "../../img/category-1.png";
import jetSkis from "../../img/category-2.png";
import boats from "../../img/category-3.png";
import snowmobiles from "../../img/category-4.png";
import vehicles from "../../img/category-5.png";
import engines from "../../img/category-6.png";
function Categories() {
    let categoriesItems = [
        {
            name:"Квадрациклы",
            img:ATVs
        },
        {
            name:"Гидроциклы",
            img:jetSkis
        },
        {
            name:"Катера",
            img:boats
        },
        {
            name:"Снегоходы",
            img:snowmobiles
        },
        {
            name:"Вездеходы",
            img:vehicles
        },
        {
            name:"Двигатели",
            img:engines
        },  
    ];
    return (
        <section className="categories page-section">
            <div className="container">
                <div className="categories__content">
                    {categoriesItems.map((item,index)=>{
                        return(
                            <a className="categories__item" href="/#" key={index}>
                                <div className="categories__item-info">
                                    <h2 className="categories__item-title">{item.name}</h2>
                                    <p className="categories__item-text">Подробее</p>
                                </div>
                                <div className="categories__item-img">
                                    <img src={item.img} alt="ATVs"/>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Categories
