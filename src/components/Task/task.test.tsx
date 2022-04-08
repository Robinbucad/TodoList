import { screen, render, fireEvent } from "@testing-library/react"
import Task from "./index"
import "@testing-library/jest-dom"

const handleMock = jest.fn()

describe("Testing task component", () => {
	it("Should render the Task", () => {
		render(
			<Task title='Tarea' id={1} status='Pending' handleDelTask={handleMock} />
		)
		const task = screen.getByText("Tarea")
		expect(task).toBeInTheDocument()
	})

	it("Should handle edit task status", () => {
		render(
			<Task title='Tarea' id={1} status='Pending' handleDelTask={handleMock} />
		)
		const btn = screen.getByTestId("btn")
		expect(btn).toBeInTheDocument()
	})

	it("Should render the Input", () => {
		render(
			<Task title='Tarea' id={1} status='Pending' handleDelTask={handleMock} />
		)
		const btnEdit = screen.getByTestId("edit")
		fireEvent.click(btnEdit)
		const inputEdit = screen.getByTestId("input")
		expect(inputEdit).toBeInTheDocument()
	})

	it("should change input value", async () => {
		render(
			<Task title='Tarea' id={1} status='Pending' handleDelTask={handleMock} />
		)
		const btnEdit = screen.getByTestId("edit")
		fireEvent.click(btnEdit)
		const inputEdit = screen.getByTestId("input") as HTMLInputElement
		fireEvent.change(inputEdit, { target: { value: "Prueba test" } })
		expect(inputEdit.value).toBe("Prueba test")
	})

	it("Should handle edit click function", () => {
		render(
			<Task title='Tarea' id={1} status='Pending' handleDelTask={handleMock} />
		)
		const btnEdit = screen.getByTestId("edit")
		fireEvent.click(btnEdit)
		const inputEdit = screen.getByTestId("input") as HTMLInputElement
		fireEvent.change(inputEdit, { target: { value: "Prueba test" } })
		const setEdit = screen.getByTestId("setEdit")
		fireEvent.click(setEdit)
		expect(setEdit).toBeInTheDocument()
	})

	it("Should handle delete function", () => {
		render(
			<Task title='Tarea' id={1} status='Pending' handleDelTask={handleMock} />
		)
		const btnDelete = screen.getByTestId("delete")
		fireEvent.click(btnDelete)
		expect(handleMock).toHaveBeenCalled()
	})
})
