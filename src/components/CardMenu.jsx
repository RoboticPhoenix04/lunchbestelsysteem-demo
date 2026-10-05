import { Card, Button, Image } from "react-bootstrap"
import { useNavigate } from "react-router";

function CardMenu({id, name, description, onClick } ) {
    const navigate = useNavigate();

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
                        <Button className="ms-4" variant="primary" onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/managementmenu/${id}/edit`)
                        }}>
                            Bewerken
                        </Button>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default CardMenu