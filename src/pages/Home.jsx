import React from "react";

//Components

import Banner from "../components/Banner/Banner";
import Search from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import BannerSale from "../components/BannerSale/BannerSale";

//

function Home() {
  return (
    <>
      <Banner />
      <Search />
      <Categories />
      <Products title="Популярные товары" hideButton={true} />
      <BannerSale />
      <Products title="С этим товаром покупают" hideButton={false} />
    </>
  );
}

export default Home;
