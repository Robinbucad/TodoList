import { BsFillTrashFill } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
import { MdOutlineFileDownloadDone } from "react-icons/md"
import "./style.scss"
import { SingleTaskProps, Task } from "../../types"
import { useCheckTaskDat } from "../../API"
import { useEffect, useState, useContext } from "react"
import { TasksContext } from "../../context/tasks.context"
import { Col, Container, Row } from "react-bootstrap"

const SingleTask: React.FC<SingleTaskProps> = ({
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
		await checkSingleTask(
			`https://limitless-badlands-19458.herokuapp.com/toDo/${id}`,
			"PATCH",
			editTask
		)
		setEdit(!edit)
		window.location.reload()
	}

	useEffect(() => {
		if (status === "Pending") setStyledStatus("pending")
		if (status === "In Progress") setStyledStatus("in-prog")
		if (status === "Completed") setStyledStatus("completed")
	}, [])
	const handleStatus = async (stat: string, id: number) => {
		const delOne = taskToDo.filter((t: Task) => t.id !== id)
		const addOne = taskToDo.filter((t: Task) => t.id === id)
		switch (stat) {
			case "Pending":
				setTaskStatus("In Progress")
				setStyledStatus("in-prog")
				await checkStatusTask(
					`https://limitless-badlands-19458.herokuapp.com/toDo/status/${id}`,
					"PATCH",
					"In Progress",
					"To do"
				)
				break
			case "In Progress":
				setTaskStatus("Completed")
				setStyledStatus("completed")
				setTaskToDo(delOne)
				setFilterToDo(delOne)
				setTaskDone([...taskDone, ...addOne])
				setFilterDone([...taskDone, ...addOne])

				await checkStatusTask(
					`https://limitless-badlands-19458.herokuapp.com/toDo/status/${id}`,
					"PATCH",
					"Completed",
					"Done"
				)
		}
	}

	return (
		<Container fluid>
			<Row className='row-cont'>
				<Col xs={6} sm={7} md={7} lg={8} className='head-task'>
					{!edit ? (
						<div>
							<li>
								{editTask}{" "}
								{taskState.state === "error" ? <p>Error...</p> : null}
							</li>
						</div>
					) : (
						<input
							data-testid='input'
							onChange={e => setEditTask(e.target.value)}
							className='placeHolderEdit'
							type='text'
							placeholder={editTask}
						/>
					)}
				</Col>
				<Col className='cont-status' xs={4} sm={3} md={3} lg={3}>
					<button
						data-testid='btn'
						onClick={() => handleStatus(status, id)}
						className={styleStatus}
					>
						<p>{taskStatus}</p>
					</button>
				</Col>

				<Col xs={2} sm={2} md={2} lg={1} className='btn-divOpts'>
					<button
						data-testid='delete'
						onClick={() => handleDelTask(id)}
						className='btn-delTask'
						id='delete'
					>
						<BsFillTrashFill />
					</button>
					{!edit ? (
						<button
							onClick={() => setEdit(!edit)}
							data-testid='edit'
							className='btn-delTask'
						>
							<AiFillEdit />
						</button>
					) : (
						<button
							data-testid='setEdit'
							className='btn-delTask'
							onClick={handleSubmit}
						>
							<MdOutlineFileDownloadDone />
						</button>
					)}
				</Col>
			</Row>
		</Container>
	)
}

export default SingleTask
