import React, { useState, useContext } from "react"
import { Button } from "react-bootstrap"
import "./style.scss"
import { FiPlusCircle } from "react-icons/fi"
import { BsFillTrashFill } from "react-icons/bs"
import { TasksContext } from "../../context/tasks.context"
import { Task } from "../../types"
import { useDelData, usePostData } from "../../API"

type Props = {
	title: string
	taskToDoProp: Task[]
	lengthTask: number
	setTaskToDo?: () => void
	setTaskinProg?: () => void
	setTaskDone?: () => void
}

const Card: React.FC<Props> = ({ title, taskToDoProp, lengthTask }: Props) => {
	const [showAddNote, setShowAddNote] = useState<boolean>(false)
	const { postTask, postState } = usePostData<Task[]>()
	const { delSingleTask } = useDelData()
	if (postState.state === "error" || !postTask) {
		return <div>Error</div>
	}

	const [textNewTask, setTextNewTask] = useState<string>("")
	const [task, setTask] = useState<Task[]>([])
	const [column, setColumn] = useState<string>("")
	const date: Date = new Date()
	const [
		taskToDo,
		setTaskToDo,
		taskInProg,
		setTaskInProg,
		taskDone,
		setTaskDone,
		id,
		setId,
	] = useContext(TasksContext)

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
		column: column,
	}

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()
		setTask([...task, taskObj])
		setId(id + 1)
		setTextNewTask("")
		postTask("http://localhost:4000/toDo", taskObj)
		if (taskObj.column === "To do") {
			setTaskToDo([...taskToDo, taskObj])
		} else if (taskObj.column === "In progress") {
			setTaskInProg([...taskInProg, taskObj])
		} else if (taskObj.column === "Done") {
			setTaskDone([...taskDone, taskObj])
		}
	}

	const handleDelTask = (e: any) => {
		const filterToDoDel = taskToDo.filter((t: Task) => t.id !== e)
		const filterInProgDel = taskInProg.filter((t: Task) => t.id !== e)
		const filterDone = taskDone.filter((t: Task) => t.id !== e)
		delSingleTask(`http://localhost:4000/toDo/${e}`)

		setTaskToDo(filterToDoDel)
		setTaskInProg(filterInProgDel)
		setTaskDone(filterDone)
	}

	const handleTextTask = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextNewTask(e.target.value)
		if (title === "To do") {
			setColumn("To do")
		}
		if (title === "In progress") {
			setColumn("In progress")
		}
		if (title === "Done") {
			setColumn("Done")
		}
	}

	return (
		<>
			<article className='card-article'>
				<header className='header-card'>
					<div className='array-length'>
						<p>{lengthTask}</p>
						<p>{title}</p>
					</div>

					<button
						className='btn-add-header'
						onClick={() => setShowAddNote(!showAddNote)}
					>
						<FiPlusCircle></FiPlusCircle>
					</button>
				</header>

				<section>
					<div>
						{showAddNote ? (
							<form onSubmit={handleSubmit} className='area-text'>
								<textarea
									value={textNewTask}
									onChange={handleTextTask}
									className='text'
									placeholder='Enter a note'
								></textarea>
								<div className='btns-div'>
									<Button
										disabled={textNewTask === "" ? !false : !true}
										type='submit'
										className='btn-add'
									>
										Add
									</Button>
									<Button
										onClick={() => setShowAddNote(false)}
										className='btn-cancel'
									>
										Cancel
									</Button>
								</div>
							</form>
						) : null}
					</div>

					<div className='task-list-container'>
						{title === "To do"
							? taskToDoProp.map((e, i) => (
									<div className='task' key={i}>
										<header className='header-task'>
											<p>{e.title}</p>
											<button
												onClick={() => handleDelTask(e.id)}
												className='btn-delTask'
											>
												<BsFillTrashFill />
											</button>
										</header>

										<footer className='footer-task'>
											<p>{e.id}</p>
											<p>{e.date}</p>
										</footer>
									</div>
							  ))
							: null}

						{title === "In progress"
							? taskToDoProp.map((e, i) => (
									<div className='task' key={i}>
										<header className='header-task'>
											<p>{e.title}</p>
											<button
												onClick={() => handleDelTask(e.id)}
												className='btn-delTask'
											>
												<BsFillTrashFill />
											</button>
										</header>

										<footer className='footer-task'>
											<p>{e.id}</p>
											<p>{e.date}</p>
										</footer>
									</div>
							  ))
							: null}

						{title === "Done"
							? taskToDoProp.map((e, i) => (
									<div className='task' key={i}>
										<header className='header-task'>
											<p>{e.title}</p>
											<button
												onClick={() => handleDelTask(e.id)}
												className='btn-delTask'
											>
												<BsFillTrashFill />
											</button>
										</header>

										<footer className='footer-task'>
											<p>{e.id}</p>
											<p>{e.date}</p>
										</footer>
									</div>
							  ))
							: null}
					</div>
				</section>
			</article>
		</>
	)
}

export default Card
