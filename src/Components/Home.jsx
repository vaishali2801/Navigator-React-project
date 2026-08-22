import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Container>
        <h1 className='text-center my-4'>Welcome To My Page</h1>
        <Row>
          <Col md={4}>
            <div className='box'>
              <h3>Navigator</h3>
              <p>Welcome to Navigator, a simple React application that helps users
                move smoothly between different pages using React Router DOM.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className='box'>
              <h3>About</h3>
              <p>Navigator demonstrates how routing works in React and allows users
                to explore different sections of the application without reloading
                the page.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className='box'>
              <h3>Service</h3>
              <p>Explore different services and features through a clean and
                user-friendly navigation system built with React Router DOM.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
