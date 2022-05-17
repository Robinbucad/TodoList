import { useState, ReactNode } from "react"
import { Task } from "../types"
import { TasksContext } from "./tasks.context"

type Props = {
	children: ReactNode
}

const TaskProvider: React.FC<Props> = ({ children }: Props) => {
	const [taskToDo, setTaskToDo] = useState<Task[]>([])
	const [id, setId] = useState<number>(1)
	const [filterToDo, setFilterToDo] = useState<Task[]>([])

	return (
		<TasksContext.Provider
			value={{
				taskToDo,
				setTaskToDo,
				id,
				setId,
				filterToDo,
				setFilterToDo,
			}}
		>
			{children}
		</TasksContext.Provider>
	)
}

export default TaskProvider
