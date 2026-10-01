import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function TileManagement({ name, icon }) {
    return (
        <>
                <Card className=" tile-card w-75 p-3">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Title className="fs-3 mb-4">{name}</Card.Title>
                        {icon}
                    </Card.Body>
                </Card>
        </>
    )
}

export default TileManagement