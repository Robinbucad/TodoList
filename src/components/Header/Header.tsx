import { useContext } from "react"
import miLogo from "../../assets/images/miLogo.png"
import { TasksContext } from "../../context/tasks.context"
import { Task } from "../../types"

import "./style.scss"

const Header = () => {
	const [
		taskToDo,
		setTaskToDo,
		taskInProg,
		setTaskInProg,
		taskDone,
		setTaskDone,
		id,
		setId,
		filter,
		setFilter,
		filterInProg,
		setFilterinProg,
		filterDone,
		setFilterDone,
	] = useContext(TasksContext)

	const filterTasks = (e: any) => {
		const filteredList = taskToDo.filter((task: Task) =>
			task.title.toLowerCase().includes(e.target.value)
		)
		const filteredInProgList = taskInProg.filter((task: Task) =>
			task.title.toLowerCase().includes(e.target.value)
		)
		const filteredDoneList = taskDone.filter((task: Task) =>
			task.title.toLowerCase().includes(e.target.value)
		)
		setFilter(filteredList)
		setFilterinProg(filteredInProgList)
		setFilterDone(filteredDoneList)
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
					onChange={filterTasks}
					className='input-filter'
					type='text'
					placeholder='Busque tarea'
				></input>
			</div>
		</>
	)
}

export default Header
