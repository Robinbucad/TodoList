import { Container } from "react-bootstrap"
import CardList from "./components/CardList"
import HeaderHome from "./components/headerHome"
import TaskProvider from "./context/tasks.provider"

function App() {
	return (
		<Container className='app-container' fluid>
			<HeaderHome />
			<TaskProvider>
				<CardList></CardList>
			</TaskProvider>
		</Container>
	)
}

export default App
