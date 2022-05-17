import { BsFillTrashFill } from "react-icons/bs"
import { AiFillEdit, AiOutlineCheck } from "react-icons/ai"
import { MdOutlineFileDownloadDone } from "react-icons/md"
import "./style.scss"
import { SingleTaskProps } from "../../types"
import { useCheckTaskDat } from "../../API"
import { useState } from "react"

import { Col, Container, Row } from "react-bootstrap"

const SingleTask: React.FC<SingleTaskProps> = ({
	title,
	id,
	handleDelTask,
}: SingleTaskProps) => {
	const { checkSingleTask, taskState } = useCheckTaskDat()
	const [edit, setEdit] = useState<boolean>(false)
	const [editTask, setEditTask] = useState<string>(title)
	const [taskDone, setTaskDone] = useState<boolean>(false)

	const handleSubmit = async () => {
		await checkSingleTask(`http://localhost:3001/toDo/${id}`, "PATCH", editTask)
		setEdit(!edit)
		window.location.reload()
	}

	return (
		<Container fluid>
			<Row className='row-cont'>
				<Col xs={6} sm={7} md={7} lg={11} className='head-task'>
					{!edit ? (
						<div>
							{taskDone ? (
								<s>
									{" "}
									{editTask}{" "}
									{taskState.state === "error" ? <p>Error...</p> : null}
								</s>
							) : (
								<li>
									{editTask}{" "}
									{taskState.state === "error" ? <p>Error...</p> : null}
								</li>
							)}
						</div>
					) : (
						<input
							onChange={e => setEditTask(e.target.value)}
							className='placeHolderEdit'
							type='text'
							placeholder={editTask}
						/>
					)}
				</Col>

				<Col xs={2} sm={2} md={2} lg={1} className='btn-divOpts'>
					<button
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
						<button className='btn-delTask' onClick={handleSubmit}>
							<MdOutlineFileDownloadDone />
						</button>
					)}
					<button
						onClick={() => setTaskDone(!taskDone)}
						className='btn-delTask'
					>
						<AiOutlineCheck />
					</button>
				</Col>
			</Row>
		</Container>
	)
}

export default SingleTask
