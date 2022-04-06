import { useContext } from "react"
import miLogo from "../../assets/images/miLogo.png"
import { TasksContext } from "../../context/tasks.context"
import { Task } from "../../types"

import "./style.scss"

const Header = () => {
	const [
		taskToDo, // eslint-disable-line no-unused-vars
		setTaskToDo,
		taskInProg, // eslint-disable-line no-unused-vars
		setTaskInProg,
		taskDone, // eslint-disable-line no-unused-vars
		setTaskDone,
	] = useContext(TasksContext)

	return (
		<>
			<header className='header-app'>
				<img className='img-logo' src={miLogo}></img>
				<p>To Do List Using TypeScript</p>
			</header>
			<div className='search-filter'>
				<p>Made by Robin</p>
				<input
					className='input-filter'
					type='text'
					placeholder='Busque tarea'
				></input>
			</div>
		</>
	)
}

export default Header
