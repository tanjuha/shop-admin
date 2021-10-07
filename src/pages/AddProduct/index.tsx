import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/productReducer";
import { Product } from "../../shared/types";
import DragDropImages from "../../components/DragDropImages";
import "./style.scss";
import { Form, Row, Col, Button } from "react-bootstrap";

const AddProduct = () => {
  const [state, setState] = useState<Product>({
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
    <>
      <h4 className="page-title">Add Product</h4>
      <Form className="form-container" onSubmit={onSubmit}>
        <Row>
          <Col xl="6">
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={handleChange}
                required
                placeholder="Title product"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={handleChange}
                required
                placeholder="Description product"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Images</Form.Label>
              <DragDropImages state={state} setState={setState} />
            </Form.Group>
          </Col>
          <Col xl="6">
            <div className="mb-3 d-flex align-items-end">
              <Form.Group className="w-100">
                <Form.Label>Purchase price</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="purchasePrice"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="form-check mb-2">
                <Form.Check
                  type="radio"
                  name="currencyType"
                  label="&#x24;"
                  value="dollar"
                  onChange={handleChange}
                  id="dollar"
                />
              </Form.Group>
              <Form.Group className="form-check mb-2">
                <Form.Check
                  type="radio"
                  name="currencyType"
                  label="&#x20AC;"
                  value="euro"
                  onChange={handleChange}
                  id="euro"
                />
              </Form.Group>
              <Form.Group className="form-check mb-2">
                <Form.Check
                  type="radio"
                  name="currencyType"
                  label="&#x20B4;"
                  value="hryvnia"
                  onChange={handleChange}
                  id="hryvnia"
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Currency course</Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                name="сurrencyСourse"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                name="amount"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sale price</Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                name="salePrice"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                className="form-control"
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
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Create product
        </Button>
      </Form>
    </>
  );
};

export default AddProduct;
