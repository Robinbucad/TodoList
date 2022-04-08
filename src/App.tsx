import { Container } from "react-bootstrap"
import CardList from "./components/CardList"
import TaskProvider from "./context/tasks.provider"

function App() {
	return (
		<Container className='app-container'>
			<TaskProvider>
				<CardList></CardList>
			</TaskProvider>
		</Container>
	)
}

export default App
