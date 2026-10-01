import { Card, Button, Image } from "react-bootstrap"

function CardDish({ name, description, price, onClick }) {
    return (
        <>
            <Card className="p-4" onClick={onClick}
                style={{ cursor: "pointer" }}>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-column flex-xl-row gap-3">
                        <div className="flex-shrink-0">
                            <Image fluid src="//placehold.co/200" />
                        </div>
                        <div className="d-flex flex-column">
                            <h5>{name}</h5>
                            <p className="dishdescription">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end mt-3">
                        <span className="fs-4 me-2">€</span>
                        <span className="fs-5">{price}</span>
                        <Button className="ms-4" variant="primary" onClick={(e) => {
                            e.stopPropagation();
                            console.log("Bestelt");
                        }}>
                            Bestel
                        </Button>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default CardDish


