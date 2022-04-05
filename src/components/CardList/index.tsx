import { useContext } from "react"
import { TasksContext } from "../../context/tasks.context"
import Card from "../Card"
import "./style.scss"

const CardList = () => {
	const [
		taskToDo,
		setTaskToDo,
		taskInProg,
		setTaskInProg,
		taskDone,
		setTaskDone,
	] = useContext(TasksContext)

	return (
		<div className='card-container'>
			<Card
				title='To do'
				taskToDoProp={taskToDo}
				setTaskToDo={setTaskToDo}
				setTaskinProg={setTaskInProg}
				setTaskDone={setTaskDone}
			></Card>
			<Card
				title='In progress'
				taskToDoProp={taskInProg}
				setTaskToDo={setTaskToDo}
				setTaskinProg={setTaskInProg}
				setTaskDone={setTaskDone}
			></Card>
			<Card
				title='Done'
				taskToDoProp={taskDone}
				setTaskToDo={setTaskToDo}
				setTaskinProg={setTaskInProg}
				setTaskDone={setTaskDone}
			></Card>
		</div>
	)
}

export default CardList
