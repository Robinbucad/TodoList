import { BsFillTrashFill } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
import { MdOutlineFileDownloadDone } from "react-icons/md"
import { CgEditBlackPoint } from "react-icons/cg"
import "./style.scss"
import { SingleTaskProps } from "../../types"
import { useCheckTaskDat } from "../../API"
import { useState } from "react"

export const SingleTask: React.FC<SingleTaskProps> = ({
	title,
	id,
	handleDelTask,
}: SingleTaskProps) => {
	const { checkSingleTask, taskState } = useCheckTaskDat()
	const [edit, setEdit] = useState<boolean>(false)
	const [editTask, setEditTask] = useState<string>(title)
	const handleSubmit = async () => {
		await checkSingleTask(`http://localhost:4000/toDo/${id}`, "PATCH", editTask)
		setEdit(!edit)
		window.location.reload()
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
				<div className='inProgress'>
					<p>In progress</p>
				</div>

				<div>
					<p>Important</p>
				</div>
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
				<button className='btn-delTask'>
					<CgEditBlackPoint />
				</button>
			</div>
		</div>
	)
}
