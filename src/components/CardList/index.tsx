import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useFetchData } from "../../API"
import { TasksContext } from "../../context/tasks.context"
import { Task } from "../../types"
import Card from "../Card"
import Header from "../Header/Header"
import "./style.scss"

const CardList = () => {
	const { taskToDo, filterToDo } = useContext(TasksContext)
	useFetchData<Task[]>("http://localhost:3001/toDo")

	return (
		<Container fluid className='p-0'>
			<Row>
				<Col className='card-container p-0'>
					<Header></Header>
					<Card
						title='To do'
						lengthTask={taskToDo.length}
						taskToDoProp={filterToDo}
					></Card>
				</Col>
			</Row>
		</Container>
	)
}

export default CardList
