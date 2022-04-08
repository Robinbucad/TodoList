import { Container } from "react-bootstrap"
import CardList from "./components/CardList"
import TaskProvider from "./context/tasks.provider"
import HeaderHome from "./headerHome"

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
