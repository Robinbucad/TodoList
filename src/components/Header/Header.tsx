import miLogo from "../../assets/images/miLogo.png"
import "./style.scss"

const Header = () => {
	return (
		<>
			<header className='header-app'>
				<img className='img-logo' src={miLogo}></img>
				<p>To Do List Using TypeScript</p>
			</header>
			<div className='search-filter'>
				<p>Made by Robin</p>
				<input
					className='input-filter'
					type='text'
					placeholder='Busque tarea'
				></input>
			</div>
		</>
	)
}

export default Header
