import { Col, Container, Row, Button, Modal } from "react-bootstrap"
import { useState } from "react";
import CardMenu from "../components/CardMenu";

function ManagementMenuPage({ dishes }) {

    const [selectedDish, setSelectedDish] = useState(null);

    return (
        <>
            <Container>
                <Row className="mt-4">
                    {dishes.map((dish, index) => {
                        return <Col key={index} md={4} className="g-4">
                            <CardMenu id={dish.id} name={dish.name} description={dish.description} price={dish.price} onClick={() => setSelectedDish(dish)} />
                        </Col>
                    })}
                </Row>
            </Container>
            <Modal
                show={selectedDish !== null}
                onHide={() => setSelectedDish(null)}
                centered
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {selectedDish?.name}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{selectedDish?.description}</p>
                    <p>Prijs: €{selectedDish?.price}</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ManagementMenuPage