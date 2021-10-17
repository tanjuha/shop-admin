import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProductDetails,
} from "../../store/slices/productReducer";
import { useParams } from "react-router";
import { productSelectors } from "../../store/slices/productReducer";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id }: any = useParams();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const details = useSelector((state: any) =>  productSelectors.selectById(state, id));

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
