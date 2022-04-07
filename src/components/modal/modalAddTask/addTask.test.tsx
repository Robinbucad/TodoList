import { screen, render, fireEvent } from "@testing-library/react"
import ModalAdd from "./index"
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils"

const mockedHide = jest.fn()

describe("Testing the input", () => {
	// Testeo que exista el input

	it("should render input element", async () => {
		render(<ModalAdd show={true} onHide={mockedHide} size='md' />)
		const input = screen.getByPlaceholderText(/Añade una tarea aqui../i)
		expect(input).toBeInTheDocument()
	})
})

describe("Should be able to type on the input", () => {
	// Testeo que exista el input
	it("should render input element", async () => {
		render(<ModalAdd show={true} onHide={mockedHide} size='md' />)
		const input = screen.getByPlaceholderText(
			/Añade una tarea aqui../i
		) as HTMLInputElement
		fireEvent.change(input, { target: { value: "Prueba test" } })
		expect(input.value).toBe("Prueba test")
	})
})

describe("Should be able change button", () => {
	it("should be able to render single btn", () => {
		render(<ModalAdd show={true} onHide={mockedHide} size='md' />)
		const button = screen.getByText("Type")
		expect(button).toBeInTheDocument()
	})
})

describe("Should be able change button", () => {
	it("should be able to render ADD BTN", () => {
		render(<ModalAdd show={true} onHide={mockedHide} size='md' />)
		const input = screen.getByPlaceholderText(
			/Añade una tarea aqui../i
		) as HTMLInputElement
		fireEvent.change(input, { target: { value: "Prueba test" } })
		expect(input.value).toBe("Prueba test")
		const button = screen.getByText("Add")
		expect(button).toBeInTheDocument()
	})
})

describe("Should have empty input when add button is clicked", () => {
	// Testeo que exista el input
	it("should render input element", async () => {
		render(<ModalAdd show={true} onHide={mockedHide} size='md' />)
		const input = screen.getByPlaceholderText(
			/Añade una tarea aqui../i
		) as HTMLInputElement
		fireEvent.change(input, { target: { value: "Prueba" } })
		expect(input.value).toBe("Prueba")
		const button = screen.getByText("Add")
		expect(button).toBeInTheDocument()
	})
})
