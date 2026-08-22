import React from 'react'
import { useParams } from "react-router-dom";
import { Container ,Card,Button,Row,Col} from 'react-bootstrap';
import productImage1 from "../assets/Product+Showcase-1.jpg";
import productImage2 from "../assets/premium_photo-1679913792906-13ccc5c84d44.avif";
import productImage3 from "../assets/images.jpeg";

import "./Home.css";

const Product = () => {
  const { id } = useParams();
  return (
    <Container className='div2 mt-4'>
      <Row>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productImage1} className='w-1'/>
        <Card.Body>
          <Card.Title>Product {id}</Card.Title>
          <Card.Text>
            Explore our featured product with a simple and attractive
            product showcase.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productImage2} className='w-1'/>
        <Card.Body>
          <Card.Title>Product {id}</Card.Title>
          <Card.Text>
            Explore our featured product with a simple and attractive
            product showcase.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productImage3} className='w-1'/>
        <Card.Body>
          <Card.Title>Product {id}</Card.Title>
          <Card.Text>
            Explore our featured product with a simple and attractive
            product showcase.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Product
