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
				lengthTask={taskToDo.length}
				taskToDoProp={taskToDo}
				setTaskToDo={setTaskToDo}
				setTaskinProg={setTaskInProg}
				setTaskDone={setTaskDone}
			></Card>
			<Card
				title='In progress'
				lengthTask={taskInProg.length}
				taskToDoProp={taskInProg}
				setTaskToDo={setTaskToDo}
				setTaskinProg={setTaskInProg}
				setTaskDone={setTaskDone}
			></Card>
			<Card
				title='Done'
				lengthTask={taskDone.length}
				taskToDoProp={taskDone}
				setTaskToDo={setTaskToDo}
				setTaskinProg={setTaskInProg}
				setTaskDone={setTaskDone}
			></Card>
		</div>
	)
}

export default CardList
