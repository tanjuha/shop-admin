import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import {
  fetchProducts,
  productSelectors,
} from "./../../store/slices/productReducer";
import { Spinner } from "react-bootstrap";

const Products = () => {
  const dispatch = useDispatch();

  const { status, error } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const allProducts = useSelector((state: any) =>
    productSelectors.selectAll(state.products)
  );

  return (
    <>
      <h4 className="page-title">All products</h4>
      {status === "loading" && <Spinner animation="border" />}
      {error && <h4>Something wrong ... </h4>}
      <ul>
        {allProducts &&
          allProducts.map((product: any) => {
            return <li key={product.id}>{product.title}</li>;
          })}
      </ul>
    </>
  );
};

export default Products;
