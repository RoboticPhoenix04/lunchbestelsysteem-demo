import { Col, Container, Row } from "react-bootstrap"
import CardDish from "../components/CardDish";

function Home() {

    const dishes = [
        { name: 'Tomatensoep', description: 'Lorem ipsum dolor sit amet.' },
        { name: 'Tonijnsalade', description: 'Lorem ipsum dolor sit amet.' },
        { name: 'Kipwrap', description: 'Lorem ipsum dolor sit amet.' }
    ];

    return (
        <>
            <Container>
                <Row className="mt-5">
                    {dishes.map(dish => {
                        return <Col md={4}>
                            <CardDish name={dish.name} description={dish.description} />
                        </Col>
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Home