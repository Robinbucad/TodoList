import { useContext } from "react"
import miLogo from "../../assets/images/miLogo.png"
import { TasksContext } from "../../context/tasks.context"
import { Task } from "../../types"

import "./style.scss"

const listToDoLocal = JSON.parse(localStorage.getItem("To do") || "")
const listInProgLocal = JSON.parse(localStorage.getItem("In Progress") || "")
const listDoneLocal = JSON.parse(localStorage.getItem("Done") || "")

const Header = () => {
	const [
		taskToDo, // eslint-disable-line no-unused-vars
		setTaskToDo,
		taskInProg, // eslint-disable-line no-unused-vars
		setTaskInProg,
		taskDone, // eslint-disable-line no-unused-vars
		setTaskDone,
	] = useContext(TasksContext)

	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const filterToDo = listToDoLocal.filter((t: Task) =>
			t.title.toLowerCase().includes(e.target.value)
		)
		const filterInProg = listInProgLocal.filter((t: Task) =>
			t.title.toLowerCase().includes(e.target.value)
		)
		const filterDone = listDoneLocal.filter((t: Task) =>
			t.title.toLowerCase().includes(e.target.value)
		)

		setTaskToDo(filterToDo)
		setTaskInProg(filterInProg)
		setTaskDone(filterDone)
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
					onChange={handleFilter}
					className='input-filter'
					type='text'
					placeholder='Busque tarea'
				></input>
			</div>
		</>
	)
}

export default Header
