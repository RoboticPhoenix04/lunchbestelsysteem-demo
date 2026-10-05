import { useParams } from "react-router";
import CardMenuEdit from "../components/CardMenuEdit";
import { Col, Container, Row } from "react-bootstrap";

function MenuItemEditPage({ dishes }) {
    const { id } = useParams();

    const dish = dishes.find(
        dish => dish.id === Number(id)
    );

    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={6} className="mt-5">
                        <CardMenuEdit name={dish.name} description={dish.description} price={dish.price} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MenuItemEditPage