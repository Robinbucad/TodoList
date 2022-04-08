import { screen, render } from "@testing-library/react"
import Card from "./index"
import "@testing-library/jest-dom"

describe("Testing card component", () => {
	it("Should render the card", () => {
		const utils = render(
			<Card title='To do' taskToDoProp={[]} lengthTask={2} />
		)
		const toDO = screen.getByText("Tienes 2 tareas por hacer")
		utils.debug()
		expect(toDO).toBeInTheDocument()
	})
})
