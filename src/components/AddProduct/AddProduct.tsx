import React, { useState } from "react";
import "./addProduct.css";

const AddProduct = () => {
  const [value, setValue] = useState([]);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeTextArea: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    console.log(e.target.value);
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    console.log(e.target.value);
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem("product", JSON.stringify(value))
    console.log("submit", value);
  };

  return (
    <div>
      <h3>Add Product</h3>
      <form className="form-container" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={onChangeInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            onChange={onChangeTextArea}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Imege</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={onChangeInput}
          />
        </div>
        <div className="mb-3 d-flex align-items-end">
          <div className="w-100">
            <label className="form-label">Purchase price</label>
            <input
              type="text"
              className="form-control"
              name="purchasePrice"
              onChange={onChangeInput}
            />
          </div>
          <div className="form-check m-2">
            <input
              className="form-check-input"
              type="radio"
              name="dollar"
              onChange={onChangeInput}
            />
            <label className="form-check-label">&#x24;</label>
          </div>
          <div className="form-check m-2">
            <input
              className="form-check-input"
              type="radio"
              name="euro"
              onChange={onChangeInput}
            />
            <label className="form-check-label">&#x20AC;</label>
          </div>
          <div className="form-check m-2">
            <input
              className="form-check-input"
              type="radio"
              name="hryvnia"
              onChange={onChangeInput}
            />
            <label className="form-check-label">&#x20B4;</label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Currency course</label>
          <input
            type="text"
            className="form-control"
            name="сurrencyСourse"
            onChange={onChangeInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Currency type</label>
          <select
            className="form-select"
            name="currencyType"
            onChange={onChangeSelect}
            defaultValue={"0"}
            >
            <option disabled value="0">
              Select currency type
            </option>
            <option value="1">&#x24;</option>
            <option value="2">&#x20AC;</option>
            <option value="3">&#x20B4;</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            name="amount"
            onChange={onChangeInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sale price</label>
          <input
            type="number"
            className="form-control"
            name="salePrice"
            onChange={onChangeInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            name="category"
            onChange={onChangeSelect}
            defaultValue={0}
          >
            <option disabled value="0">
              Select category
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
