import Card from "../src/components/Card"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"


test("render", () => {
	const component = render(
		<Card title='To do' taskToDoProp={[]} lengthTask={1} />
	)
	console.log(component)
})
