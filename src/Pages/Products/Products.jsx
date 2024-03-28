/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import "./products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export default function Products({ handleAddToCart,products,setProducts }) {

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("./products.json"); // Use Axios to make GET request
        console.log("data", response);

        setProducts(response.data); // Set products from the response data
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const handleCartClick = (product) => {
    handleAddToCart(product);
  };



  return (
    <>
      <section className="product pt-5 pb-5 mx-auto">
        <Container>
          <Row className="mx-auto ">
            {products.map((item) => (
              <Col lg={3} key={item.id} className=" mb-3">
                <Card className="product-card text-center">
                  <div className="card-img">
                    <Card.Img
                      variant="top"
                      src={item.img}
                      className="img-fluid pro-img"
                    />

                    <Card.Body className="mt-5 card-body ">
                      <Card.Title
                        className="text-black mt-5"
                        style={{ fontSize: "18px" }}
                      >
                        {item.title}
                      </Card.Title>
                      <Card.Text>
                        <ul
                          className=" text-black list-money"
                          style={{ listStyleType: "none" }}
                        >
                          <li className="slash-list">120 $</li>
                          <li>100 $</li>
                        </ul>
                        <Button
                          className="cart text-black text-start pt-3"
                          onClick={() => handleCartClick(item)}
                        >
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            size="lg"
                            style={{ color: "#2d673e" }}
                            className="me-2 iconfont"
                          />
                          Add To Cart
                        </Button>
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
