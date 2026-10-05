import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

const initialDishes = [
	{ id: 1, name: "Tomatensoep", quantity: 8 },
	{ id: 2, name: "Tonijnsalade", quantity: 14 },
	{ id: 3, name: "Kipwrap", quantity: 1 },
	{ id: 4, name: "Groentesoep", quantity: 0 },
	{ id: 5, name: "Broodje gezond", quantity: 9 },
	{ id: 6, name: "Pasta pesto", quantity: 3 },
	{ id: 7, name: "Panini kaas", quantity: 6 },
	{ id: 8, name: "Caesar salade", quantity: 8 },
	{ id: 9, name: "Falafelwrap", quantity: 0 }
]

function Storage() {
	const [dishes, setDishes] = useState(initialDishes)

	const updateQuantity = (id, value) => {
		const quantity = Math.max(0, Number(value) || 0)
		setDishes((currentDishes) => currentDishes.map((dish) =>
			dish.id === id ? { ...dish, quantity } : dish
		))
	}

	return (
		<main className="storage-page">
			<style>{`
				body { background: #f6f7f5; }
				.storage-page { min-height: calc(100vh - 4.5rem); min-height: calc(100dvh - 4.5rem); padding: 3rem 0 4rem; background: #f6f7f5; }
				.storage-grid { row-gap: 1rem; }
				.storage-item { display: grid; grid-template-columns: minmax(0, 1fr) 4.25rem 5.5rem; align-items: center; gap: 0.8rem; min-height: 104px; padding: 1.1rem 1.25rem; border: 1px solid #d9ded8; border-radius: 6px; background: #fff; }
				.storage-item h2 { grid-column: 1 / -1; margin: 0; color: #28312a; font-size: 1rem; font-weight: 600; }
				.storage-item label { color: #626b63; font-size: 0.9rem; }
				.storage-item input { width: 4.25rem; min-height: 2.25rem; padding: 0.25rem 0.4rem; border: 1px solid #aeb8ae; border-radius: 5px; color: #202821; font: inherit; text-align: center; }
				.storage-status { width: 5.5rem; color: #416c4c; font-size: 0.75rem; text-align: right; white-space: nowrap; }
				.storage-status.is-low { color: #a44d36; }
				@media (max-width: 575.98px) {
					.storage-page { padding-top: 2rem; }
				}
			`}</style>
			<Container>
				<Row className="storage-grid">
					{dishes.map((dish) => (
						<Col key={dish.id} xs={12} sm={6} lg={4}>
							<article className="storage-item">
								<h2>{dish.name}</h2>
								<label htmlFor={`quantity-${dish.id}`}>Aantal</label>
								<input
									id={`quantity-${dish.id}`}
									type="number"
									min="0"
									step="1"
									value={dish.quantity}
									onChange={(event) => updateQuantity(dish.id, event.target.value)}
								/>
								<span className={`storage-status ${dish.quantity <= 3 ? "is-low" : ""}`}>
									{dish.quantity <= 3 ? "Bijna op" : "Op voorraad"}
								</span>
							</article>
						</Col>
					))}
				</Row>
			</Container>
		</main>
	)
}

export default Storage
