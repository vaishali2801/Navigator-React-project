import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
    return (
        <Container className="mt-5">
            <h1>Contact Us</h1>

            <p>
                Have any questions or suggestions? Feel free to contact us.
                We would love to hear from you.
            </p>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Enter your message"
                    />
                </Form.Group>

                <Button variant="warning">Submit</Button>
            </Form>
        </Container>
    );
};

export default Contact;