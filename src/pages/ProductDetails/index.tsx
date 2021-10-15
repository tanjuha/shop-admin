import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProductDetails,
} from "../../store/slices/productReducer";
import { useParams } from "react-router";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id }: any = useParams();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const details = useSelector((state: any) => state.products.productDetails);


  return (
      <>
      {details 
      ? <>{details.title}</> 
      : <>No data</>
      }
      
      </>
  )
};

export default ProductDetails;
