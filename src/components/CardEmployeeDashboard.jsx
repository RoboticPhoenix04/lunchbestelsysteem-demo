import { Card } from "react-bootstrap"

function CardEmployeeDashboard({ name, children }) {
    return (
        <Card className="border-0 overflow-hidden rounded-3 bg-body-secondary" style={{ height: "476px", width: "100%" }}>
            <Card.Body className="d-flex flex-column p-0">
                <Card.Title className="d-flex align-items-center justify-content-center mb-0 bg-primary text-white fs-6 fw-normal" style={{ minHeight: "41px" }}>
                    {name}
                </Card.Title>
                <div className="d-flex flex-column gap-2 overflow-auto p-2">
                    {children}
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardEmployeeDashboard