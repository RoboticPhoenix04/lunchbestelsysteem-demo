import { useState } from "react"
import { Link } from "react-router"
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap"

function Inlog() {
    const [feedback, setFeedback] = useState(null)

    function handleSubmit(event) {
        event.preventDefault()
        setFeedback({
            type: "info",
            message: "Je gegevens zijn ingevuld. Inloggen is nog niet mogelijk omdat deze pagina nog niet is gekoppeld aan een backend."
        })
    }

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={6} xl={5}>
                    <Card className="shadow-sm">
                        <Card.Body className="p-4 p-md-5">
                            <h1 className="h2 text-center mb-2">Inloggen</h1>
                            <p className="text-body-secondary text-center mb-4">
                                Log in met je e-mailadres en wachtwoord.
                            </p>

                            {feedback && (
                                <Alert
                                    variant={feedback.type}
                                    role="status"
                                    dismissible
                                    onClose={() => setFeedback(null)}
                                >
                                    {feedback.message}
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="loginEmail">
                                    <Form.Label>E-mailadres</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="loginPassword">
                                    <Form.Label>Wachtwoord</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                    />
                                </Form.Group>

                                <p className="text-center mt-0 mb-4">
                                    Nog geen account?{" "}
                                    <Link to="/registratie">Registreer je hier</Link>
                                </p>

                                <Button type="submit" className="mx-auto d-block" variant="primary">
                                    Inloggen
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Inlog