import { useContext } from "react"
import { TasksContext } from "../../context/tasks.context"
import { Task } from "../../types"
import { AiOutlineSearch } from "react-icons/ai"
import "./style.scss"

const Header = () => {
	const { taskToDo, setFilterToDo, taskDone, setFilterDone } =
		useContext(TasksContext)

	const filterTasks = (e: any) => {
		const filteredList = taskToDo.filter((task: Task) =>
			task.title.toLowerCase().includes(e.target.value)
		)
		const filteredDone = taskDone.filter((task: Task) =>
			task.title.toLowerCase().includes(e.target.value)
		)
		setFilterToDo(filteredList)
		setFilterDone(filteredDone)
	}

	return (
		<div className='search-filter'>
			<div className='div-filter'>
				<AiOutlineSearch className='icon-search' />
				<input
					onChange={filterTasks}
					className='input-filter'
					type='text'
					placeholder='Busque la tarea que quiera'
				></input>
			</div>
		</div>
	)
}

export default Header
