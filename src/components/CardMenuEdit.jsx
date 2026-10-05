import { Button, Card, Form } from "react-bootstrap";

function CardMenuEdit({ name, description, price }) {

    return (
        <>
            <Card className="p-3">
                <Form className="d-flex flex-column gap-3">
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Naam</Form.Label>
                        <Form.Control type="text" placeholder={name} defaultValue={name} />
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Omschrijving</Form.Label>
                        <Form.Control as="textarea" rows={10} placeholder={description} defaultValue={description} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Label>Prijs</Form.Label>
                        <Form.Control className="w-auto" type="number" placeholder={price} defaultValue={price} />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Button variant="danger" onClick={(e) => {
                            console.log("Verwijdert");
                        }}>
                            Verwijderen
                        </Button>
                        <Button variant="success" onClick={(e) => {
                            console.log("Opgeslagen");
                        }}>
                            Opslaan
                        </Button>
                    </div>
                </Form>
            </Card>
        </>
    );

}

export default CardMenuEdit