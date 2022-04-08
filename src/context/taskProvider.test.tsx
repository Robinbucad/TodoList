import App from "../App"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import TaskProvider from "./tasks.provider"

describe("Testing card component", () => {
	it("Should render the card", () => {
		render(
			<TaskProvider>
				<App />
			</TaskProvider>
		)
	})
})
