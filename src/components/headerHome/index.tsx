import { Navbar, Container } from "react-bootstrap"
import "./style.scss"

function HeaderHome() {
	return (
		<>
			<Navbar bg='light' variant='light' className='header-app-home'>
				<Container fluid>
					<Navbar.Brand>To Do App</Navbar.Brand>
				</Container>
			</Navbar>
			<br />
		</>
	)
}

export default HeaderHome
