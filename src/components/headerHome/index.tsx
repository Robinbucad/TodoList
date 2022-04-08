import { Navbar, Container, Nav } from "react-bootstrap"
import "./style.scss"

function HeaderHome() {
	return (
		<>
			<Navbar bg='light' variant='light' className='header-app-home'>
				<Container fluid>
					<Navbar.Brand>To Do App</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='https://robinwebsite.netlify.app/' target='_blank'>
							Home
						</Nav.Link>
					</Nav>
					<Nav className='desc'>
						To Do app using TypeScript with stack MERN, and tested with Jest.
					</Nav>
				</Container>
			</Navbar>
			<br />
		</>
	)
}

export default HeaderHome
