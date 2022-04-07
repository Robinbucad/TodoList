import React, { useState, useContext } from "react"
import "./style.scss"
import { FiPlusCircle } from "react-icons/fi"
import { TasksContext } from "../../context/tasks.context"
import { Task } from "../../types"
import { useCheckTaskDat, usePostData } from "../../API"
import { SingleTask } from "../Task"
import ModalAdd from "../modal/modalAddTask"

type Props = {
	title: string
	taskToDoProp: Task[]
	lengthTask: number
	setTaskToDo?: () => void
	setTaskinProg?: () => void
	setTaskDone?: () => void
}

const Card: React.FC<Props> = ({ title, taskToDoProp, lengthTask }: Props) => {
	const { postTask, postState } = usePostData<Task[]>()
	const [modalShow, setModalShow] = useState(false)
	const { checkSingleTask } = useCheckTaskDat()
	if (postState.state === "error" || !postTask) {
		return <div>Error</div>
	}

	const {
		taskToDo,
		setTaskToDo,
		taskInProg,
		setTaskInProg,
		taskDone,
		setTaskDone,
		setFilterToDo,
		setFilterInProg,
		setFilterDone,
	} = useContext(TasksContext)

	const handleDelTask = (e: any) => {
		const filterToDoDel = taskToDo.filter((t: Task) => t.id !== e)
		const filterInProgDel = taskInProg.filter((t: Task) => t.id !== e)
		const filterDone = taskDone.filter((t: Task) => t.id !== e)
		checkSingleTask(`http://localhost:4000/toDo/${e}`, "delete")

		setTaskToDo(filterToDoDel)
		setTaskInProg(filterInProgDel)
		setTaskDone(filterDone)

		setFilterToDo(filterToDoDel)
		setFilterInProg(filterInProgDel)
		setFilterDone(filterDone)
	}

	return (
		<>
			<article className='card-article'>
				<header className='header-card'>
					{title === "To do" ? (
						<div>
							<div className='array-length'>
								<p className='title-task'>
									Tienes {lengthTask} tareas por hacer
								</p>
								<button
									className='btn-add-header'
									onClick={() => setModalShow(!modalShow)}
								>
									<FiPlusCircle></FiPlusCircle> Añadir tarea
								</button>
							</div>
						</div>
					) : null}
				</header>

				<section>
					<div>
						<ModalAdd
							size='md'
							show={modalShow}
							onHide={() => setModalShow(false)}
						/>
					</div>

					<div className='task-list-container'>
						<div className='list'>
							<p className='to-do'>{title}</p>
							{title === "To do"
								? taskToDoProp.map((e: Task) => (
										<SingleTask
											title={e.title}
											id={e.id}
											date={e.date}
											status={e.status}
											handleDelTask={() => handleDelTask(e.id)}
											key={e.id}
										></SingleTask>
								  ))
								: null}
						</div>

						{title === "Done"
							? taskToDoProp.map((e: Task) => (
									<SingleTask
										title={e.title}
										id={e.id}
										date={e.date}
										status={e.status}
										handleDelTask={() => handleDelTask(e.id)}
										key={e.id}
									></SingleTask>
							  ))
							: null}
					</div>
				</section>
			</article>
		</>
	)
}

export default Card
