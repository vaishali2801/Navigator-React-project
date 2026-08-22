import { Container, Row, Col, Button } from "react-bootstrap"
import "./Home.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container >
        <Row>
          <Col md={3}>
            <h1 className="h1"><a href="">Vaishali</a></h1>
          </Col>
          <Col md={3}>
            <div className="footer-tag">
              <h3 className="text-light">Quick Links</h3>
              <a href="">Home</a>
              <a href="">Service</a>
              <a href="">Product</a>
              <a href="">Contact</a>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-light">
              <h3>Contact Information</h3>
              <p style={{ color: "white", marginTop: "20px" }}>Phone : +912372848327</p>
              <p style={{ color: "white", marginTop: "20px" }}>Email :  vaishali2877@gmail.com</p>

            </div>
          </Col>
          <Col md={3}>
            <div className="box2">
              <Button variant="light">
                Google
              </Button>
              <Button variant="light">
                Instagram
              </Button>
              <Button variant="light">
                LinkedIn
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
