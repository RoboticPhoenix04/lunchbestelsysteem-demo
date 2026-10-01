import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function TileManagement({ name, icon, linkedpage }) {
    console.log(linkedpage)
    return (
        <>
            {/* <Link as={ Link } to={linkedpage} className="text-decoration-none"> */}
                <Card className=" tile-card w-75 p-3">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Title className="fs-3 mb-4">{name}</Card.Title>
                        {icon}
                    </Card.Body>
                </Card>
            {/* </Link> */}
        </>
    )
}

export default TileManagement