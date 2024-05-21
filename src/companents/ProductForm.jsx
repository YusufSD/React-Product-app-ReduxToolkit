import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeDescription,
  changePrice,
} from "../store/slices/formSlice";
import { addProduct } from "../store/slices/productSlice";

function ProductForm() {
  const dispatch = useDispatch();
  const { name, description, price } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      price: state.form.price,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct({ name, description, price }));
  };

  return (
    <div className="productForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input
              className="input is-expended"
              type="text"
              value={name}
              onChange={(event) => dispatch(changeName(event.target.value))}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea
              className="input is-expended"
              type="text"
              onChange={(event) =>
                dispatch(changeDescription(event.target.value))
              }
              value={description}
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              className="input is-expended"
              type="number"
              min={0}
              value={price}
              onChange={(event) =>
                dispatch(changePrice(parseInt(event.target.value)))
              }
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
