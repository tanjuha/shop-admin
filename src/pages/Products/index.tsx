import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import {
  fetchProducts,
  productSelectors,
} from "./../../store/slices/productReducer";
import { Spinner } from "react-bootstrap";
import { Images } from 'react-bootstrap-icons';
import { Product } from "../../shared/types";
import { useHistory } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  // 
  
  const { status, error } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const allProducts = useSelector((state: any) =>
    productSelectors.selectAll(state.products)
  );

  const showInfo = (id: string | number) => {
    history.push(`/shop-admin/products/product-details/${id}`)
  }

  return (
    <>
      <h4 className="page-title">All products</h4>
      <img src="" alt="" />
      {status === "loading" && <Spinner animation="border" />}
      {error && <h4>Something wrong ... </h4>}
      <ul>
        {allProducts &&
          allProducts.map((product: Product) => {
            return (
            <li key={product.id}> 
            {product.photos.length > 0 
            ?  <img src="https://picsum.photos/50/50?random=1" alt={product.title} />
            : <Images />
            }
            {product.title}
            <button className="btn btn-info m-2" onClick={() => showInfo(product.id)}>Info</button>
            </li>
            );
          })}
      </ul>
    </>
  );
};

export default Products;
