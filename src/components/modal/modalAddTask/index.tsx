import { useState, useContext } from "react"
import { Modal } from "react-bootstrap"
import { usePostData } from "../../../API"
import { TasksContext } from "../../../context/tasks.context"
import { Task } from "../../../types"
import "./style.scss"

type Props = {
	show: boolean
	onHide: () => void
	size: any
}

function ModalAdd(props: Props) {
	const { taskToDo, setTaskToDo, id, setId, setFilterToDo } =
		useContext(TasksContext)
	const [textNewTask, setTextNewTask] = useState<string>("")
	const [task, setTask] = useState<Task[]>([])
	const date: Date = new Date()
	const { postTask } = usePostData<Task[]>()
	const actDate: string =
		"# Created on " +
		date.getDay() +
		"/" +
		date.getMonth() +
		"/" +
		date.getFullYear() +
		"/" +
		" at " +
		date.getHours() +
		":" +
		date.getMinutes() +
		":" +
		date.getSeconds() +
		"/"

	const taskObj: Task = {
		title: textNewTask,
		id: id,
		date: actDate,
		column: "To do",
		status: "Pending",
	}
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()
		setTask([...task, taskObj])
		setId(id + 1)
		setTextNewTask("")
		postTask("http://localhost:4000/toDo", taskObj)
		setTaskToDo([...taskToDo, taskObj])
		setFilterToDo([...taskToDo, taskObj])
		setTextNewTask("")
	}

	return (
		<Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
			<div
				data-testid='btnAdd'
				style={{ background: "#B3BFE3", borderRadius: "10px" }}
			>
				<Modal.Header style={{ border: "none" }} closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Nueva tarea
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='div-input'>
					<input
						value={textNewTask}
						onChange={e => setTextNewTask(e.target.value)}
						type='text'
						className='input-add-task'
						placeholder='Añade una tarea aqui...'
					/>
					{textNewTask === "" ? (
						<button
							data-testid='button'
							onClick={() => alert("Este campo no puede estar vacío")}
							className='btn-add-modal'
						>
							Type
						</button>
					) : (
						<button
							data-testid='buttonAdd'
							onClick={handleSubmit}
							className='btn-add-modal'
						>
							Add
						</button>
					)}
				</Modal.Body>
			</div>
		</Modal>
	)
}

export default ModalAdd
