import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../store/slices/productSlice";

function ProductList() {
  const dispatch = useDispatch();

  const { products } = useSelector(
    ({ form, products: { data, searchTerm } }) => {
      const filteredProducts = data.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

      return {
        products: filteredProducts,
      };
    }
  );

  const renderProducts = products.map((product) => {
    return (
      <div key={product.id} className="panel">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button
          className="button is-danger"
          onClick={() => dispatch(removeProduct(product.id))}
        >
          Sil
        </button>
      </div>
    );
  });
  return <div className="productList">{renderProducts}</div>;
}

export default ProductList;
