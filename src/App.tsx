import CardList from "./components/CardList"
import Header from "./components/Header/Header"
import TaskProvider from "./context/tasks.provider"

function App() {
	return (
		<TaskProvider>
			<Header></Header>
			<CardList></CardList>
		</TaskProvider>
	)
}

export default App
