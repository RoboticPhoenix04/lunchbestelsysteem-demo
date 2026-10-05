import { Col, Container, Row, Button, Modal } from "react-bootstrap"
import CardDish from "../components/CardDish";
import { useState } from "react";

function Home() {

    const [selectedDish, setSelectedDish] = useState(null);
    const dishes = [
        {
            name: 'Tomatensoep', description: 'Tomatensoep is een heerlijke en klassieke soep die wordt gemaakt van rijpe tomaten. De soep heeft een zachte, frisse smaak en wordt vaak verrijkt met kruiden zoals basilicum en oregano. Door de romige textuur is tomatensoep een populair voorgerecht voor jong en oud. Vaak wordt de soep geserveerd met verse broodjes of knapperige croutons. De combinatie van zoete en lichtzure smaken zorgt voor een aangename smaakbeleving. Tomatensoep is niet alleen lekker, maar bevat ook verschillende vitamines en antioxidanten. Hierdoor is het een smakelijke en voedzame keuze voor elke maaltijd.', price: 12.95 },
        { name: 'Tonijnsalade', description: 'Lorem ipsum dolor sit amet.', price: 15.65 },
        { name: 'Kipwrap', description: 'Lorem ipsum dolor sit amet.', price: 18.95 },
        { name: 'Tomatensoep', description: 'Lorem ipsum dolor sit amet.', price: 12.95 },
        { name: 'Tonijnsalade', description: 'Lorem ipsum dolor sit amet.', price: 15.65 },
        { name: 'Kipwrap', description: 'Lorem ipsum dolor sit amet.', price: 18.95 },
        { name: 'Tomatensoep', description: 'Lorem ipsum dolor sit amet.', price: 12.95 },
        { name: 'Tonijnsalade', description: 'Lorem ipsum dolor sit amet.', price: 15.65 },
        { name: 'Kipwrap', description: 'Lorem ipsum dolor sit amet.', price: 18.95 }
    ];

    return (
        <>
            <Container>
                <div className="mt-5">
                    <Button variant="secondary">Alle</Button>
                    <Button className="mx-3" variant="secondary">Vega</Button>
                    <Button variant="secondary">Gluten</Button>
                </div>
                <Row className="mt-4">
                    {dishes.map((dish, index) => {
                        return <Col key={index} md={4} className="g-4">
                            <CardDish name={dish.name} description={dish.description} price={dish.price} onClick={() => setSelectedDish(dish)} />
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

                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={() => console.log("Bestelling toegevoegd")}
                    >
                        Bestel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Home