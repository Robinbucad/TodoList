import { useContext } from "react"
import { useFetchData } from "../../API"
import { TasksContext } from "../../context/tasks.context"
import { Task } from "../../types"
import Card from "../Card"
import Header from "../Header/Header"
import "./style.scss"

const CardList = () => {
	const { taskToDo, taskDone, filterToDo, filterDone } =
		useContext(TasksContext)
	useFetchData<Task[]>("http://localhost:4000/toDo")

	return (
		<div className='card-container'>
			<Header></Header>
			<Card
				title='To do'
				lengthTask={taskToDo.length}
				taskToDoProp={filterToDo}
			></Card>

			<Card
				title='Done'
				lengthTask={taskDone.length}
				taskToDoProp={filterDone}
			></Card>
		</div>
	)
}

export default CardList
