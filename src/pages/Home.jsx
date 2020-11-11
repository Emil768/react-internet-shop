import React from "react";

//Components
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Search from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import BannerSale from "../components/BannerSale/BannerSale";
import Footer from "../components/Footer/Footer";
//

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Search />
      <Categories />
      <Products title="Популярные товары" hideButton={true} />
      <BannerSale />
      <Products title="С этим товаром покупают" hideButton={false} />
      <Footer />
    </>
  );
}

export default Home;
