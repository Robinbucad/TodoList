import { useContext } from "react"
import { useFetchData } from "../../API"
import { TasksContext } from "../../context/tasks.context"
import { Task } from "../../types"
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

	const fetchState = useFetchData<Task[]>("http://localhost:4000/toDo")
	if (fetchState.state === "loading" || fetchState.state === "nothing") {
		return <div>Cargando...</div>
	}
	if (fetchState.state === "error" || !fetchState.data) {
		return <div>Error</div>
	}

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
