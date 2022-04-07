import { BsFillTrashFill } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
import { MdOutlineFileDownloadDone } from "react-icons/md"
import "./style.scss"
import { SingleTaskProps, Task } from "../../types"
import { useCheckTaskDat } from "../../API"
import { useEffect, useState, useContext } from "react"
import { TasksContext } from "../../context/tasks.context"

export const SingleTask: React.FC<SingleTaskProps> = ({
	title,
	id,
	handleDelTask,
	status,
}: SingleTaskProps) => {
	const { checkSingleTask, taskState, checkStatusTask } = useCheckTaskDat()
	const [edit, setEdit] = useState<boolean>(false)
	const [editTask, setEditTask] = useState<string>(title)
	const [taskStatus, setTaskStatus] = useState<string>(status)
	const [styleStatus, setStyledStatus] = useState<string>(status)
	const {
		taskToDo,
		setTaskToDo,
		setFilterToDo,
		taskDone,
		setFilterDone,
		setTaskDone,
	} = useContext(TasksContext)
	const handleSubmit = async () => {
		await checkSingleTask(`http://localhost:4000/toDo/${id}`, "PATCH", editTask)
		setEdit(!edit)
		window.location.reload()
	}

	useEffect(() => {
		if (status === "Pending") setStyledStatus("pending")
		if (status === "In Progress") setStyledStatus("in-prog")
		if (status === "Completed") setStyledStatus("completed")
	}, [styleStatus])
	const handleStatus = async (stat: string, id: number) => {
		const delOne = taskToDo.filter((t: Task) => t.id !== id)
		const addOne = taskToDo.filter((t: Task) => t.id === id)
		switch (stat) {
			case "Pending":
				setTaskStatus("In Progress")
				setStyledStatus("in-prog")
				await checkStatusTask(
					`http://localhost:4000/toDo/status/${id}`,
					"PATCH",
					"In Progress",
					"To do"
				)
				break
			case "In Progress":
				setTaskStatus("Completed")
				setStyledStatus("completed")
				setTaskDone([...taskDone, ...addOne])
				setFilterDone([...taskDone, ...addOne])
				setTaskToDo(delOne)
				setFilterToDo(delOne)
				checkStatusTask(
					`http://localhost:4000/toDo/status/${id}`,
					"PATCH",
					"Completed",
					"Done"
				)
		}
	}

	return (
		<div className='task'>
			<div className='head-task'>
				{!edit ? (
					<div>
						<li>
							{editTask} {taskState.state === "error" ? <p>Error...</p> : null}
						</li>
					</div>
				) : (
					<input
						onChange={e => setEditTask(e.target.value)}
						className='placeHolderEdit'
						type='text'
						placeholder={editTask}
					/>
				)}
				<button
					onClick={() => handleStatus(status, id)}
					className={styleStatus}
				>
					<p>{taskStatus}</p>
				</button>
			</div>

			<div className='btn-divOpts'>
				<button onClick={() => handleDelTask(id)} className='btn-delTask'>
					<BsFillTrashFill />
				</button>
				{!edit ? (
					<button onClick={() => setEdit(!edit)} className='btn-delTask'>
						<AiFillEdit />
					</button>
				) : (
					<button className='btn-delTask' onClick={handleSubmit}>
						<MdOutlineFileDownloadDone />
					</button>
				)}
			</div>
		</div>
	)
}
