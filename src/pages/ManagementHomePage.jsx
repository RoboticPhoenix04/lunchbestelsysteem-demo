import { Col, Container, Row } from "react-bootstrap"
import TileManagement from "../components/TileManagement"
import { BookHalf, BoxFill } from "react-bootstrap-icons";

function ManagementHomePage() {
    const tiles = [
        {name: 'Voorraadbeheer', icon: <BoxFill className="tile-icon" />, linkedpage: "/employee"},
        {name: 'Menu', icon: <BookHalf className="tile-icon" />, linkedpage: "/employee"}
    ];
    return (
        <>
            <Container>
                <Row className="mt-5 mb-3">
                    <h1 className="text-center">
                        Welkom beheerder
                    </h1>
                </Row>
                <Row>
                    {tiles.map((tile, index) => {
                        return <Col key={index} md={6} className="d-flex justify-content-center">
                            <TileManagement name={tile.name} icon={tile.icon} linkedpage={tile.linkedpage}/>
                        </Col>
                    })}

                </Row>
            </Container>
        </>
    )
}

export default ManagementHomePage

