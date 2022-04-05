import Card, { Task } from "../Card"
import React, { useState, useContext } from "react"
import "./style.scss"

const CardList = () => {
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

	const handleSubmit = (e: any) => {
		e.preventDefault()
		setTask([...task, taskObj])
		setId(id + 1)
		setTextNewTask("")
	}

	const handleDelTask = (e: any) => {
		const filterDel = task.filter((t: any) => t.id !== e)
		setTask(filterDel)
	}
	return (
		<div className='card-container'>
			<Card
				id={id}
				title='To do'
				showAddNote={showAddNote}
				setShowAddNote={setShowAddNote}
				setId={setId}
				textNewTask={textNewTask}
				setTextNewTask={setTextNewTask}
				handleSubmit={handleSubmit}
				handleDelTask={handleDelTask}
			></Card>
		</div>
	)
}

export default CardList
