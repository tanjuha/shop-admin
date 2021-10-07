import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { fetchProducts } from "./../../store/slices/productReducer";
import { Spinner } from "react-bootstrap";

const Products = () => {
  const dispatch = useDispatch();

  const { status, error } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state: any) => state.products.products);

  return (
    <>
      <h4 className="page-title">All products</h4>
      {status === "loading" && <Spinner animation="border" />}
      {error && <h4>Something wrong ... </h4>}
      {products && (
        <ul>
          {products.map((product: any) => {
            return <li key={product.email}>{product.email}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default Products;
