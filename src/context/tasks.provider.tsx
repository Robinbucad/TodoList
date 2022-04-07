import { useState, ReactNode } from "react"
import { Task } from "../types"
import { TasksContext } from "./tasks.context"

type Props = {
	children: ReactNode
}

const TaskProvider: React.FC<Props> = ({ children }: Props) => {
	const [taskToDo, setTaskToDo] = useState<Task[]>([])
	const [taskInProg, setTaskInProg] = useState<Task[]>([])
	const [taskDone, setTaskDone] = useState<Task[]>([])
	const [id, setId] = useState<number>(1)
	const [filterToDo, setFilterToDo] = useState<Task[]>([])
	const [filterInProg, setFilterInProg] = useState<Task[]>([])
	const [filterDone, setFilterDone] = useState<Task[]>([])
	return (
		<TasksContext.Provider
			value={{
				taskToDo,
				setTaskToDo,
				taskInProg,
				setTaskInProg,
				taskDone,
				setTaskDone,
				id,
				setId,
				filterToDo,
				setFilterToDo,
				filterInProg,
				setFilterInProg,
				filterDone,
				setFilterDone,
			}}
		>
			{children}
		</TasksContext.Provider>
	)
}

export default TaskProvider
