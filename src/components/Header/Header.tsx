import { useContext } from "react"
import miLogo from "../../assets/images/miLogo.png"
import { FilterContext } from "../../context/filter.context"
import "./style.scss"

const Header = () => {
	const [filterToDo, setFilterToDo] = useContext(FilterContext)
	console.log(filterToDo)

	const filter = (e: any) => {
		const filteredToDo = filterToDo.filter((t: any) =>
			t.title.toLowerCase().includes(e.target.value)
		)
		console.log(filteredToDo)
		setFilterToDo(filterToDo)
	}
	return (
		<>
			<header className='header-app'>
				<img className='img-logo' src={miLogo}></img>
				<p>To Do List Using TypeScript</p>
			</header>
			<div className='search-filter'>
				<p>Made by Robin</p>
				<input
					onChange={filter}
					className='input-filter'
					type='text'
					placeholder='Busque tarea'
				></input>
			</div>
		</>
	)
}

export default Header
