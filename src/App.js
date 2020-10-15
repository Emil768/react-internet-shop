import React from "react";
import "./scss/style.scss";

//Components
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Search from "./components/Search/Search";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
//

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Search/>
      <Categories/>
      <Products/>
    </div>
  );
}

export default App;
