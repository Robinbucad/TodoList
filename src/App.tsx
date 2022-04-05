import "./App.css"
import CardList from "./components/CardList"
import Header from "./components/Header/Header"
import FilterProvider from "./context/filter.provider"

function App() {
	return (
		<FilterProvider>
			<Header></Header>
			<CardList></CardList>
		</FilterProvider>
	)
}

export default App
