import React, { Component } from "react";
import axios from "axios";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { CartContext } from "../contexts/Cart";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("https://w5tcr.sse.codesandbox.io/products").then((res) => {
      this.setState({
        products: res.data
      });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Product</h2>
        <Col>
          <Row sm="3">
            {products.map((product, id) => (
              <Card key={id}>
                <CardImg top width="100%" src={product.imgUrl} />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(product)}>
                        Add to Cart
                      </Button>
                    )}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            ))}
          </Row>
        </Col>
      </Container>
    );
  }
}

export default Product;
