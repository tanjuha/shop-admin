import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialValueProductForm } from "../../shared/types";
import "./style.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchProduct } from "./../../store/slices/productReducer";
import Notification from "../../components/Notification";

const getImgBase64 = (file: any, formik: any) => {
  if (file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      formik.setFieldValue("image", reader.result);
    };
  }
};

const PreviewImage = ({ formik, fileData }: any) => {
  const [photoBase64, setPhotoBase64] = useState("");

  useEffect(() => {
    setPhotoBase64(formik.getFieldProps(fileData).name);
  }, [fileData]);

  return (
    <>
      {fileData && (
        <>
          <Form.Label>Preview images</Form.Label>
          <img className="prevImg" src={photoBase64} alt="Preview" />
        </>
      )}
    </>
  );
};

const AddProduct = () => {
  const { notification } = useSelector((state: any) => state.products);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: InitialValueProductForm,
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      description: Yup.string()
        .max(500, "Must be 500 characters or less")
        .required("Required"),
      purchasePrice: Yup.number()
        .min(0, "Value should be greater than 0")
        .required("Required"),
      сurrencyСourse: Yup.number()
        .min(0, "Value should be greater than 0")
        .required("Required"),
      amount: Yup.number()
        .min(0, "Value should be greater than 0")
        .required("Required"),
      salePrice: Yup.number()
        .min(0, "Value should be greater than 0")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(fetchProduct(values));
      resetForm();
    },
  });

  return (
    <>
      <h4 className="page-title">Add Product</h4>
      {notification && <Notification notification={notification} />}
      <Form className="form-container page-body" onSubmit={formik.handleSubmit}>
        <Row>
          <Col xl="6">
            {/* start title field */}
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Title product"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              ></Form.Control>
              {/* start error message */}
              <Form.Text className="text-danger">
                {formik.touched.title && formik.errors.title ? (
                  <div className="text-danger">{formik.errors.title}</div>
                ) : null}
              </Form.Text>
              {/* start error message */}
            </Form.Group>
            {/* end title field */}

            {/* start description field */}
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Description product"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              ></Form.Control>
              {/* start error message */}
              <Form.Text className="text-danger">
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-danger">{formik.errors.description}</div>
                ) : null}
              </Form.Text>
              {/* end error message */}
            </Form.Group>
            {/* end description field */}

            <div className="mb-3 d-flex align-items-end">
              {/* start purchase price field */}
              <Form.Group className="w-100">
                <Form.Label>Purchase price</Form.Label>
                <Form.Control
                  type="number"
                  className="form-control"
                  name="purchasePrice"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.purchasePrice}
                ></Form.Control>
              </Form.Group>
              {/* end purchase price field */}

              {/* start currency type of purchase price field */}
              <Form.Group className="form-check mb-2">
                <Form.Check
                  type="radio"
                  name="currencyType"
                  label="&#x24;"
                  checked
                  value="dollar"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Form.Group>
              <Form.Group className="form-check mb-2">
                <Form.Check
                  type="radio"
                  name="currencyType"
                  label="&#x20AC;"
                  value="euro"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Form.Group>
              <Form.Group className="form-check mb-2">
                <Form.Check
                  type="radio"
                  name="currencyType"
                  label="&#x20B4;"
                  value="hryvnia"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Form.Group>
              {/* start error message */}
              <Form.Text className="text-danger">
                {formik.touched.currencyType && formik.errors.currencyType ? (
                  <div className="text-danger">
                    {formik.errors.currencyType}
                  </div>
                ) : null}
              </Form.Text>
              {/* end error message */}
              {/* end currency type of purchase price field */}
            </div>

            {/* start sale price field */}
            <Form.Group className="mb-3">
              <Form.Label>Sale price</Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                name="salePrice"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.salePrice}
              ></Form.Control>
            </Form.Group>
            {/* end sale price field */}

            {/* start category field */}
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                className="form-control"
                name="category"
                defaultValue={0}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option disabled value="0">
                  Select category
                </option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Form.Control>
            </Form.Group>
            {/* end category field */}
          </Col>
          <Col xl="6">
            {/* start currency course field */}
            <Form.Group className="mb-3">
              <Form.Label>Currency course</Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                name="сurrencyСourse"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.сurrencyСourse}
              ></Form.Control>
            </Form.Group>
            {/* end currency course field */}

            {/* start amount field */}
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                name="amount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
              ></Form.Control>
            </Form.Group>
            {/* end amount field */}

            {/* start image field */}
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={(event: any) => {
                  getImgBase64(event.currentTarget.files[0], formik);
                }}
                onBlur={formik.handleBlur}
              ></Form.Control>
            </Form.Group>
            {/* end image field */}

            {/* start preview image field */}
            <PreviewImage formik={formik} fileData={formik.values.image} />
            {/* start preview image field */}
          </Col>
        </Row>
        <Button
          variant="primary"
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Create product
        </Button>
      </Form>
    </>
  );
};

export default AddProduct;
