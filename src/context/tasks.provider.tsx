import { useState, ReactNode } from "react"
import { Task } from "../types"

import { TasksContext } from "./tasks.context"

type Props = {
	children: ReactNode
}

const toDoLocal = JSON.parse(localStorage.getItem("To do") || "") || []

const inProgLocal = JSON.parse(localStorage.getItem("In Progress") || "") || []
const doneLocal = JSON.parse(localStorage.getItem("Done" || "") || "") || []
const idFromLocal = JSON.parse(localStorage.getItem("Id") || "") || 1

const TaskProvider = ({ children }: Props) => {
	const [taskToDo, setTaskToDo] = useState<Task[]>(toDoLocal)
	const [taskInProg, setTaskInProg] = useState<Task[]>(inProgLocal)
	const [taskDone, setTaskDone] = useState<Task[]>(doneLocal)
	const [id, setId] = useState<number>(idFromLocal)
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
