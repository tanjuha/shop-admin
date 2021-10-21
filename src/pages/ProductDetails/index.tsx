import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductDetails } from "../../store/slices/productReducer";
import { useParams } from "react-router";
import { productSelectors } from "../../store/slices/productReducer";
import { Col, Row, Spinner } from "react-bootstrap";
import "./style.scss"

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id }: any = useParams();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const { status, error } = useSelector((state: any) => state.products);

  const details = useSelector((state: any) =>
    productSelectors.selectById(state, id)
  );

  return (
    <>
      <h4 className="page-title">Product Details</h4>

      {status === "loading" && <Spinner animation="border" />}

      {error && <h4>Something wrong ... </h4>}

      {details && 
        <>
          <div className="page-body">
            <h2 className="mb-3">{details.title}</h2>
            <Row>
              <Col xl="8">

                <h6>Description: </h6>
                <p className="mb-3">{details.description}</p>

                <Row>

                  <Col xl="3">
                    <h6>Purchase price: </h6>
                    <p>
                      {details.purchasePrice}
                      <strong>{details.currencyType}</strong>
                    </p>
                  </Col>

                  <Col xl="3">
                    <h6>Sale price: </h6>
                    <p>{details.salePrice}</p>
                  </Col>

                  <Col xl="3">
                    <h6>Currency course: </h6>
                    <p>{details.сurrencyСourse}</p>
                  </Col>

                  <Col xl="3">
                    <h6>Category: </h6>
                    <p>{details.category}</p>
                  </Col>

                </Row>
              </Col>

              <Col xl="4">
                <div className="d-flex flex-column justify-content-center align-items-center">

                  <img
                  className="photo"
                    src={
                      details.image ? details.image : "https://picsum.photos/150/150?random=1"
                    }
                    alt={details.title}
                  />

                  <div className="d-flex align-items-center mt-2">

                    <h6 className="mb-0">Amount: </h6>
                    <p className="mb-0 ms-2">{details.amount}</p>

                  </div>
                  
                </div>
              </Col>

            </Row>
          </div>
        </>
     }
    </>
  );
};

export default ProductDetails;
