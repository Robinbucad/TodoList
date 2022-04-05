import { Button } from "react-bootstrap"
import "./style.scss"
import { FiPlusCircle } from "react-icons/fi"
import { BsFillTrashFill } from "react-icons/bs"

export type Task = {
	id: number
	title: string
	date: any
	toDo: boolean
	inProgress: boolean
	done: boolean
}

interface Props {
	title: string
	showAddNote: boolean
	setShowAddNote: (e: any) => void
	id: number
	setId: (e: any) => void
	textNewTask: string
	setTextNewTask: (e: any) => void
	handleSubmit: (e: any) => void
	handleDelTask: (e: any) => void
	task: Array
	setTask: (e: any) => void
}

const Card = ({
	title,
	showAddNote,
	setTask,
	task,
	setShowAddNote,
	id,
	setId,
	textNewTask,
	setTextNewTask,
	handleSubmit,
}: Props) => {
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
					{task.map((e: any, i: any) => (
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
