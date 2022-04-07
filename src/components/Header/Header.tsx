import { useContext } from "react"
import { TasksContext } from "../../context/tasks.context"
import { Task } from "../../types"

import "./style.scss"

const Header = () => {
	const { taskToDo, setFilterToDo } = useContext(TasksContext)

	const filterTasks = (e: any) => {
		const filteredList = taskToDo.filter((task: Task) =>
			task.title.toLowerCase().includes(e.target.value)
		)

		setFilterToDo(filteredList)
	}

	return (
		<>
			<div className='search-filter'>
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
