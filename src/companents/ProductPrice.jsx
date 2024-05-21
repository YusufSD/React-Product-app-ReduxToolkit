import React from "react";
import { useSelector } from "react-redux";

function ProductPrice() {
  const totalPrice = useSelector(({ form, products: { data, searchTerm } }) =>
    data
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, product) => acc + product.price, 0)
  );

  return <div className="productPrice">Toplam Tutar: {totalPrice} TL</div>;
}

export default ProductPrice;
