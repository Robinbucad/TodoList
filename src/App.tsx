import CardList from "./components/CardList"
import TaskProvider from "./context/tasks.provider"

function App() {
	return (
		<div className='app-container'>
			<TaskProvider>
				<CardList></CardList>
			</TaskProvider>
		</div>
	)
}

export default App
