import { screen, render, fireEvent } from "@testing-library/react"
import Card from "./index"
import "@testing-library/jest-dom"

describe("Testing card component", () => {
	it("Should render the card", () => {
		render(<Card title='To do' taskToDoProp={[]} lengthTask={2} />)
		const toDO = screen.getByText("Tienes 2 tareas por hacer")
		expect(toDO).toBeInTheDocument()
	})
})

// describe("Testing add task is working", () => {
// 	it("Should open the modal", () => {
// 		const utils = render(
// 			<Card title='To do' taskToDoProp={[]} lengthTask={2} />
// 		)
// 		const btnModal = screen.getByTestId("btnModal")
// 		utils.debug()
// 		expect(btnModal).toBeInTheDocument()
// 	})
// })
