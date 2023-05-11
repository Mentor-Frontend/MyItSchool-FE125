import React from "react";
import Cathegories from "./cathegories";
import ProductList from "../../styledComponents/Products/productsList";
import ProductBlock from "./productBlock";
import Placeholder from "./placeholder";

export default function Products() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [cathegoryFilter, setCathegoryFilter] = React.useState(0);

  React.useEffect(() => {
    setLoading(true);
    fetch(
      "https://6421d95e34d6cd4ebd7d49cd.mockapi.io/furniture/furniture?cathegory=" +
        cathegoryFilter
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [cathegoryFilter]);

  return (
    <>
      <div>
        <Cathegories
          value={cathegoryFilter}
          onClickCathegory={(index) => setCathegoryFilter(index)}
        />

        <ProductList>
          {loading
            ? [...new Array(6)].map((_, index) => <Placeholder key={index} />)
            : items.map((obj) => <ProductBlock key={obj.id} {...obj} />)}
        </ProductList>
      </div>
    </>
  );
}
