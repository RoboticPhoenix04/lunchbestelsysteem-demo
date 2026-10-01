import { Card } from "react-bootstrap"
import { Link } from "react-router"

function TileManagement({ name, icon, linkedpage }) {
    return (
        <>
            <Card as={Link} to={linkedpage} className=" tile-card w-75 p-3 text-decoration-none text-reset">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="fs-3 mb-4">{name}</Card.Title>
                    {icon}
                </Card.Body>
            </Card>
        </>
    )
}

export default TileManagement