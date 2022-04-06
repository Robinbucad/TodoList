import { useState } from "react"
import { BsFillTrashFill } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
import { MdOutlineFileDownloadDone } from "react-icons/md"
import { CgEditBlackPoint } from "react-icons/cg"
import "./style.scss"
import { SingleTaskProps } from "../../types"
import { useCheckTaskDat } from "../../API"

export const SingleTask: React.FC<SingleTaskProps> = ({
	title,
	id,
	date,
	handleDelTask,
}: SingleTaskProps) => {
	const { checkSingleTask, taskState } = useCheckTaskDat()
	const [edit, setEdit] = useState<boolean>(false)
	const [editTask, setEditTask] = useState<string>(title)

	const handleSubmit = () => {
		checkSingleTask(`http://localhost:4000/toDo/${id}`, "PATCH", editTask)
		setEdit(!edit)
	}

	return (
		<div className='task'>
			<header className='header-task'>
				{!edit ? (
					<div>
						<p>
							{editTask} {taskState.state === "error" ? <p>Error...</p> : null}
						</p>
					</div>
				) : (
					<input
						onChange={e => setEditTask(e.target.value)}
						className='placeHolderEdit'
						type='text'
						placeholder={editTask}
					/>
				)}
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
					<button className='btn-delTask'>
						<CgEditBlackPoint />
					</button>
				</div>
			</header>

			<footer className='footer-task'>
				<p>{id}</p>
				<p>{date}</p>
			</footer>
		</div>
	)
}
