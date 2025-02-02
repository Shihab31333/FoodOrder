import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(null);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        const firstname = form.firstName.value;
        const lastname = form.lastName.value;
        const email = form.email.value;

        if (username && password && firstname && lastname && email && number) {
            setLoading(true);
            console.log('call api here');
            console.log(username, password, firstname, lastname, email, number);
        }
    }

    return (
        <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className="p-4 rounded bg-light text-black">
                    <h1 className="text-center border-bottom pb-3">
                        Create Account
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>First name</Form.Label>
                                <Form.Control name="firstName" type="text" placeholder="First name" required />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control name="lastName" type="text" placeholder="Last name" required />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" type="text" placeholder="Username" minLength={3} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile number</Form.Label>
                            <PhoneInput
                                country={'in'}
                                value={number}
                                onChange={phone => setNumber(phone)}
                                className="text-dark"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" minLength={6} required />
                        </Form.Group>
                        <Button
                            type="submit"
                            className="bg-primary text-white m-auto d-block"
                            disabled={loading}
                            style={{ border: 0 }}
                        >
                            {loading ?
                                <>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    &nbsp;Loading...
                                </> : 'Continue'
                            }
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
