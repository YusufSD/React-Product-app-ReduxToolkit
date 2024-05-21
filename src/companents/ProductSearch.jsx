import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/productSlice";

function ProductSearch() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => {
    return state.products.searchTerm;
  });

  return (
    <div className="listHeader">
      <h3 className="title is-3">Ürünlerim</h3>
      <div className="search field is-horizontal">
        <div className="label">Ara</div>
        <input
          className="input"
          value={searchTerm}
          onChange={(event) => {
            dispatch(changeSearchTerm(event.target.value));
          }}
        />
      </div>
    </div>
  );
}

export default ProductSearch;
