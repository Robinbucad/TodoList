import React, { useState, useContext } from "react"
import "./style.scss"
import { FiPlusCircle } from "react-icons/fi"
import { TasksContext } from "../../context/tasks.context"
import { Task } from "../../types"
import { useCheckTaskDat, usePostData } from "../../API"
import SingleTask from "../Task"
import ModalAdd from "../modal/modalAddTask"
import { Col, Container, Row } from "react-bootstrap"

type Props = {
	title: string
	taskToDoProp: Task[]
	lengthTask: number
}

const Card: React.FC<Props> = ({ title, taskToDoProp }: Props) => {
	const { postTask, postState } = usePostData<Task[]>()
	const [modalShow, setModalShow] = useState(false)
	const { checkSingleTask } = useCheckTaskDat()
	if (postState.state === "error" || !postTask) {
		return <div>Error</div>
	}

	const { taskToDo, setTaskToDo, setFilterToDo } = useContext(TasksContext)

	const handleDelTask = (e: any) => {
		const filterToDoDel = taskToDo.filter((t: Task) => t.id !== e)
		checkSingleTask(`http://localhost:3001/toDo/${e}`, "delete")
		setTaskToDo(filterToDoDel)
		setFilterToDo(filterToDoDel)
	}

	return (
		<Container className='container-tasks' fluid>
			<Row>
				<Col lg={12} className='array-length'>
					<p className='title-task'>Añadir tarea</p>
					<button
						data-testid='btnModal'
						className='btn-add-header'
						onClick={() => setModalShow(!modalShow)}
					>
						<FiPlusCircle></FiPlusCircle>
					</button>
				</Col>
			</Row>

			<ModalAdd size='md' show={modalShow} onHide={() => setModalShow(false)} />
			<Row className='task-list-container'>
				<Col className='list'>
					{title === "To do"
						? taskToDoProp.map((e: Task) => (
								<SingleTask
									title={e.title}
									id={e.id}
									date={e.date}
									handleDelTask={() => handleDelTask(e.id)}
									key={e.id}
								></SingleTask>
						  ))
						: null}
				</Col>
			</Row>
		</Container>
	)
}

export default Card
