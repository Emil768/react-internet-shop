import React from "react";

//components
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import CatalogInner from "../components/CatalogInner/CatalogInner";
//

//lib

function Catalog(props) {
  const catalogName = props.match.params.name;
  return (
    <>
      <BreadCrumbs name={catalogName} />
      <CatalogInner name={catalogName} />
    </>
  );
}

export default Catalog;
