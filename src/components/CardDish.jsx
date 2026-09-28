import { Card, Button, Image } from "react-bootstrap"
import { Link } from "react-router"
import { ChevronDown } from "react-bootstrap-icons";


function CardDish({ name, description }) {
    return (
        <>
            {/* <Card>
                <Card.Img src="//placehold.co/200x100" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button as={Link} to="/employee" variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
            <Card className="p-5">
                <div className="d-flex">
                    <Image src="//placehold.co/120"/>
                    <div className="ms-4 d-flex flex-column">
                        <h5>{name}</h5>
                        <p>
                            {description}
                        </p>
                        <div className="mt-auto d-flex justify-content-between">
                            <div className="me-4">
                                <span className="fs-4 me-2">€</span>
                                <span className="fs-5">12,95</span>
                            </div>

                            <div className="d-flex align-items-center gap-3">
                                <ChevronDown size={20} />
                                <Button variant="primary">
                                    Bestel
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default CardDish


