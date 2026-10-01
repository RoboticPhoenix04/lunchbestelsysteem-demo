import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import CardEmployeeDashboard from "../components/CardEmployeeDashboard"
import CardOrder from "../components/CardOrder"

function Employee() {
    const columns = ["Nieuw", "In bereiding", "Klaar voor afhaal"]
    const [orders, setOrders] = useState([
        { id: 1, name: "Tomatensoep", pickupTime: "12:00", column: "Nieuw" },
        { id: 2, name: "Tonijnsalade", pickupTime: "12:15", column: "In bereiding" },
        { id: 3, name: "Kipwrap", pickupTime: "12:30", column: "Klaar voor afhaal" }
    ])

    const moveOrder = (orderId, column) => {
        setOrders((currentOrders) => currentOrders.map((order) =>
            order.id === orderId ? { ...order, column } : order
        ))
    }

    return (
        <>
        <Container>
            <Row className="justify-content-between pt-4">
                {columns.map((column) => {
                    const columnOrders = orders.filter((order) => order.column === column)
                    return <Col key={column} md={3} className="d-flex justify-content-center">
                        <CardEmployeeDashboard name={column}>
                            {columnOrders.map((order) => (
                                <CardOrder
                                    key={order.id}
                                    name={order.name}
                                    pickupTime={order.pickupTime}
                                    columns={columns}
                                    selectedColumn={order.column}
                                    onColumnChange={(nextColumn) => moveOrder(order.id, nextColumn)}
                                />
                            ))}
                        </CardEmployeeDashboard>
                    </Col>
                })}
            </Row>
        </Container>
        </>
    )
}

export default Employee