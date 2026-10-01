import { Card, Form, Image } from "react-bootstrap"
import { Clock, Image as ImageIcon } from "react-bootstrap-icons"

const defaultColumns = ["Nieuw", "In bereiding", "Klaar voor afhaal"]

function CardOrder({
	image,
	name = "Gerecht",
	pickupTime = "12:00",
	columns = defaultColumns,
	selectedColumn,
	onColumnChange
}) {
	const getColumnName = (column) => typeof column === "string" ? column : column.name
	const currentColumn = selectedColumn ?? getColumnName(columns[0])

	return (
		<Card className="border-0 rounded-3 bg-white p-2">
			<div className="overflow-hidden rounded-2 bg-secondary-subtle" style={{ height: "64px" }}>
				{image ? (
					<Image src={image} alt={name} className="h-100 w-100 object-fit-cover" />
				) : (
					<div className="d-flex h-100 align-items-center justify-content-center">
						<ImageIcon size={28} />
					</div>
				)}
			</div>
			<Card.Body className="p-0 pt-1">
				<Card.Title className="mb-0 fw-normal" style={{ fontSize: "10px" }}>
					{name}
				</Card.Title>
				<div className="d-flex align-items-center gap-1" style={{ fontSize: "10px" }}>
					<Clock size={11} aria-hidden="true" />
					<span>{pickupTime}</span>
				</div>
				<Form.Select
					aria-label={`Kolom voor ${name}`}
					size="sm"
					className="ms-auto mt-2 border-0 bg-body-secondary py-0 ps-2"
					style={{ width: `max(68px, calc(${currentColumn.length + 3}ch + 24px))`, height: "14px", fontSize: "8px" }}
					value={currentColumn}
					onChange={(event) => onColumnChange?.(event.target.value)}
				>
					{columns.map((column) => {
						const columnName = getColumnName(column)
						return <option key={columnName} value={columnName}>{columnName}</option>
					})}
				</Form.Select>
			</Card.Body>
		</Card>
	)
}

export default CardOrder
