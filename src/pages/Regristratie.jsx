import { useState } from "react"
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap"

function Regristratie() {
    const [feedback, setFeedback] = useState(null)

    function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        const password = formData.get("password")
        const confirmPassword = formData.get("confirmPassword")

        if (password !== confirmPassword) {
            setFeedback({ type: "danger", message: "De wachtwoorden komen niet overeen." })
            return
        }

        setFeedback({
            type: "info",
            message: "Het formulier is gecontroleerd. Registratie wordt nog niet opgeslagen omdat de pagina nog niet is gekoppeld aan een backend."
        })
    }

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={6} xl={5}>
                    <Card className="shadow-sm">
                        <Card.Body className="p-4 p-md-5">
                            <h1 className="h2 text-center mb-2">Account aanmaken</h1>
                            <p className="text-body-secondary text-center mb-4">
                                Vul je gegevens in om je te registreren.
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
                                <Row>
                                    <Form.Group as={Col} sm={6} className="mb-3" controlId="firstName">
                                        <Form.Label>Voornaam</Form.Label>
                                        <Form.Control
                                            name="firstName"
                                            type="text"
                                            autoComplete="given-name"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} sm={6} className="mb-3" controlId="lastName">
                                        <Form.Label>Achternaam</Form.Label>
                                        <Form.Control
                                            name="lastName"
                                            type="text"
                                            autoComplete="family-name"
                                            required
                                        />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>E-mailadres</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Wachtwoord</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        minLength={8}
                                        required
                                    />
                                    <Form.Text className="text-body-secondary">
                                        Gebruik minimaal 8 tekens.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="confirmPassword">
                                    <Form.Label>Herhaal wachtwoord</Form.Label>
                                    <Form.Control
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="new-password"
                                        minLength={8}
                                        required
                                    />
                                </Form.Group>

                                <Button type="submit" className="mx-auto d-block" variant="primary">
                                    Registreren
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Regristratie