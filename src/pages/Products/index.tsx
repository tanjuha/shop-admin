import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import Table from "react-bootstrap/Table";

import {
  fetchProducts,
  productSelectors,
} from "./../../store/slices/productReducer";
import { Product } from "../../shared/types";

import "./style.scss";

const Products = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const { status, error } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const allProducts = useSelector(productSelectors.selectAll);

  const showInfo = (id: string | number) => {
    history.push(`/shop-admin/products/product-details/${id}`);
  };

  return (
    <>
      <h4 className="page-title">All products</h4>

      {status === "loading" && <Spinner animation="border" />}

      {error && <h4>Something wrong ... </h4>}

      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allProducts &&
            allProducts.map((product: Product, index: number) => {
              return (
                <tr key={product.id}>

                  <td>{index + 1}</td>

                  <td>{product.title}</td>

                  <td>{product.description}</td>

                  <td>
                    <button
                      className="btn btn-info m-2"
                      onClick={() => showInfo(product.id)}
                    >
                      Info
                    </button>
                  </td>
                  
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default Products;
