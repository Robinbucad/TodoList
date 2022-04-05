import React, { useState } from "react"
import { Button } from "react-bootstrap"
import "./style.scss"
import { FiPlusCircle } from "react-icons/fi"
import { BsFillTrashFill } from "react-icons/bs"

type Task = {
	id: number
	title: string
	date: any
	toDo: boolean
	inProgress: boolean
	done: boolean
}

type Props = {
	title: string
}

const Card = ({ title }: Props) => {
	const [showAddNote, setShowAddNote] = useState<boolean>(false)
	const [id, setId] = useState<number>(1)
	const [textNewTask, setTextNewTask] = useState<any>("")
	const [task, setTask] = useState<Task[]>([])
	const date: Date = new Date()
	const actDate: any =
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
		toDo: true,
		inProgress: false,
		done: false,
	}

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()
		setTask([...task, taskObj])
		setId(id + 1)
		setTextNewTask("")
	}

	const handleDelTask = (e: any) => {
		const filterDel = task.filter(t => t.id !== e)
		setTask(filterDel)
	}

	return (
		<article className='card-article'>
			<header className='header-card'>
				<div className='array-length'>
					<p>{task.length}</p>
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
								onChange={e => setTextNewTask(e.target.value)}
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
					{task.map((e, i) => (
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
					))}
				</div>
			</section>
		</article>
	)
}

export default Card
