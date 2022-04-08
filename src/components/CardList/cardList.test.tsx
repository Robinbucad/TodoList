import { render } from "@testing-library/react"
import CardList from "./index"
import "@testing-library/jest-dom"

describe("Testing card component", () => {
	it("Should render the card", () => {
		render(<CardList />)
	})
})
