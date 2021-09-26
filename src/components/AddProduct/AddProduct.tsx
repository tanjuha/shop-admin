import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/reducers/productReducer";
import { IProduct } from "../../utils/interfaces";
import DragDropImages from "../DragDropImages/DragDropImages";
import "./style.css";

const AddProduct = () => {
  const [state, setState] = useState<IProduct>({
    photos: [],
    title: "",
    description: "",
    purchasePrice: "",
    сurrencyСourse: "",
    currencyType: "",
    amount: "",
    salePrice: "",
    category: "",
  });

  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(addProduct(state));
  };

  return (
    <div>
      <h4 className="page-title">Add Product</h4>
      <form className="form-container" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-xl-6">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="">
              <label className="form-label">Images</label>
              <DragDropImages state={state} setState={setState} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mb-3 d-flex align-items-end">
              <div className="w-100">
                <label className="form-label">Purchase price</label>
                <input
                  type="text"
                  className="form-control"
                  name="purchasePrice"
                  onChange={handleChange}
                />
              </div>
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="dollar"
                  onChange={handleChange}
                />
                <label className="form-check-label">&#x24;</label>
              </div>
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="euro"
                  onChange={handleChange}
                />
                <label className="form-check-label">&#x20AC;</label>
              </div>
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hryvnia"
                  onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Currency type</label>
              <select
                className="form-select"
                name="currencyType"
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Sale price</label>
              <input
                type="number"
                className="form-control"
                name="salePrice"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                name="category"
                onChange={handleChange}
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
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Create product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
