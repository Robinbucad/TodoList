import { render, fireEvent, screen } from "@testing-library/react"
import Header from "./Header"
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils"

describe("Testing the input", () => {
	// Testeo que exista el input
	it("render input", () => {
		const { getByTestId } = render(<Header />)
		const input = getByTestId("searchBar")
		expect(input).toBeTruthy()
	})
})

// describe("Should be able to type on the input", () => {
// 	// Testeo que exista el input
// 	it("should render input element", async () => {
// 		act(() => {
// 			render(<Header />)
// 			const input = screen.getByPlaceholderText(
// 				/Busque la tarea que quiera/i
// 			) as HTMLInputElement
// 			fireEvent.change(input, { target: { value: "Prueba test" } })
// 			expect(input.value).toBe("Prueba test")
// 		})
// 	})
// })
