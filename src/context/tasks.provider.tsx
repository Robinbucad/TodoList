import { useState, ReactNode } from "react"
import { Task } from "../components/Card"
import { TasksContext } from "./tasks.context"

type Props = {
	children: ReactNode
}

const TaskProvider = ({ children }: Props) => {
	const [taskToDo, setTaskToDo] = useState<Task[]>([])
	const [taskInProg, setTaskInProg] = useState<Task[]>([])
	const [taskDone, setTaskDone] = useState<Task[]>([])
	const [id, setId] = useState<number>(1)
	return (
		<TasksContext.Provider
			value={[
				taskToDo,
				setTaskToDo,
				taskInProg,
				setTaskInProg,
				taskDone,
				setTaskDone,
				id,
				setId,
			]}
		>
			{children}
		</TasksContext.Provider>
	)
}

export default TaskProvider
