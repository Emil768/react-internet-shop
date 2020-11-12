import React from "react";
import "./scss/style.scss";

//components
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./pages/Catalog";
//

//lib
import { Route } from "react-router";
//
function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/catalog/:name" component={Catalog} />
      <Footer />
    </div>
  );
}

export default App;
